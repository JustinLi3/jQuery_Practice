console.log("Welcome to The Ultimate jQuery Course!🚀"); 
 

//SELECTORS 

// $('li').hide(); //Essentially the same notation for grabbing elements in querySelector  
// $("li.Second").hide(); //tag.classname .classname etc etc to grab specific items
// $("p#heading").hide(); //This is just way better than using document.getElementByClassName or by id  

//Check documentation for other kinds of selectors like multiple elements  


//EVENTS 
// Mouse / Keyboard / Form / Document or Window Events

//Mouse: .click() serves as .addEventListener()
$("#btn_hide").click(function(){
    $("li.Second").hide();
}); 
 
//keyboard  keydown:held down any key  keypress:held down any character  keyup:event that happens after key lifted up
$("*").keydown(function(event){ 
    if(event.key ==='h'){ //use event.which or event.key 
        $("li.Second").hide();
    } 
    else if(event.key ==='s'){
        $("li.Second").show();
    }
}) 



//HIDE & SHOW & CREATE FUNCTIONS  
//.hide/show(x miliseconds, function()); 
//ex:   


$("*").keyup(function(event){
    if(event.key === 'Enter'){
        $("*").css("background-color", "lightblue"); //.css to change a css factor
    }
});

$('#funnyButton').click(function(){
    $('button#btn_hide').hide(2000, function(){
        $("*").css("height","2000px");
    });
});


//NOTE, make sure you include .ready function for the website to be loaded before proceeding to use javascript/jquery
$('document').ready(function(){
//Include all js in here
}); 


//FADE/SLIDE EFFECTS 
$('.tester').click(function(){ 
    if( $('#heading').css('display')==='none' || $('#heading').css('opacity') == '0.3'){ //use .css to grab attribute and compare 
        $('#heading').fadeIn(); 
    } 
    else{
            $('#heading').fadeTo('slow', 0.3);  //fadeTo unlike fadein and fadeOut can be customized by speed and opacity

    }
}) 

//.slideToggle, once button clicked, selected item is slide out and in 