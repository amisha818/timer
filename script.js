$(function() {
    $('#datetimepicker2').datetimepicker({
        locale: 'ru'
    });
});
var x;

function mufkn() {
    document.getElementById('settime').style.display = 'none';
    document.getElementById('timer').style.display = 'block';
    var d = parseInt(document.getElementById('day').value);
    var m = parseInt(document.getElementById('month').value);
    var y = parseInt(document.getElementById('year').value);
    var h = parseInt(document.getElementById('hour').value);
    var min = parseInt(document.getElementById('min').value);
    var sec = parseInt(document.getElementById('sec').value);
    var countDownDate = new Date(y, m - 1, d, h, min, sec).getTime();
    console.log(countDownDate);
    // Update the count down every 1 second
    x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const clock = document.getElementById('clockdiv');
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "Days " +
            hours + "Hours " + minutes + "Minutes " + seconds + "Seconds ";

        // If the count down is over, write some text 
        if (distance < 0) {
             var sound = new Howl({
                src: ['flute.mp3'],
                volume: 10.0,
                onend: function() {
                    alert('We finished with the setup!');
                }
            });
            sound.play()
            clearInterval(x);
           
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}

function mufkn2() {
    clearInterval(x);
    document.getElementById('settime').style.display = 'block';
    document.getElementById('timer').style.display = 'none';

}
/*
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}*/
//const datee = new Date(y, m, d, h, min, sec);
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//const deadline = new Date(Date.parse(new Date()) + d * m * y * min * sec);
//initializeClock('clockdiv', datee);