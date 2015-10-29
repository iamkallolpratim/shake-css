
function shakeElement() {
    $('#id_of_your_div_or_button').addClass('shake');
    setTimeout(function() {
        $('#id_of_your_div_or_button').removeClass('shake');
    }, 3000);
};

//remove the setTimeout function to remove time interval

//to shake the div or button every 5 seconds apply following script



/*
function shakeElement() {
    $('#id_of_your_div_or_button').addClass('shake');
    setInterval(function(){
       $('#id_of_your_div_or_button').toggleClass('shake')
    }, 3000);
};
*/
