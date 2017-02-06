//script.js

$(function(){
   // $('h1').css("color","blue");
    $('button').click(function(){
        $('#box').fadeOut(1000);
    });
    
    //$('h2,h3,h4').css('border','solid 1px hsla(240, 65%, 38%, 0.2)');
    
   // $('div:contains("Brad")').css('border','solid 1px #0f0fff');
    
    $('#box').click(function(){
        alert('you have just click the box');
    });
    
    $("input").blur(function(){
        
        if($(this).val() == ""){
            $(this).css('border','solid 1px red');
            $('#box').text('Forgot to add text?')
        }
    });
    
     $("input").keydown(function(){
        
        if($(this).val() !== ""){
            $(this).css('border','solid 1px #777');
            $('#box').text('Thanks for add text?')
        }
    });
    
    $('#box').hover(function(){
        
        $(this).text('you hoverd in!');
    }, function(){
        $(this).text('you hoverd out!');
    });
    
    /* -----------------
        Jquery Chaining
        -----------------*/
    
    $('.notification-bar').delay(1000).slideDown().delay(4000).fadeOut();
    
    /* ----------------
       jQUERY HIDE/SHOW
       ---------------- */
    
    // $('h1').hide();
    // $('div.hidden').show();
    
    //$('p').fadeOut(5000);
    
    // $('div.hidden').fadeIn(8000);
    
    $('#box1').click(function() {
       $(this).fadeTo( 1000, 0.25, function() {
            // animation is complete
           
           $(this).slideUp(3000);
       }); 
    });
    
    $('div.hidden').slideDown(8000);
    
    $('button').click(function() {
        $('#box1').slideToggle(6000);
    });
    
    /* ----------------
       jQUERY ANIMATE
       ---------------- */
    
    $('#left').click(function(){
        
        $('.box').animate({
            left: "-=40px",
            fontSize:"+=2px"
        }, function() {
            //animation is complete
        });
        
    });
    
    $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            // animation is complete
        });
    });
    
    $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            // animation is complete
        });
    });
    
    $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function() {
            // animation is complete
        });
    });
    
    /* ----------------
       jQUERY CSS
       ---------------- */
    
    $('#circle2').css({
        'background':'#8a8d22',
        'display':'inline-block',
        'color':'white',
        'text-align':'center',
        'line-height':'140px',
        'height':'140px',
        'width':'140px'
    }).addClass('circleShape');
    
    
    /* -------------------
       jQUERY CAR RACR 2.0
       ------------------- */
    //Click the GO button
    $('').click(function(){
        
        //build a function that checks to see if the car has won the race
        function checkIfComplete() {
            if( isComplete == false) {
                isComplete = true;
            }else{
                place = 'second';
            }
        }
    
        //get the width of the cars
        var carWidth = $('#car1').width();
        
        //get the width of the racetrack
        var raceTrackWidth = $(window).width() - carWidth;
        
        //generate a random # between 1 and 5000
        
        var raceTime1 = Math.floor((Math.random() * 5000) + 1);
        var raceTime2 = Math.floor((Math.random() * 5000) + 1); 
        
        //set a flag variabale to FALSE by default
        var isComplete = false;
        
        //set a flag variabale to FIRST by default
        var place = 'first';
        
        //animation car 1
        $('#car1').animation({
            
            //move the car width of the racetrack
            left:raceTrackWidth
            
        },raceTime1, function() {
            //animation is complete
            
            //run a function
            
            checkIfComplete();
            
            //give some text feedback in the race info box
            $('#raceInfo1 span').text('Finished in ' + place + 'place and clocked in at ' + raceTime1 + 'milliseconds!');
        });

        
        //animation car 2
        $('#car2').animation({
            
            //move the car width of the racetrack
            left:raceTrackWidth
            
        },raceTime2, function() {
            //animation is complete
            
            //run a function
            
            checkIfComplete();
            
            //give some text feedback in the race info box
            $('#raceInfo2 span').text('Finished in ' + place + 'place and clocked in at ' + raceTime2 + 'milliseconds!');
        });

    });
    
    
    //reset the race 
    $('#reset').click(function() {
       $('.car').css('left','0');
        $('raceInfo span').text('');
    });
    
    
    
    
    
    
    
    
    
    
    
});