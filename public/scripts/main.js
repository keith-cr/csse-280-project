var rhit = rhit || {};

rhit.authManager = null;

rhit.LoginPageController = class {
	constructor() {
		document.querySelector("#loginButton").addEventListener("click", (event) => {
			rhit.authManager.signIn();
		});
	}
}

rhit.AuthManager = class {
	constructor() {
		this._user = null;
	}

	beginListening(changeListener) {
		firebase.auth().onAuthStateChanged((user) => {
			this._user = user;
			changeListener();
		});
	}

	signIn() {
		Rosefire.signIn("f1b9e751-e617-465c-9ebe-074d22062af3", (err, rfUser) => {
			if (err) {
				console.log("Rosefire error!");
			}
			console.log("Rosefire success!", rfUser);
			firebase.auth().signInWithCustomToken(rfUser.token).catch((error) => {
				if (error.code === "auth/invalid-custom-token") {
					console.error("Invalid token");
				} else {
					console.error("Custom auth error", error.code, error.message);
				}
			});
		});
	}

	signOut() {
		firebase.auth().signOut().catch(() => {
			console.log("Signed out");
		});
	}

	get isAuthenticated() {
		return !!this._user;
	}

	get uid() {
		return this._uid;
	}
}

rhit.checkForRedirects = () => {
	if (document.querySelector("#loginPage") && rhit.authManager.isAuthenticated) {
		window.location.href = "/now.html";
	} else if (!document.querySelector("#loginPage") && !rhit.authManager.isAuthenticated) {
		window.location.href = "/";
	}
}

rhit.initializePage = () => {
	if (document.querySelector("#loginPage")) {
		new rhit.LoginPageController();
	}
}

/* Main */
rhit.main = function () {
	rhit.authManager = new rhit.AuthManager();
	rhit.authManager.beginListening(() => {
		rhit.checkForRedirects();
		rhit.initializePage();
	});
};

rhit.main();
