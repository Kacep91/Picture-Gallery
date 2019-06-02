
$(document).ready(function(){
$( "p.nav-animation-text").click(function(){
    $("p.nav-animation-text-toggled").removeClass("nav-animation-text-toggled").addClass("nav-animation-text");
    $ ( this ).removeClass("nav-animation-text").addClass("nav-animation-text-toggled");
});
$("button#add-album-button").click(function(){
  var newAlbum = $("input#album-text").val();
  $("div.albums").append('<p class="nav-animation-text">' + newAlbum + '</p>');

});


  $("input#slider-size").change(function(){

    var inputTrigger = document.getElementById("slider-size").value;
    switch (inputTrigger){
    case "1":
        $("img.pictureShadow").css("width", "120px");
        $(".overlay").css({"width":"88%", "top":"39%", "height":"40px"});
      break;
    case '2':
        $("img.pictureShadow").css("width", "180px");
        $(".overlay").css({"width":"92%", "top":"53%", "height":"40px"});
      break;
    case '3':
        $("img.pictureShadow").css("width", "260px");
        $(".overlay").css({"width":"94.5%", "top":"71%", "height":"25px"})
      break;
    case '4':
        $("img.pictureShadow").css("width", "350px");
        $(".overlay").css({"width":"95.5%", "top":"77%", "height":"25px"})
      break;
    case '5':
        $("img.pictureShadow").css("width", "600px");
        $(".overlay").css({"width":"97.4%", "top":"85.5%", "height":"25px"})
      break;
    console.log(inputTrigger);
  }
});
});
