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
