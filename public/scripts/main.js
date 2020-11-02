var rhit = rhit || {};

rhit.authManager = null;

rhit.FB_COLLECTION_SCHEDULE = 'schedule';
rhit.FB_COLLECTION_USER     = 'user';

rhit.defaultSchedule = {
  days: [{
    periods: [
      {
        name: 'Free',
        location: '',
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Monday',
  }, 
  {
    periods: [
      {
        name: 'Free',
        location: '',
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Tuesday',
  }, 
  {
    periods: [
      {
        name: 'Free',
        location: '',
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Wednesday',
  }, 
  {
    periods: [
      {
        name: 'Free',
        location: '',
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Thursday',
  }, 
  {
    periods: [
      {
        name: 'Free',
        location: '',
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: 'Free',
        location: '',
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Friday',
  }],
};

rhit.scheduleManager = null;
rhit.settingsManager = null;

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
    return this._user.uid;
  }
}

rhit.ImportPageController = class {
	constructor() {
		// https://stackoverflow.com/questions/16215771/how-to-open-select-file-dialog-via-js
		document.querySelector('#importButton').addEventListener('click', (event) => {
			document.querySelector('#fileInput').click();
		});

		document.querySelector('#skipButton').addEventListener('click', (event) => {
			this.importSchedule(rhit.defaultSchedule);
		});

		document.querySelector('#fileInput').addEventListener('change', (event) => {
			const file = event.target.files[0];
			const reader = new FileReader();

			reader.onerror = () => {
				console.error(reader.error);
			};

			reader.onload = () => {
				this.parseScheduleData(reader.result);
			};

			reader.readAsText(file);
		});
	}

	importSchedule(schedule) {
		firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(rhit.authManager.uid).set(schedule).then(function() {
			window.location.href = '/now.html';
    }).catch(function(error) {
      console.error('Error writing document: ', error);
		});
	}

	parseScheduleData(data) {
		let schedule = rhit.defaultSchedule;

    const jcalData = ICAL.parse(data);
    let cutOffStartDate;
		let cutOffEndDate;
		
    for (const event of jcalData[2]) {
      const eventAttributes = event[1];
      let className;
      let location;
      let startTime;
			let endTime;
			
      for (const attribute of eventAttributes) {
        if (attribute[0] === 'summary') {
          className = attribute[3];
        } else if (attribute[0] === 'location') {
          location = attribute[3];
        } else if (attribute[0] === 'dtstart') {
          startTime = attribute[3];
        } else if (attribute[0] === 'dtend') {
          endTime = attribute[3];
        }
			}
			
      if (!cutOffStartDate || !cutOffEndDate) {
        cutOffEndDate = new Date(startTime);
        cutOffEndDate.setDate(cutOffEndDate.getDate()+(5-cutOffEndDate.getDay()));
        cutOffEndDate.setHours(17);
        cutOffEndDate.setMinutes(0);
        cutOffStartDate = new Date(cutOffEndDate);
        cutOffStartDate.setDate(cutOffEndDate.getDate()-4);
        cutOffStartDate.setHours(7);
        cutOffStartDate.setMinutes(59);
			}
			
      const startDateTime = new Date(startTime);
      const endDateTime = new Date(endTime);
      const dayStart = new Date(startDateTime);
      const dayEnd = new Date(startDateTime);
      dayStart.setHours(8);
      dayStart.setMinutes(0);
      dayEnd.setHours(17);
			dayEnd.setMinutes(0);
			
      if (startDateTime > cutOffStartDate && endDateTime < cutOffEndDate && startDateTime >= dayStart && endDateTime <= dayEnd) {
        let day = schedule.days[new Date(startTime).getDay() - 1];
        let index = 0;
        for (const period of day.periods) {
          const periodStartTime = new Date(dayStart);
          periodStartTime.setHours(Number(period.startTime.split(':')[0]));
          periodStartTime.setMinutes(Number(period.startTime.split(':')[1].replace(/\D/g, '')));
          if (period.startTime.toLowerCase().includes('pm')) {
            periodStartTime.setHours(periodStartTime.getHours() + 12);
          }
          const periodEndTime = new Date(dayStart);
          periodEndTime.setHours(Number(period.endTime.split(':')[0]));
          periodEndTime.setMinutes(Number(period.endTime.split(':')[1].replace(/\D/g, '')));
          if (period.endTime.toLowerCase().includes('pm')) {
            periodEndTime.setHours(periodEndTime.getHours() + 12);
          }
          if (periodStartTime >= startDateTime && periodEndTime <= endDateTime) {
            schedule.days[new Date(startTime).getDay() - 1].periods[index] = {
              name: className,
              location,
              startTime: period.startTime,
              endTime: period.endTime
            };
          }
          index++;
        }
      }
    }
    
    this.importSchedule(schedule);
	}
}

rhit.NowViewPageController = class {
	constructor() {
		rhit.scheduleManager = new rhit.ScheduleManager(rhit.authManager.uid);
		rhit.scheduleManager.beginListening(() => {
			this.updateView();
    });
    
    document.querySelector("#settings").addEventListener("click", (event) => {
      window.location.href = "/settings.html";
    });
	}

	updateView() {
    const currPeriod = rhit.scheduleManager.getCurrentPeriodExtended();
    const freePeriod = rhit.scheduleManager.getNextFreePeriodExtended();
    const nextPeriod = rhit.scheduleManager.getNextPeriodExtended();
    const currPeriodCard = document.querySelector('.current-period-card');
    const freePeriodCard = document.querySelector('.free-period-card');
    const nextPeriodCard = document.querySelector('.next-period-card');
    if (currPeriod != null && currPeriod.name === 'Free') {
      this.hideCard(currPeriodCard);
    } else {
      this.updateCard(currPeriodCard, currPeriod);
    }
    this.updateCard(freePeriodCard, freePeriod);
    if (nextPeriod != null && nextPeriod.name === 'Free') {
      this.hideCard(nextPeriodCard);
    } else {
      this.updateCard(nextPeriodCard, nextPeriod);
    }
  }
  
  updateCard(card, period) {
    if (period == null) {
      this.hideCard(card);
    } else {
      card.querySelector('.class-name').innerText = period.name;
      card.querySelector('.class-location').innerText = period.location;
      card.querySelector('.class-time').innerText = `${period.startTime} - ${period.endTime}`;  
      this.showCard(card);
    }
  }

  hideCard(card) {
    card.classList.add('d-none');
  }

  showCard(card) {
    card.classList.remove('d-none');
  }
}

rhit.DayViewPageController = class {
	constructor() {
		rhit.scheduleManager = new rhit.ScheduleManager(rhit.authManager.uid);
		rhit.scheduleManager.beginListening(() => {
			this.updateView();
		});
		this._selectedDay = rhit.scheduleManager.getCurrentDayIndex();
		
		document.querySelectorAll('.day-selector .day-text').forEach((elem) => {
			elem.addEventListener('click', (event) => {
				this._selectedDay = parseInt(event.target.dataset['day']);
				this.updateView();
			});
		});
    
    document.querySelector("#settings").addEventListener("click", (event) => {
      window.location.href = "/settings.html";
    });
	}

	updateView() {
		document.querySelectorAll('.day-selector .day-text').forEach((elem) => {
			if (parseInt(elem.dataset['day']) === this._selectedDay) {
				elem.classList.add('active');
			} else {
				elem.classList.remove('active');
			}
		});

		const periodElems = document.querySelectorAll('.period');
		const currDay = new Date().getDay()-1;
		const currPeriod = rhit.scheduleManager.getCurrentPeriodIndex();

		for (let i = 0; i < rhit.scheduleManager.getPeriodsLength(); i++) {
			let period = rhit.scheduleManager.getPeriod(this._selectedDay, i);
			if (currDay === this._selectedDay && i === currPeriod) {
				periodElems[i].classList.add('current-period');
			} else {
				periodElems[i].classList.remove('current-period');
			}
			periodElems[i].children[0].children[0].innerText = period.name;
			periodElems[i].children[0].children[1].innerText = period.location;
		}
	}
}

rhit.WeekViewPageController = class {
	constructor() {
		rhit.scheduleManager = new rhit.ScheduleManager(rhit.authManager.uid);
		rhit.scheduleManager.beginListening(() => {
			this.updateView();
		});
    
    document.querySelector("#settings").addEventListener("click", (event) => {
      window.location.href = "/settings.html";
    });
	}

	updateView() {
		const currPeriod = rhit.scheduleManager.getCurrentPeriodIndex();
		const currDay = rhit.scheduleManager.getCurrentDayIndex();
		const hourElems = document.querySelectorAll('.week-day');

		for (let dayIndex = 0; dayIndex < rhit.scheduleManager.getDaysLength(); dayIndex++) {
			for (let periodIndex = 0; periodIndex < rhit.scheduleManager.getPeriodsLength(); periodIndex++) {
				const period = rhit.scheduleManager.getPeriod(dayIndex, periodIndex);
				const dayElems = hourElems[periodIndex].querySelectorAll('.class-entry');

				if (periodIndex === currPeriod) {
					dayElems[dayIndex].classList.add('current-period');
				} else {
					dayElems[dayIndex].classList.remove('current-period');
				}

				if (dayIndex === currDay) {
					dayElems[dayIndex].classList.add('current-day');
				} else {
					dayElems[dayIndex].classList.remove('current-day');
				}

				if (period.name === 'Free') {
					continue;
				}

				dayElems[dayIndex].innerText = period.location ? `${period.name} in ${period.location}` : period.name;
			}
		}
	}
}

rhit.ScheduleManager = class {
	constructor(uid) {
    console.log(uid);
		this._uid = uid;
		this._schedule = null;
		this._unsubscribe = null;
	}

	beginListening(changeListener) {
		this._unsubscribe = firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(this._uid)
			.onSnapshot((doc) => {
				if (!doc.exists) {
					window.location.href = '/import.html';
				} else {
					this._schedule = doc.data();
					changeListener();
				}
			}, (error) => {
				// TODO: better error handling
				console.error(error);
			});
	}

	stopListening() {
		this._unsubscribe();
	}

	getCurrentPeriodIndex() {
		if (this.hasSchedule()) {
			const currTime = new Date();
			for (let i = 0; i < this._schedule.days[0].periods.length; i++) {
				const period = this._schedule.days[0].periods[i];
				const startTime = new Date();
				startTime.setHours(Number(period.startTime.split(':')[0]));
				startTime.setMinutes(Number(period.startTime.split(':')[1].replace(/\D/g, '')));
				if (period.startTime.toLowerCase().includes('pm') && startTime.getHours() != 12) {
					startTime.setHours(startTime.getHours() + 12);
				}
				const endTime = new Date();
				endTime.setHours(Number(period.endTime.split(':')[0]));
				endTime.setMinutes(Number(period.endTime.split(':')[1].replace(/\D/g, '')));
				if (period.endTime.toLowerCase().includes('pm') && endTime.getHours() != 12) {
					endTime.setHours(endTime.getHours() + 12);
				}
				if (startTime <= currTime && currTime <= endTime) {
					return i;
				}
			}
		}
		return -1;
	}

	getClosestPeriodIndex() {
		if (this.hasSchedule()) {
			const currTime = new Date();
			const period = this._schedule.days[0].periods[0];
			const startTime = new Date();
			startTime.setHours(Number(period.startTime.split(':')[0]) && startTime.getHours() != 12);
			startTime.setMinutes(Number(period.startTime.split(':')[1].replace(/\D/g, '')));
			if (startTime > currTime) {
				return 0;
			}
			for (let i = 0; i < this._schedule.days[0].periods.length; i++) {
				const period = this._schedule.days[0].periods[i];
				const startTime = new Date();
				startTime.setHours(Number(period.startTime.split(':')[0])-1);
				startTime.setMinutes(Number(period.endTime.split(':')[1].replace(/\D/g, '')));
				if (period.startTime.toLowerCase().includes('pm') && startTime.getHours() != 11) {
					startTime.setHours(startTime.getHours() + 12);
				}
				const endTime = new Date();
				endTime.setHours(Number(period.endTime.split(':')[0]));
				endTime.setMinutes(Number(period.endTime.split(':')[1].replace(/\D/g, '')));
				if (period.endTime.toLowerCase().includes('pm') && endTime.getHours() != 12) {
					endTime.setHours(endTime.getHours() + 12);
        }
				if (startTime <= currTime && currTime <= endTime) {
					return i;
				}
			}
		}
		return -1;
	}

	getCurrentDayIndex() {
		let day = new Date().getDay();
		if (day === 0 || day === 6) {
			return 0;
    }
		return day-1;
	}

	isWeekend() {
		let day = new Date().getDay();
		return day === 0 || day === 6;
	}

	getPeriod(dayIndex, periodIndex) {
		if (this.hasSchedule()) {
			return this._schedule.days[dayIndex].periods[periodIndex];
		}
		return null;
	}

	getDaysLength() {
		if (this.hasSchedule()) {
			return this._schedule.days.length;
		}
	}

	getPeriodsLength() {
		if (this.hasSchedule()) {
			return this._schedule.days[0].periods.length;
		}
	}

	hasSchedule() {
		return !!this._schedule;
	}

	getCurrentPeriodExtended() {
		if (this.hasSchedule()) {
			let currDay = this.getCurrentDayIndex();
			let currPeriod = this.getClosestPeriodIndex();
			if (this.isWeekend()) {
				currDay = 0;
				currPeriod = 0;
			} else if (currPeriod === -1) {
				currDay = currDay+1;
				if (currDay === 5) {
					currDay = 0;
				}
				currPeriod = 0;
			}

			let day = this._schedule.days[currDay];

			let period = { ...day.periods[currPeriod] };
			let setStart = false;
			for (let i = 0; i < day.periods.length; i++) {
				if (i === currPeriod) {
					continue;
				} else if (day.periods[i].name === period.name && day.periods[i].location === period.location) {
					if (i < currPeriod && !setStart) {
						period.startTime = day.periods[i].startTime;
						setStart = true;
					} else if (i > currPeriod) {
						period.endTime = day.periods[i].endTime;
					}
				}
			}
			return period;
		}
		return null;
	}

	getNextFreePeriodExtended() {
		if (this.hasSchedule()) {
			let currDay = this.getCurrentDayIndex();
      let currPeriod = this.getClosestPeriodIndex();
			if (this.isWeekend()) {
				currDay = 0;
				currPeriod = 0;
			} else if (currPeriod === -1) {
				currDay = currDay+1;
				if (currDay === 5) {
					currDay = 0;
				}
				currPeriod = 0;
			}

			let day = this._schedule.days[currDay];

			let period = { name: 'Free', location: '', startTime: '', endTime: ''};
			let setStart = false;
			for (let i = currPeriod; i < day.periods.length; i++) {
				if (day.periods[i].name === 'Free') {
					if (!setStart) {
						period.startTime = day.periods[i].startTime;
						period.endTime = day.periods[i].endTime;
						setStart = true;
					} else {
						period.endTime = day.periods[i].endTime;
					}
				} else if (i !== currPeriod && !(day.periods[i].name === day.periods[currPeriod].name && day.periods[i].location === day.periods[currPeriod].location)) {
					break;
				}
			}
			if (period.startTime === '' || period.endTime === '') {
				return null;
			}
			return period;
		}
		return null;
  }
  
  getNextPeriodExtended() {
		if (this.hasSchedule()) {
			let currDay = this.getCurrentDayIndex();
			let currPeriod = this.getClosestPeriodIndex();
			if (this.isWeekend()) {
				currDay = 0;
				currPeriod = 0;
			} else if (currPeriod === -1) {
				currDay = currDay+1;
				if (currDay === 5) {
					currDay = 0;
				}
				currPeriod = 0;
      }

			let day = this._schedule.days[currDay];

			let period = null;
			let setStart = false;
			for (let i = currPeriod; i < day.periods.length; i++) {
        if (i === currPeriod || day.periods[i].name === 'Free' 
          || (day.periods[i].name === day.periods[currPeriod].name && day.periods[i].location === day.periods[currPeriod].location)) {
					continue;
        }
        
				if (!setStart) {
          period = { ...day.periods[i] };
          setStart = true;
        } else if (period.name === day.periods[i].name && period.location === day.periods[i].location) {
          period.endTime = day.periods[i].endTime;
				} else {
					break;
				}
			}
			return period;
		}
		return null;
	}
}

rhit.SettingsPageController = class {
  constructor() {
    rhit.settingsManager = new rhit.SettingsManager(rhit.authManager.uid);
    rhit.settingsManager.beginListening(this.updateView.bind(this));

    document.querySelector("#close").addEventListener("click", (event) => {
      window.history.back();
    });

    document.querySelector("#importScheduleButton").addEventListener("click", (event) => {
      window.location.href = "import.html";
    });

    document.querySelector("#clearScheduleButton").addEventListener("click", (event) => {
      firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(rhit.authManager.uid).set(rhit.defaultSchedule).catch((error) => {
        console.error('Error writing document: ', error);
      });
    });

    let nameField = document.querySelector("#name");
    nameField.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) { // Enter key
        nameField.blur();
      } else if (event.keyCode === 27) { // Escape key
        nameField.value = rhit.settingsManager.name;
        nameField.blur();
      }
    });

    nameField.addEventListener("focusout", (event) => {
      rhit.settingsManager.setName(nameField.value);
    });
  }

  updateView() {
    document.querySelector("#name").value = rhit.settingsManager.name;
  }
}

rhit.SettingsManager = class {
  constructor(uid) {
    this._uid    = uid;
    this._name   = "Jane Doe";
    this._shared = [];
  }

  beginListening(changeListener) {
		this._unsubscribe = firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(this._uid)
			.onSnapshot((doc) => {
				if (!doc.exists) {
          this.setName(this._uid);
				} else {
          this._name = doc.data().displayName;
				}
			  changeListener();
			}, (error) => {
				console.error(error);
			});
  }

  setName(name) {
    this._name = name;
    firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(this._uid).set({ displayName: this._name }).catch((error) => { console.error(error); });
  }

  get name() {
    return this._name;
  }
}

rhit.checkForRedirects = () => {
	if (document.querySelector("#loginPage") && rhit.authManager.isAuthenticated) {
		window.location.href = "/now.html";
	} else if (!document.querySelector("#loginPage") && !rhit.authManager.isAuthenticated) {
		window.location.href = "/";
	}
}

rhit.initializePage = function() {
	const urlParams = new URLSearchParams(window.location.search);
	if (document.querySelector('#importPage')) {
		new rhit.ImportPageController();
	} else if (document.querySelector('#dayViewPage')) {
		new rhit.DayViewPageController();
	} else if (document.querySelector('#weekViewPage')) {
		new rhit.WeekViewPageController();
	} else if (document.querySelector('#nowViewPage')) {
		new rhit.NowViewPageController();
	} else if (document.querySelector("#loginPage")) {
		new rhit.LoginPageController();
  } else if (document.querySelector("#settingsPage")) {
    new rhit.SettingsPageController();
  }
};

/* Main */
rhit.main = function () {
	rhit.authManager = new rhit.AuthManager();
	rhit.authManager.beginListening(() => {
		rhit.checkForRedirects();
		rhit.initializePage();
	});
};

rhit.main();
