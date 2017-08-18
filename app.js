console.log("it's linked")


$(document).ready(function() {
  $(".soccer-ball-pic").on("click", function() {
    $(this).parent().append(`hello ${$('input').val()}`)
  });

});
