$('.sidebar').first()
   .sidebar('attach events', '.sidebarbutton')
  .sidebar('setting', 'transition', 'overlay')
 ;
 $('.sidebarbutton')
   .removeClass('disabled')
 ;

 $('.ui.dropdown')
 .dropdown()
;

// For On Scroll Menu

document.addEventListener("scroll", (event) => {
  event.preventDefault();
  if( $('body').scrollTop == 0 ) {
    $('.herotop').attr("style", "background-color: white;");
  } else {
  $('.herotop').attr("style", "background-color: black;");
  }
})


//For Danger Button

$('#forbiddenButton').on('click touchstart', function() {
  window.location.href='./experimental.html';
});

// For Clock

setInterval(function() {
  var today = dayjs();
  $('#clockdisplay').text(today.format('h:mm'));
} , 1000);

// For Skill Bars

$('#example1').progress();
$('#example2').progress();
$('#example3').progress();
$('#example4').progress();
$('#example5').progress();
$('#example6').progress();
$('#example7').progress();
$('#example8').progress();
$('#example9').progress();
$('#example10').progress("complete", (true));




// For Countdown Clock





// For "Show Me" Section
// $('.menu .item')
//   .tab()
// ;

// For changing backgrounds 


  $('#purpletoblue').click(  function(event) {
    event.preventDefault();
    $('.landing').attr('style', "background: linear-gradient(30deg, var(--lightpurple), 12%, var(--darkblue));")
    $('.wave-1').attr('stroke', '#14A098')
    $('.wave-2').attr('stroke', '#CB2D6F')
    $('.wave-3').attr('stroke', '#CB2D6F')
    $('.wave-4').attr('stroke', '#14A098')
    $('.wave-5').attr('stroke', '#CB2D6F')
    $('.wave-6').attr('stroke', '#CB2D6F')
    $('.wave-7').attr('stroke', '#CB2D6F')
  })

  $('#greentoorange').click(  function(event) {
    event.preventDefault();
    $('.landing').attr('style', "background: linear-gradient(30deg, var(--lightblue), 12%, var(--darkblue));")
    $('.wave-1').attr('stroke', '#CFB53B')
    $('.wave-2').attr('stroke', '#907D23')
    $('.wave-3').attr('stroke', '#CFB53B')
    $('.wave-4').attr('stroke', '#907D23')
    $('.wave-5').attr('stroke', '#CFB53B')
    $('.wave-6').attr('stroke', '#907D23')
    $('.wave-7').attr('stroke', '#CFB53B')
  })

  $('#whitetoblack').click(  function(event) {
    event.preventDefault();
    $('.landing').attr('style', "background: linear-gradient(30deg, #434343, 40%, #000000);")
    $('.wave-1').attr('stroke', '#CFB53B')
    $('.wave-2').attr('stroke', '#907D23')
    $('.wave-3').attr('stroke', '#CFB53B')
    $('.wave-4').attr('stroke', '#907D23')
    $('.wave-5').attr('stroke', '#CFB53B')
    $('.wave-6').attr('stroke', '#907D23')
    $('.wave-7').attr('stroke', '#CFB53B')
  })

  $('#sandtoblue').click(  function(event) {
    event.preventDefault();
    $('.landing').attr('style', "background: linear-gradient(30deg, #DECBA4, 40%, #3E5151);")
    $('.wave-1').attr('stroke', '#DECBA4')
    $('.wave-2').attr('stroke', '#3E5151')
    $('.wave-3').attr('stroke', '#DECBA4')
    $('.wave-4').attr('stroke', '#3E5151')
    $('.wave-5').attr('stroke', '#3E5151')
    $('.wave-6').attr('stroke', '#3E5151')
    $('.wave-7').attr('stroke', '#DECBA4')
  })

  $('#checkboxwaves').click( function(event) {
    event.preventDefault();
    if ($('#checkboxwaves').val() === true) {
      console.log("gsdfdsfsdf");
    } else {
      console.log("I work");
    }
  })



  



  // For PSWD generator

  $('.ui.checkbox')
  .checkbox()
;

  $('#pswdsubmit').click(function(event) {
    event.preventDefault();
    var pswdlength = Number($('#length').val());

    var uppercasechar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
     "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var intergerchar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "<", ">", "/", "=", "+"];

    if (pswdlength <= 7 || pswdlength >= 129) {
      $('#newpswd').text("Not a valid length!");
      console.log(pswdlength);
    } else {
      finalpassword = [];
      for (var i = 0; i < pswdlength; i++) {
        var randomtype = Math.floor(Math.random() * 4);
        if ($('#special').is(':checked') && randomtype === 0) {
          var randomchar = Math.floor(Math.random() * specialchar.length);
          finalpassword.push(specialchar[randomchar])
        } else if ($('#upper').is(':checked') && randomtype === 1) {
          var randomchar = Math.floor(Math.random() * uppercasechar.length);
          finalpassword.push(uppercasechar[randomchar])
        } else if ($('#lower').is(':checked') && randomtype === 2) {
          var randomchar = Math.floor(Math.random() * lowercasechar.length);
          finalpassword.push(lowercasechar[randomchar])
        } else if ($('#numb').is(':checked') && randomtype === 3) {
          var randomchar = Math.floor(Math.random() * intergerchar.length);
          finalpassword.push(intergerchar[randomchar])
        } else {
          i--
        }
      }
      var newpswd = finalpassword.toString()
      $('#newpswd').text(newpswd.replace(/,/g,''));
    }
  })

  // For Poker



  // For Type Tester

  const wordsArray = [' water', ' day', ' part', ' sound', ' work', ' place', ' year', ' back', ' thing', ' name', ' sentence', ' man', ' line', ' boy', ' farm', ' end', ' men', ' land', ' home', ' hand', ' picture', ' air', ' animal', ' house', ' page', ' letter', ' point', ' mother', ' answer', ' America', ' world', ' food', ' country', ' plant', ' school', ' father', ' tree', ' city', ' earth', ' eye', ' head', ' story', ' example', ' life', ' paper', ' group', ' children', ' side', ' feet', ' car', ' mile', ' night', ' sea', ' river', ' state', ' book', ' idea', ' face', ' Indian', ' girl', ' mountain', ' list', ' song', ' family', ' zebra'];

  $('#stringgenerate').click(function(event) {
    event.preventDefault();
    $('.typetestinput').text('Type here')
    tempList = [];
    for (var i = 0; i < 30; i++) {
      var randomtype = Math.floor(Math.random() * 65);
      tempList.push(wordsArray[randomtype]);
    }
    var newList = tempList.toString()
    $('.generatedwords').text(newList.replace(/,/g,''));
  })

  $('.typetestinput').on('keypress', function(e) {
    if(e.which == 13) {
      alert('YOu pressed Enter');
    }
  })

  
  // $('.typetestinput').keydown((event) => {
  //   event.preventDefault();
  //   let counter = 0;
  //   setInterval(
  //     counter + 1,
  //   1000)

  // })

  // $('.typetestinput').keydown(console.log("keydownworks"))


  // For Calculator

 
  


  // For Clicker Game
  

  // $('#clickerButton').click(function(event) {
  //   event.preventDefault();
  //   setInterval(function() {
  //     var clickerscore = 0;
  //     if($('#clickerButton').click(function() {
  //       clickerscore + 1
  //       console.log(clickerscore);
  //     }) ) {
  //     } else {
  //       $('#clickerScore').text(clickerscore);
  //     }
  //   }, 2000);

    

  // })




let checkView = function() {
  if(this.window.innerWidth <= 500) {
    $('#largeSidebar').attr("style", "display:none");
    $('#smallSidebar').addClass("visible");
    $('.landingContent').attr("style", "display:none");
    $('.landingMobile').attr("style", "display:block");
    $('.resumeSmall').attr("style", "display:block");
    $('.resume').attr("style", "display:none");
  } else if (this.window.innerWidth >= 500) {
    $('#largeSidebar').attr("style", "display:block");
    $('#smallSidebar').removeClass("visible");
    $('.landingContent').attr("style", "display:block");
    $('.landingMobile').attr("style", "display:none");
    $('.resumeSmall').attr("style", "display:none");
    $('.resume').attr("style", "display:block");
  }
}

window.addEventListener("resize", checkView);
window.addEventListener('load', checkView);

