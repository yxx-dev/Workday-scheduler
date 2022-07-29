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
    //console.log($(event.target).parent().parent()[0].dataset.hour);
    let activeHour = $(event.target).parent().parent()[0].dataset.hour;
    console.log(eventNote[activeHour-9].value);
    localStorage.setItem(activeHour,eventNote[activeHour-9].value);
    //eventNote[activeHour-9].value='';
    $('#status').text(`${moment(activeHour,'h').format('h a')} event set.`);
};
