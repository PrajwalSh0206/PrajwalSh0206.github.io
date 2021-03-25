$( document ).ready(function() {

$(window).scroll(function(){
    if($(window).scrollTop()>0)
    $('#scrollbutton').removeClass('hidden')
    else
    $('#scrollbutton').addClass('hidden')
  });

$('#scrollbutton').click(function (e) { 
    $('html').scrollTop(0);
});

})

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}