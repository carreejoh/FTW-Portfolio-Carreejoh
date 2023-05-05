
$('#chessSubmit').click(
    fetch('https://api.chess.com/pub/player/carreejoh/games')
    .then((data) => {
        console.log(data);
    })
)

$('.ui.dropdown')
  .dropdown()
;



