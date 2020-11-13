var rhit = rhit || {};

rhit.authManager = null;

rhit.FB_COLLECTION_SCHEDULE = 'schedule';
rhit.FB_COLLECTION_USER = 'user';

rhit.menuToggle = false;

rhit.defaultSchedule = {
  days: [{
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Monday',
  }, 
  {
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Tuesday',
  }, 
  {
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Wednesday',
  }, 
  {
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Thursday',
  }, 
  {
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
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
    this._userData = null;
	}

	beginListening(changeListener) {
		firebase.auth().onAuthStateChanged((user) => {
      this._user = user;
      if (this.isAuthenticated) {
        firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(this.uid)
          .onSnapshot((doc) => {
            if (!doc.exists) {
              firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(this.uid).set({ displayName: this.uid });
            } else {
              this._userData = doc.data();
              changeListener();
            }
          }, (error) => {
            // TODO: better error handling
            console.error(error);
          });
      } else {
        this._userData = null;
        changeListener();
      }
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
		firebase.auth().signOut();
	}

	get isAuthenticated() {
		return !!this._user;
	}

	get uid() {
    return this._user.uid;
  }

  get displayName() {
    return this._userData == null ? '' : this._userData.displayName;
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

	importSchedule(schedule, location) {
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
              isFree: false,
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
	constructor(uid) {
		rhit.scheduleManager = new rhit.ScheduleManager(uid);
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
    if (currPeriod != null && currPeriod.isFree) {
      this.hideCard(currPeriodCard);
    } else {
      this.updateCard(currPeriodCard, currPeriod);
    }
    this.updateCard(freePeriodCard, freePeriod);
    if (nextPeriod != null && nextPeriod.isFree) {
      this.hideCard(nextPeriodCard);
    } else {
      this.updateCard(nextPeriodCard, nextPeriod);
    }
  }
  
  updateCard(card, period) {
    if (period == null) {
      this.hideCard(card);
    } else {
      card.querySelector('.class-name').innerText = rhit.scheduleManager.getPeriodDisplayName(period);
      card.querySelector('.class-location').innerText = rhit.scheduleManager.getPeriodDisplayLocation(period);
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
	constructor(uid) {
		rhit.scheduleManager = new rhit.ScheduleManager(uid);
		rhit.scheduleManager.beginListening(() => {
			this.updateView();
		});
    this._selectedDay = rhit.scheduleManager.getCurrentDayIndex();
    this._editing = false;
		
		document.querySelectorAll('.day-selector .day-text').forEach((elem) => {
			elem.addEventListener('click', (event) => {
				this._selectedDay = parseInt(event.target.dataset['day']);
				this.updateView();
			});
		});
    
    document.querySelector("#settings").addEventListener("click", (event) => {
      window.location.href = "/settings.html";
    });

    document.querySelector('.edit-button').addEventListener('click', (event) => {
      this._editing = true;
      this.updateView();
    });

    document.querySelector('.save-button').addEventListener('click', (event) => {
      this._editing = false;
      const periodElems = document.querySelectorAll('.period');
  
      for (let i = 0; i < rhit.scheduleManager.getPeriodsLength(); i++) {
        const periodRowCheck = periodElems[i].querySelector('.period-row.pr-check');
        const periodRowInput = periodElems[i].querySelector('.period-row.pr-input');
        let period = rhit.scheduleManager.getPeriod(this._selectedDay, i);
        if (periodRowCheck.querySelector('.period-free-checkbox').checked) {
          period.isFree = true;
          period.name = '';
          period.location = '';
        } else {
          period.isFree = false;
          period.name = periodRowInput.querySelector('.period-name-input').value;
          period.location = periodRowInput.querySelector('.period-location-input').value
        }
        rhit.scheduleManager.setPeriod(this._selectedDay, i, period);        
      } 

      this._editing = false;
      rhit.scheduleManager.save((updated) => {
        if (!updated) {
          this.updateView();
        }
      });
    });

    document.querySelectorAll('.period-free-checkbox').forEach(element => {
      element.addEventListener('change', (event) => {
        const parentNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        const periodRowInput = parentNode.querySelector('.period-row.pr-input');
        const periodRowCheck = parentNode.querySelector('.period-row.pr-check');
        if (event.target.checked) {
          periodRowInput.classList.add('d-none');
          periodRowCheck.classList.remove('pr-top');
          periodRowCheck.classList.add('pr-middle');
        } else {
          periodRowInput.classList.remove('d-none');
          periodRowCheck.classList.add('pr-top');
          periodRowCheck.classList.remove('pr-middle');
        }
      });
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

    if (!this._editing) {
      document.querySelector('.save-button').classList.add('d-none');
      document.querySelector('.edit-button').classList.remove('d-none');
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
        const periodRowText = periodElems[i].querySelector('.period-row.pr-text');
        const periodRowCheck = periodElems[i].querySelector('.period-row.pr-check');
        const periodRowInput = periodElems[i].querySelector('.period-row.pr-input');
        periodRowText.classList.remove('d-none');
        periodRowCheck.classList.add('d-none');
        periodRowInput.classList.add('d-none');
        periodRowText.children[0].innerText = rhit.scheduleManager.getPeriodDisplayName(period);
        periodRowText.children[1].innerText = rhit.scheduleManager.getPeriodDisplayLocation(period);
      } 
    } else {  
      document.querySelector('.save-button').classList.remove('d-none');
      document.querySelector('.edit-button').classList.add('d-none');
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
        const periodRowText = periodElems[i].querySelector('.period-row.pr-text');
        const periodRowCheck = periodElems[i].querySelector('.period-row.pr-check');
        const periodRowInput = periodElems[i].querySelector('.period-row.pr-input');
        periodRowText.classList.add('d-none');
        periodRowCheck.classList.remove('d-none');
        periodRowCheck.querySelector('.period-free-checkbox').checked = period.isFree;
        if (period.isFree) {
          periodRowInput.classList.add('d-none');
          periodRowCheck.classList.remove('pr-top');
          periodRowCheck.classList.add('pr-middle');
        } else {
          periodRowInput.classList.remove('d-none');
          periodRowCheck.classList.add('pr-top');
          periodRowCheck.classList.remove('pr-middle');
        }
        periodRowInput.querySelector('.period-name-input').value = rhit.scheduleManager.getPeriodDisplayName(period);
        periodRowInput.querySelector('.period-location-input').value = rhit.scheduleManager.getPeriodDisplayLocation(period);
      } 
    }
	}
}

rhit.WeekViewPageController = class {
	constructor(uid) {
		rhit.scheduleManager = new rhit.ScheduleManager(uid);
		rhit.scheduleManager.beginListening(() => {
			this.updateView();
    });
    
    this._editing = false;
    this._editingPeriod = -1;
    this._editingDay = -1;
    
    document.querySelector("#settings").addEventListener("click", (event) => {
      window.location.href = "/settings.html";
    });

    document.querySelector('.edit-button').addEventListener('click', (event) => {
      this._editing = true;
      this.updateView();
    });

    document.querySelector('.save-button').addEventListener('click', (event) => {
      this._editing = false;
      this._editingDay = -1;
      this._editingPeriod = -1;
  
      rhit.scheduleManager.save((updated) => {
        if (!updated) {
          this.updateView();
        }
      });
    });

    document.querySelectorAll('.save-period-button').forEach(element => {
      element.addEventListener('click', (event) => {
        const parentNode = event.currentTarget.parentNode;
        let period = rhit.scheduleManager.getPeriod(this._editingDay, this._editingPeriod);
        if (parentNode.querySelector('.period-free-checkbox').checked) {
          period.isFree = true;
          period.name = '';
          period.location = '';
        } else {
          period.isFree = false;
          period.name = parentNode.querySelector('.period-name-input').value;
          period.location = parentNode.querySelector('.period-location-input').value
        }
        rhit.scheduleManager.setPeriod(this._editingDay, this._editingPeriod, period);
        this._editingPeriod = -1;
        this._editingDay = -1;
        this.updateView();
      });
    });

    document.querySelectorAll('.period-free-checkbox').forEach(element => {
      element.addEventListener('change', (event) => {
        const parentNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        const editFields = parentNode.querySelector('.edit-fields');
        if (event.target.checked) {
          editFields.classList.add('d-none');
        } else {
          editFields.classList.remove('d-none');
        }
      });
    });

    document.querySelectorAll('.class-entry').forEach(element => {
      element.addEventListener('click', (event) => {
        if (!this._editing) {
          return;
        } else {
          this._editingPeriod = parseInt(event.target.dataset['period']);
          this._editingDay = parseInt(event.target.dataset['day']);
          this.updateView();
        }
      });
    });
	}

	updateView() {
		const currPeriod = rhit.scheduleManager.getCurrentPeriodIndex();
    const currDay = rhit.scheduleManager.getCurrentDayIndex();
    const isWeekend = rhit.scheduleManager.isWeekend();
    const hourElems = document.querySelectorAll('.week-day');

		for (let dayIndex = 0; dayIndex < rhit.scheduleManager.getDaysLength(); dayIndex++) {
			for (let periodIndex = 0; periodIndex < rhit.scheduleManager.getPeriodsLength(); periodIndex++) {
				const period = rhit.scheduleManager.getPeriod(dayIndex, periodIndex);
				const dayElems = hourElems[periodIndex].querySelectorAll('.class-entry');

				if (periodIndex === currPeriod && !isWeekend) {
					dayElems[dayIndex].classList.add('current-period');
				} else {
					dayElems[dayIndex].classList.remove('current-period');
				}

				if (dayIndex === currDay && !isWeekend) {
					dayElems[dayIndex].classList.add('current-day');
				} else {
					dayElems[dayIndex].classList.remove('current-day');
				}

				if (period.isFree) {
					continue;
				}

        dayElems[dayIndex].innerText = rhit.scheduleManager.getPeriodDisplayLocation(period) 
          ? `${rhit.scheduleManager.getPeriodDisplayName(period)} in ${rhit.scheduleManager.getPeriodDisplayLocation(period)}` 
          : rhit.scheduleManager.getPeriodDisplayName(period);
			}
    }
    
    if (this._editing) {
      document.querySelector('.edit-instructions').classList.remove('d-none');
      document.querySelector('.edit-button').classList.add('d-none');
      document.querySelector('.save-button').classList.remove('d-none');
      document.querySelector('#week').classList.add('editing');

      if (this._editingDay != -1 && this._editingPeriod != -1) {
        const period = rhit.scheduleManager.getPeriod(this._editingDay, this._editingPeriod);
        for (let i = 0; i < rhit.scheduleManager.getPeriodsLength(); i++) {
          const editElem = document.querySelector(`.week-edit.period-${i}`);
          if (i === this._editingPeriod) {
            editElem.classList.remove('d-none');
            editElem.querySelector('.arrow-pointer').className = `arrow-pointer day-${this._editingDay}`;
            editElem.querySelector('.period-free-checkbox').checked = period.isFree;
            if (period.isFree) {
              editElem.querySelector('.edit-fields').classList.add('d-none');
            } else {
              editElem.querySelector('.edit-fields').classList.remove('d-none');
            }
            editElem.querySelector('.period-name-input').value = period.name;
            editElem.querySelector('.period-location-input').value = period.location;
          } else {
            editElem.classList.add('d-none');
          }
        }
      } else {
        for (let i = 0; i < rhit.scheduleManager.getPeriodsLength(); i++) {
          document.querySelector(`.week-edit.period-${i}`).classList.add('d-none');
        }
      }
    } else {
      document.querySelector('.edit-instructions').classList.add('d-none');
      document.querySelector('.edit-button').classList.remove('d-none');
      document.querySelector('.save-button').classList.add('d-none');
      document.querySelector('#week').classList.remove('editing');

      for (let i = 0; i < rhit.scheduleManager.getPeriodsLength(); i++) {
        document.querySelector(`.week-edit.period-${i}`).classList.add('d-none');
      }
    }
	}
}

rhit.ScheduleManager = class {
	constructor(uid) {
		this._uid = uid;
		this._schedule = null;
    this._unsubscribe = null;
    this._hasChanged = false;
    this._changeListener = null;
	}

	beginListening(changeListener) {
    this._changeListener = changeListener;
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
      // return a deep copy to prevent direct modification
			return { ...this._schedule.days[dayIndex].periods[periodIndex] };
		}
		return null;
  }
  
  setPeriod(dayIndex, periodIndex, period) {
    if (this.hasSchedule()) {
      if (!this.isEqual(this._schedule.days[dayIndex].periods[periodIndex], period)) {
        this._schedule.days[dayIndex].periods[periodIndex] = period;
        this._hasChanged = true;
      }
		} else {
      throw new Error('Tried to set schedule data before period was loaded.');
    }
  }

  isEqual(p1, p2) {
    return (p1.name === p2.name && p1.location === p2.location) || (p1.isFree && p2.isFree);
  }

  save(callback) {
    if (this._hasChanged) {
      firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(rhit.authManager.uid).set(this._schedule).then(function() {
        if (callback) {
          callback(true);
        }
      }).catch(function(error) {
        console.error('Error writing document: ', error);
      });  
    } else {
      if (callback) {
        callback(false);
      }
    }
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
				} else if (this.isEqual(day.periods[i], period)) {
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

			let period = { name: '', location: '', isFree: true, startTime: '', endTime: ''};
			let setStart = false;
			for (let i = currPeriod; i < day.periods.length; i++) {
				if (day.periods[i].isFree) {
					if (!setStart) {
						period.startTime = day.periods[i].startTime;
						period.endTime = day.periods[i].endTime;
						setStart = true;
					} else {
						period.endTime = day.periods[i].endTime;
					}
				} else if (i !== currPeriod && !(this.isEqual(day.periods[i], period))) {
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
        if (i === currPeriod || day.periods[i].isFree
          || ((day.periods[i].name === day.periods[currPeriod].name && day.periods[i].location === day.periods[currPeriod].location) || (day.periods[i].isFree && day.periods[currPeriod].isFree))) {
					continue;
        }
        
				if (!setStart) {
          period = { ...day.periods[i] };
          setStart = true;
        } else if (this.isEqual(day.periods[i], period)) {
          period.endTime = day.periods[i].endTime;
				} else {
					break;
				}
			}
			return period;
		}
		return null;
  }
  
  getPeriodDisplayName(period) {
    if (period.isFree) {
      return 'Free';
    }
    return period.name;
  }

  getPeriodDisplayLocation(period) {
    if (period.isFree) {
      return '';
    }
    return period.location;
  }
  
  setSchedule(uid) {
    this.stopListening();
    this._uid = uid;
    this.beginListening(this._changeListener);
  }
}

rhit.MenuController = class {
  constructor(uid) {
    rhit.menuManager = new rhit.MenuManager(rhit.authManager.uid);
    rhit.menuManager.beginListening(this.updateView.bind(this));

    if (uid !== rhit.authManager.uid) {
      document.querySelector(".navbar-myschedule").style.display = "none";
    }

    let menu = document.querySelector("#menu");
    let menuMobile = document.querySelector("#menuMobile");
    let shade = document.querySelector("#shade");
      document.querySelector("#menuButton").addEventListener("click", (event) => {
      if (!rhit.menuToggle) {
        menu.style.width = "400px";
        menuMobile.style.opacity = "1";
        shade.classList.add("active");
      } else {
        menu.style.width = "0";
        menuMobile.style.opacity = "0";
        shade.classList.remove("active");
      }
      rhit.menuToggle = !rhit.menuToggle;
    });
    shade.addEventListener("click", (event) => {
      document.querySelector("#menuButton").click();
    });
    document.querySelector("#menuMobileCancelButton").addEventListener("click", (event) => {
      document.querySelector("#menuButton").click();
    });

    document.querySelector("#myScheduleEntry").addEventListener("click", (event) => {
      window.location.href = window.location.href.split("\?")[0] + `?uid=${rhit.authManager.uid}`;
    });
    document.querySelector("#myScheduleMobile").addEventListener("click", (event) => {
      window.location.href = window.location.href.split("\?")[0] + `?uid=${rhit.authManager.uid}`;
    });

    let search = document.querySelector("#searchMenu");
    search.addEventListener("input", (event) => {
      rhit.menuManager.filter(RegExp(search.value, "i"));
    });
    search.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        search.value = "";
        search.blur();
        rhit.menuManager.filter(RegExp(""));
      }
    });

    document.querySelector("#nowLink" ).setAttribute("href", `now.html?uid=${uid}` );
    document.querySelector("#dayLink" ).setAttribute("href", `day.html?uid=${uid}` );
    document.querySelector("#weekLink").setAttribute("href", `week.html?uid=${uid}`);
  }

  updateView() {

  }
}

rhit.MenuManager = class {
  constructor(uid) {
    this._uid       = uid;
    this._shared    = new Map();
    this._sharedDiv = document.querySelector("#sharedList");
    this._sharedMobileDiv = document.querySelector("#menuMobileDynamicList");
  }

  beginListening(changeListener) {
    this._unsubscribe = firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE)
    .onSnapshot((docs) => {
      this._shared = new Map();
      this._sharedDiv.innerHTML = "";
      this._sharedMobileDiv.innerHTML = "";
      for (let doc of docs.docs) {
        if (doc.data().sharedWith && doc.data().sharedWith.includes(this._uid)) {
          firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(doc.id).get().then((foreignDoc) => {
            this._shared.set(doc.id, { name: foreignDoc.data().displayName, element: this._createSharedElement(foreignDoc.id, foreignDoc.data().displayName) });
          });
        }
      }
      changeListener();
    });
  }

  stopListening() {
    this._unsubscribe();
  }

  filter(regex) {
    for (let [key, value] of this._shared) {
      if (!regex.test(key) && !regex.test(value.name)) {
        value.element.style.display = "none";
      } else {
        value.element.style.display = "block";
      }
    }
  }

  _createSharedElement(uid, displayName) { 
    let template = document.createElement("template");
    template.innerHTML = `<p class="menuMobileEntry">${rhit.sanitizeString(displayName)}</p>`.trim();
    console.log(template);
    let child = template.content.firstChild;
    child.addEventListener("click", (event) => {
      window.location.href = window.location.href.split("\?")[0] + `?uid=${uid}`;
    });
    this._sharedMobileDiv.appendChild(child);

    template = document.createElement("template");
    template.innerHTML =
    `<div class="menuEntry">
      <p class="menuEntryText">${rhit.sanitizeString(displayName)}</p>
    </div>`.trim();
    child = template.content.firstChild;
    child.addEventListener("click", (event) => {
      window.location.href = window.location.href.split("\?")[0] + `?uid=${uid}`;
    });
    this._sharedDiv.appendChild(child);

    return child;
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
        nameField.value = rhit.desanitizeString(rhit.settingsManager.name);
        nameField.blur();
      }
    });

    nameField.addEventListener("focusout", (event) => {
      rhit.settingsManager.setName(nameField.value);
    });

    let searchField = document.querySelector("#searchShare");
    searchField.addEventListener("input", (event) => {
      for (let user of rhit.settingsManager.users.values()) {
        if (user.shared === false) {
          let regex = new RegExp("^" + searchField.value, "i");
          if (regex.test(user.name) || regex.test(user.email)) {
            user.element.style.display = "flex";
          } else {
            user.element.style.display = "none";
          }
        }
      }
    });

    searchField.addEventListener("focusin", (event) => {
      document.querySelector("#cancelSearch").style.display = "block";
      document.querySelector("#shared-users").style.display = "none";
      document.querySelector("#share-with-users").style.display = "flex";
    });

    searchField.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        document.querySelector("#cancelSearch").style.display = "none";
        document.querySelector("#shared-users").style.display = "flex";
        document.querySelector("#share-with-users").style.display = "none";
        searchField.value = "";
        searchField.blur();
      }
    });

    document.querySelector("#cancelSearch").addEventListener("click", (event) => {
      document.querySelector("#cancelSearch").style.display = "none";
      document.querySelector("#shared-users").style.display = "flex";
      document.querySelector("#share-with-users").style.display = "none";
    });
  }

  updateView() {
    document.querySelector("#name").value = rhit.desanitizeString(rhit.settingsManager.name);
  }
}

rhit.SettingsManager = class {
  constructor(uid) {
    this._uid    = uid;
    this._name   = "Jane Doe";
    this._shared = new Map();
    this._users  = new Map();
    this._sharedUserDiv = document.querySelector("#shared-users");
    this._shareWithDiv  = document.querySelector("#share-with-users");
  }

  beginListening(changeListener) {
		this._unsubscribeSelf = firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(this._uid)
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
      
    this._unsubscribeSchedule = firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(this._uid)
      .onSnapshot((doc) => {
        this._sharedUserDiv.innerHTML = "";
        this._shared = new Map();
        if (doc.data().sharedWith) {
          for (let user of doc.data().sharedWith) {
            firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(user).get().then((doc) => {
              this._shared.set(user, { name: doc.data().displayName, email: `${user}@rose-hulman.edu`, element: this._createSharedElement(user, doc.data().displayName) });
              if (this._users.has(user)) {
                this._users.get(user).element.style.display = "none";
                this._users.get(user).shared = true;
              }
            });
          }
        }
      });
    
    this._unsubscribeUsers = firebase.firestore().collection(rhit.FB_COLLECTION_USER)
      .onSnapshot((docs) => {
        this._shareWithDiv.innerHTML = "";
        this._users = new Map();
        if (docs.docs) {
          for (let doc of docs.docs) {
            if (this._uid !== doc.id) {
              this._users.set(doc.id, { name: doc.data().displayName, email: `${doc.id}@rose-hulman.edu`, shared: false, element: this._createShareWithElement(doc.id, doc.data().displayName) });
              if (this._shared.has(doc.id)) {
                this._users.get(doc.id).element.style.display = "none";
                this._users.get(doc.id).shared = true;
              }
            }
          }
        }
      });
  }

  stopListening() {
    this._unsubscribeSelf();
    this._unsubscribeSchedule();
    this._unsubscribeUsers();
  }

  setName(name) {
    name = rhit.sanitizeString(name);
    this._name = name;
    firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(this._uid).update({ displayName: this._name }).catch((error) => { console.error(error); });
  }

  removeUser(uid) {
    this._shared.get(uid).element.remove();
    this._shared.delete(uid);
    this._users.get(uid).element.style.display = "flex";
    this._users.get(uid).shared = false;
    firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(this._uid).update({ sharedWith: Array.from(this._shared.keys()) }).catch((error) => { console.error(error); });
  }

  addUser(uid) {
    this._shared.set(uid, null);
    firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(this._uid).update({ sharedWith: Array.from(this._shared.keys()) }).catch((error) => { console.error(error); });
  }

  get name() {
    return this._name;
  }

  get users() {
    return this._users;
  }

  get sharedUsers() {
    return this._shared;
  }

  _createSharedElement(uid, displayName) {
    let template = document.createElement("template");
    template.innerHTML =
    `<div class="shared-user-card">
      <div class="shared-text">
        <p class="shared-username">${rhit.sanitizeString(displayName)}</p>
        <p class="shared-email">${uid}@rose-hulman.edu</p>
      </div>
      <div class="remove-shared oi oi-circle-x"></div>
    </div>`.trim();
    let child = template.content.firstChild;
    child.addEventListener("click", (event) => {
      rhit.settingsManager.removeUser(uid);
    });
    this._sharedUserDiv.appendChild(child);
    return child;
  }

  _createShareWithElement(uid, displayName) {
    let template = document.createElement("template");
    template.innerHTML =
    `<div class="share-with-user-card">
      <div class="share-with-text">
        <p class="share-with-username">${rhit.sanitizeString(displayName)}</p>
        <p class="share-with-email">${uid}@rose-hulman.edu</p>
      </div>
      <div class="add-shared oi oi-plus"></div>
    </div>`.trim();
    let child = template.content.firstChild;
    child.addEventListener("click", (event) => {
      rhit.settingsManager.addUser(uid);
    });
    this._shareWithDiv.appendChild(child);
    return child;
  }
}

rhit.sanitizeString = (text) => {
  let p = document.createElement("p");
  p.innerText = text;
  return p.innerHTML;
}

rhit.desanitizeString = (text) => {
  let p = document.createElement("p");
  p.innerHTML = text;
  return p.innerText;
}

rhit.checkForRedirects = () => {
	if (document.querySelector("#loginPage") && rhit.authManager.isAuthenticated) {
		window.location.href = "/now.html";
	} else if (!document.querySelector("#loginPage") && !rhit.authManager.isAuthenticated) {
		window.location.href = "/";
	}
}

rhit.initializePage = function() {
	if (document.querySelector("#loginPage")) {
    new rhit.LoginPageController();
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid") ? urlParams.get("uid") : rhit.authManager.uid;

    if (document.querySelector('.btn-log-out')) {
      document.querySelector('.btn-log-out').addEventListener('click', () => {
        rhit.authManager.signOut();
      });
    }

    if (document.querySelector('.navbar-name')) {
      firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(uid).get().then((doc) => {
        const displayName = doc.data().displayName;
        if (displayName) {
          document.querySelector('.navbar-name').innerText = displayName[displayName.length - 1].toLowerCase() === 's' 
            ? `${displayName}' Schedule` 
            : `${displayName}'s Schedule`;
        }
      });
    }

    if (document.querySelector('#importPage')) {
      new rhit.ImportPageController();
    } else if (document.querySelector('#dayViewPage')) {
      new rhit.DayViewPageController(uid);
      new rhit.MenuController(uid);
    } else if (document.querySelector('#weekViewPage')) {
      new rhit.WeekViewPageController(uid);
      new rhit.MenuController(uid);
    } else if (document.querySelector('#nowViewPage')) {
      new rhit.NowViewPageController(uid);
      new rhit.MenuController(uid);
    } else if (document.querySelector("#settingsPage")) {
      new rhit.SettingsPageController();
    }
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
