//set current day
$('#currentDay').text(moment().format('dddd, MMM Do YYYY'));

let buttonSave = $('.saveBtn');
let eventNote = $('.event-detail');

for (i=0; i<eventNote.length; i++) {
    eventNote[i].value = localStorage.getItem(i+9); //print values from local storage
};

//save to local storage function
buttonSave.on('click', saveEvent);
function saveEvent (event) {
    let activeHour = event.target.dataset.hour;
    console.log(eventNote[activeHour-9].value);
    localStorage.setItem(activeHour,eventNote[activeHour-9].value)
    //eventNote[activeHour-9].value='';
};
