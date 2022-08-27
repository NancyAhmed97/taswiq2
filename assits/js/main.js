$(document).ready(function () {
  $("#password_icon").click(function () {
    if (document.getElementById("password").type == "password") {
      document.getElementById("password").type = "text";
    } else {
      document.getElementById("password").type = "password";
    }
  });
  $("#Check_password_icon").click(function () {
    if (document.getElementById("check_password").type == "password") {
      document.getElementById("check_password").type = "text";
    } else {
      document.getElementById("check_password").type = "password";
    }
  });
  $("#like_icon").click(function () {
    $("#like_icon").hide();
    $("#liked_icon").show();
  });
  $("#liked_icon").click(function () {
    $("#liked_icon").hide();
    $("#like_icon").show();
  });
  $("#current_password_icon").click(function () {
    if (document.getElementById("current_password").type == "password") {
      document.getElementById("current_password").type = "text";
    } else {
      document.getElementById("current_password").type = "password";
    }
  });
  $("#new_password_icon").click(function () {
    if (document.getElementById("new_password").type == "password") {
      document.getElementById("new_password").type = "text";
    } else {
      document.getElementById("new_password").type = "password";
    }
  });
  $("#check_password_icon").click(function () {
    if (document.getElementById("check_password").type == "password") {
      document.getElementById("check_password").type = "text";
    } else {
      document.getElementById("check_password").type = "password";
    }
  });
});

let sMin = 2; // amount of minutes you wish to start with
let time = sMin * 60; // format for minutes by multiplying by 60 as we have 60 seconds in each minute

let countdown = setInterval(update, 1000); // set up a setInterval for the countdown function
// create a function that will countdown the seconds
function update() {
  // define our minutes using Math.floor(time / 60)
  let min = Math.floor(time / 60);
  // define our seconds by modulating time with 60, our seconds units
  let sec = time % 60;

  // tenerary conditional to see if seconds is set to 0 for proper display of formatting as seconds
  sec = sec < 10 ? "0" + sec : sec;
  // display the countdown timer in time format using the minutes and seconds variables
  document.getElementById("timmer").innerHTML = `${min}:${sec}`;
  if(min==00&&sec==00){
    var resend_code=document.getElementById('resend_code');
    resend_code.classList.add("active_code");

  }

  // decrement time by one second with each interval as set in the setInterval call `1000`
  time--;
  // clear the interval if the minutes and seconds are both set to 0
  min == 0 && sec == 0 ? clearInterval(countdown) : countdown;
}
/**************************************************** */

var container = document.getElementsByClassName("verfication_form")[0];
container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}
