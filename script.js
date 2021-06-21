// selectors
const daysElement = document.querySelector('.days'),
      hoursElement = document.querySelector('.hours'),
      minutesElement = document.querySelector('.mins'),
      secondsElement = document.querySelector('.seconds');



console.log(secondsElement);

// create halloween date 
const HalloweenDate = '31 October, 2021';


// create countdown function 

function countdown() {
  const newHalloweenDate = new Date(HalloweenDate);
  // get current date 
  const currentDate = new Date();

  // get difference between current date and new halloween date 
  const dateDiff = (newHalloweenDate - currentDate);

  // get total number of seconds from dateDiff
  const totalNoSeconds = (dateDiff) / 1000;

  // get days, hours, minutes & seconds from totalNoSeconds

  const days = Math.floor(totalNoSeconds / 3600 / 24);
  const hours = Math.floor(totalNoSeconds / 3600) % 24;
  const minutes = Math.floor(totalNoSeconds /60) % 60;
  const seconds = Math.floor(totalNoSeconds)  % 60;

  // append days, hours, minutes & seconds to elements in DOM
  daysElement.innerText = attachTime(days);
  hoursElement.innerText = attachTime(hours);
  minutesElement.innerText = attachTime(minutes);
  secondsElement.innerText = attachTime(seconds);

  styleIt();

}

function attachTime(time) {
  return (time < 10) ? '0' + time : time;
}

function styleIt() {
  if(isRunning) {
    secondsElement.style.color = 'red';
  } else {
    secondsElement.style.color = 'white';
  }
}

// set time interval
setInterval(countdown, 1000);