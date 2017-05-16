//"use strict";

var break_time = 0;
var session_time = 0;

$(function() {

updateBreak();
updateSession();
start();

});

function getBreakTime() {
  return $("#break-time").text();
}

function getSessionTime() {
  return $("#session-time").text();
}

// to update the break time when its buttons are clicked
function updateBreak() {
  // on clicking the break-minus button
  $("#break-minus").click(function() {
    if(break_time === 0) console.log("break_time is already 0");
    else {
      break_time--;
      $("#break-time").html(break_time);
    }
  });

  // on clicking the break-plus button
  $("#break-plus").click(function() {
    break_time++;
    $("#break-time").html(break_time);
  });

}

// to update the session time when its buttons are clicked
function updateSession() {

  // on clicking the session-minus button
  $("#session-minus").click(function() {

    if(session_time === 0) console.log("session_time is already 0");
    else {
      session_time--;
      $("#session-time").html(session_time);
    }
  });

  // on clicking the session-plus button
  $("#session-plus").click(function() {
    session_time++;
    $("#session-time").html(session_time);
  });

}

// on clicking the start button
function start() {

  $("#start").click(function () {
    $("#start").unbind(); // to prevent the user from clicking this button twice

    var s_countdown = session_time * 60; //session_time in seconds
    var b_countdown = break_time * 60; //break_time in seconds

    // decrease the "Session" timer by one second  until it reaches zero
    var timeout_id = setInterval(function(){
      if(s_countdown > 0){
        $("#timer-name").html("Session:")
        s_countdown --;
        //document.title("session: " + s_countdown);
        $("#timer").html(s_countdown);
      }

      if(s_countdown === 0)
        {
          if(b_countdown > 0){
            $("#timer-name").html("Break:");
            b_countdown --;
            //document.title("break: " + b_countdown);
            $("#timer").html(b_countdown);
          }

          if (b_countdown === 0) {
            clearInterval(timeout_id);
            alert("done!");

            $("#timer-name").html("Timer Name");
            $("#start").removeClass("active");

            $("#timer").html("00");

            $("#session-time").html("0");
            $("#break-time").html("0");

            break_time = 0;
            s_countdown = 0;
            b_countdown = 0;
            session_time = 0;

            start();
             //clearTimers();
          }
        }
    }, 1000);

  });
}

function clearTimers() {
  clearInterval(timeout_id);
  alert("done!");

  $("#timer-name").html("Timer Name");
  $("#start").removeClass("active");

  $("#timer").html("00");

  $("#session-time").html("0");
  $("#break-time").html("0");

  break_time = 0;
  s_countdown = 0;
  b_countdown = 0;
  session_time = 0;

  start();
}
