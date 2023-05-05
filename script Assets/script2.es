// For Stretch Animation
  
var scene = document.getElementById("welcomepara");
// var parallaxw = new Parallax(scene);

// import duration from 'dayjs/plugin/relativeTime';


// var countdown = dayjs().to(dayjs('1990-01-01'));
// console.log(countdown);

// For Countdown
// Thank you yusufsefasezer (github)

var graduation = '2023/08/10';

var myCountDown = new ysCountDown(graduation, function(remaining, finished) {
    if(finished) {
        console.log("you made it my friend");
    } else {
        $('#countdownClock').text(remaining.totalDays + "D " + remaining.hours + "H " + remaining.minutes + "M " + remaining.seconds + "S ");
        $('#countdownClockSmall').text(remaining.totalDays + "D " + remaining.hours + "H " + remaining.minutes + "M " + remaining.seconds + "S ");
    }
})








new Splide( '.splide', {
  type    : 'loop',
  autoplay: 'pause',
  perPage : 3,
} ).mount( window.splide.Extensions );


// Thank you Splidejs for the beautiful animations