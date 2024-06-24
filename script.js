function startTime() {
  const body = document.querySelector("body");
  const dateBox = document.querySelector("#date");
  const hoursBox = document.querySelector("#hours");
  const minuteBox = document.querySelector("#minutes");
  const secondBox = document.querySelector("#seconds");

  const analog = document.querySelector("#analogContainer");
  const analogHand = document.getElementsByClassName("analogHand");

  let date = new Date();

  let dateInput = date.toLocaleDateString("HRV");
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  hoursBox.innerHTML = `${hours}`;
  minuteBox.innerHTML = `${minutes}`;
  secondBox.innerHTML = `${seconds}`;
  dateBox.innerHTML = `${dateInput}`;

  let timeout = setTimeout(startTime, 500);

  switch (true) {
    case hours < 6:
      body.style.backgroundImage = "url('images/night.jpg')";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
      body.style.color = "#fff";
      analog.style.borderColor = "#fff";
      for (let i = 0; i < analogHand.length; i++) {
        analogHand[i].style.background = "#fff";
      }
      break;
    case hours < 12:
      body.style.backgroundImage = "url('images/morning.jpg')";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
      break;
    case hours < 18:
      body.style.backgroundImage = "url('images/afternoon.jpg')";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
      break;
    default:
      body.style.backgroundImage = "url('images/evening.jpg')";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backdropFilter = "blur";
      body.style.color = "#fff";
      analog.style.borderColor = "#fff";
      for (let i = 0; i < analogHand.length; i++) {
        analogHand[i].style.background = "#fff";
      }

      if (screen.width < 770) {
        body.style.backgroundImage = "url('images/night.jpg')";
        body.style.backgroundSize = "cover";
      }
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//Analog
setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  analogHour.style.transform = `rotate(${hr_rotation}deg)`;
  analogMinute.style.transform = `rotate(${min_rotation}deg)`;
  analogSecond.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

function changeType() {
  const digital = document.querySelector("#digitalContainer");
  const analog = document.querySelector("#analogContainer");

  if (digital.style.display === "none") {
    digital.style.display = "block";
    analog.style.display = "none";
  } else {
    digital.style.display = "none";
    analog.style.display = "block";
  }
}
