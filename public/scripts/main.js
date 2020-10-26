/** namespace. */
var rhit = rhit || {};

// TEMPORARY id util authentication is implemented
// TODO: remove
const uid = 'test';

rhit.FB_COLLECTION_SCHEDULE = 'schedule';

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

/** function and class syntax examples */
rhit.functionName = function () {
	/** function body */
};

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
		firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(uid).set(schedule).then(function() {
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

}

rhit.DayViewPageController = class {
	constructor() {
		rhit.scheduleManager = new rhit.ScheduleManager(uid);
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
	}

	updateView() {
		document.querySelectorAll('.day-selector .day-text').forEach((elem) => {
			if (parseInt(elem.dataset['day']) === this._selectedDay) {
				elem.classList.add('active');
			} else {
				elem.classList.remove('active');
			}
		});

		const periodElems = document.querySelectorAll('.day');
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

rhit.WeekViewController = class {
	constructor() {
		rhit.scheduleManager = new rhit.ScheduleManager(uid);
		rhit.scheduleManager.beginListening(() => {
			this.updateView();
		});
	}

	updateView() {
		const hourElems = document.querySelectorAll('.week-day');

		for (let dayIndex = 0; dayIndex < rhit.scheduleManager.getDaysLength(); dayIndex++) {
			for (let periodIndex = 0; periodIndex < rhit.scheduleManager.getPeriodsLength(); periodIndex++) {
				const period = rhit.scheduleManager.getPeriod(dayIndex, periodIndex);
				if (period.name === 'Free') {
					continue;
				}
				const dayElems = hourElems[periodIndex].querySelectorAll('.class-entry');
				dayElems[dayIndex].innerText = period.location ? `${period.name} in ${period.location}` : period.name;
			}
		}
	}
}

rhit.ScheduleManager = class {
	constructor(uid) {
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
				if (period.startTime.toLowerCase().includes('pm')) {
					startTime.setHours(startTime.getHours() + 12);
				}
				const endTime = new Date();
				endTime.setHours(Number(period.endTime.split(':')[0]));
				endTime.setMinutes(Number(period.endTime.split(':')[1].replace(/\D/g, '')));
				if (period.endTime.toLowerCase().includes('pm')) {
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
}

rhit.initializePage = function() {
	const urlParams = new URLSearchParams(window.location.search);
	if (document.querySelector('#importPage')) {
		new rhit.ImportPageController();
	} else if (document.querySelector('#dayViewPage')) {
		new rhit.DayViewPageController();
	} else if (document.querySelector('#weekViewPage')) {
		new rhit.WeekViewController();
	}
};

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	// TODO: Move to auth
	rhit.initializePage();
};

rhit.main();
