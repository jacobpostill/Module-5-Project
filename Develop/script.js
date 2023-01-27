// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var unixFormat = dayjs().format('M/D/YYYY');
$('#currentDay').text(unixFormat);
const hour9 = document.getElementById("hour-9");
const hour10 = document.getElementById("hour-10");
const hour11 = document.getElementById("hour-11");
const hour12 = document.getElementById("hour-12");
const hour13 = document.getElementById("hour-13");
const hour14 = document.getElementById("hour-14");
const hour15 = document.getElementById("hour-15");
const hour16 = document.getElementById("hour-16");
const hour17 = document.getElementById("hour-17");
const save = document.querySelectorAll("saveBtn");

let hourList = [hour9,hour10,hour11,hour12,hour13,hour14,hour15,hour16,hour17]

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  let clickEvent = (e) => {
    let value = e.target.previousElementSibling.value;
    let id = e.target.id;
    localStorage.setItem(id, value);
}
  for(var i = 0; i < save.length; i++) {
    save[i].addEventListener('click', clickEvent)
  };

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var hour = dayjs().hour()
  var count = 9
  for (let i = 0; i < hourList.length ; i++) {
    if (hour == count) {
      hourList[i].classList.remove("future");
      hourList[i].classList.add("present");
    }
    if (hour > count) {
      hourList[i].classList.remove("future");
      hourList[i].classList.remove("present");
      hourList[i].classList.add("past");
    }
    count++
    document.querySelector('#text-' + (i+9)).value = localStorage.getItem('text-' + (i+9));
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
