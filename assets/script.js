//set current day
$('#currentDay').text(moment().format('dddd, MMM Do YYYY'));

let buttonSave = $('.saveBtn');
let eventNote = $('.event-detail');
let currentHour = moment().hour();
let bizHour = $('.row-custom');

//reset localstorage as new day start
$('.new-day').on('click', newDay);
function newDay() {
    for (i=0; i<bizHour.length; i++) {
        localStorage.removeItem(i+9);
        eventNote[i].value = '';
    };
};

for (i=0; i<bizHour.length; i++) {
    eventNote[i].value = localStorage.getItem(i+9); //print values from local storage
};

for (i=0; i<bizHour.length; i++) {
    let calendarHour = bizHour[i].dataset.hour
    console.log(calendarHour, currentHour);
    if (calendarHour<currentHour) {
        $(bizHour[i]).attr('class','row-custom past');
    } else if (calendarHour>currentHour) {
        $(bizHour[i]).attr('class','row-custom future');
    } else $(bizHour[i]).attr('class','row-custom present');
};

//save to local storage function
buttonSave.on('click', saveEvent);
function saveEvent (event) {
    //console.log($(event.target).parent().parent()[0].dataset.hour);
    let activeHour = $(event.target).parent().parent()[0].dataset.hour;
    //console.log($(event.target).parent().parent());
    console.log(eventNote[activeHour-9].value);
    localStorage.setItem(activeHour,eventNote[activeHour-9].value);
    //eventNote[activeHour-9].value='';
    $('#status').text(`${moment(activeHour,'h').format('h a')} event set.`);
};
