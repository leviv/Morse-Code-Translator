
//Run the function if the enter key is pressed
if (document.layers) {
    document.captureEvents(Event.KEYDOWN);
}
document.onkeydown = function (evt) {
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if (keyCode == 13) {
        countWords()
        translate();
        play();
        shine();
    }
};


// Variables for the translation
function translate(){
    var text         = document.getElementById("txtInput");     //Stores the text in the input field
    var translated   = document.getElementById("txtOutput");    //Stores the text in the output field
    var morse        = text.value;                              //Stores the value of the text from the input field
    var res1         = morse.toLowerCase();                     //Converts the string to lowercase
    var res          = res1.split("");                          //Splits up the characters
    var prop         = res1.length;                             //Calculates the length of the string
    var i;                                                      //Used in the for loop
    var final        = "";                                      //Used to build the final statement


                /*  
                    The Morse code characters are as follows
                    \u2219 is the dot
                    \u2014 is the dash
                */



    for (i = 0; i < prop; i++) {                                //The function will repeat until the string runs out of characters
        if (res[i] == "a") {
            final += "\u2219\u2014 ";                          //Has the correct Morse code translation for each character
        } else if (res[i] == "b") {
            final += "\u2014\u2219\u2219\u2219 ";
        } else if (res[i] == "c") {
            final += "\u2014\u2219\u2014\u2219 ";
        } else if (res[i] == "d") {
            final += "\u2014\u2219\u2219 ";
        } else if (res[i] == "e") {
            final += "\u2219 ";
        } else if (res[i] == "f") {
            final += "\u2219\u2219\u2014\u2219 ";
        } else if (res[i] == "g") {
            final += "\u2014\u2014\u2219 ";
        } else if (res[i] == "h") {
            final += "\u2219\u2219\u2219\u2219 ";
        } else if (res[i] == "i") {
            final += "\u2219\u2219 ";
        } else if (res[i] == "j") {
            final += "\u2219\u2014\u2014\u2014 ";
        } else if (res[i] == "k") {
            final += "\u2014\u2219\u2014 ";
        } else if (res[i] == "l") {
            final += "\u2219\u2014\u2219\u2219 ";
        } else if (res[i] == "m") {
            final += "\u2014\u2014 ";
        } else if (res[i] == "n") {
            final += "\u2219\u2014 ";
        } else if (res[i] == "o") {
            final += "\u2014\u2014\u2014 ";
        } else if (res[i] == "p") {
            final += "\u2219\u2014\u2014\u2219 ";
        } else if (res[i] == "q") {
            final += "\u2014\u2014\u2219\u2014 ";
        } else if (res[i] == "r") {
            final += "\u2219\u2014\u2219 ";
        } else if (res[i] == "s") {
            final += "\u2219\u2219\u2219 ";
        } else if (res[i] == "t") {
            final += "\u2014 ";
        } else if (res[i] == "u") {
            final += "\u2219\u2219\u2014 ";
        } else if (res[i] == "v") {
            final += "\u2219\u2219\u2219\u2014  ";
        } else if (res[i] == "w") {
            final += "\u2219\u2014\u2014 ";
        } else if (res[i] == "x") {
            final += "\u2014\u2219\u2219\u2014 ";
        } else if (res[i] == "y") {
            final += "\u2014\u2219\u2014\u2014 ";
        } else if (res[i] == "z") {
            final += "\u2014\u2014\u2219\u2219 ";       //Contains the translation for numbers
        } else if (res[i] == "0") {
            final += "\u2014\u2014\u2014\u2014\u2014 ";
        } else if (res[i] == "1") {
            final += "\u2219\u2014\u2014\u2014\u2014 ";
        } else if (res[i] == "2") {
            final += "\u2219\u2219\u2014\u2014\u2014 ";
        } else if (res[i] == "3") {
            final += "\u2219\u2219\u2219\u2014\u2014 ";
        } else if (res[i] == "4") {
            final += "\u2219\u2219\u2219\u2219\u2014 ";
        } else if (res[i] == "5") {
            final += "\u2219\u2219\u2219\u2219\u2219 ";
        } else if (res[i] == "6") {
            final += "\u2014\u2219\u2219\u2219\u2219 ";
        } else if (res[i] == "7") {
            final += "\u2014\u2014\u2219\u2219\u2219 ";
        } else if (res[i] == "8") {
            final += "\u2014\u2014\u2014\u2219\u2219 ";
        } else if (res[i] == "9") {
            final += "\u2014\u2014\u2014\u2014\u2219 ";
        } else if (res[i] == " ") {                         //If there is a space it will appear larger
            final += " ";
        } else {
            final += "";                                    //If the character is not recognized it will be skipped
        }
    }

    translated.value = final;                               //Stores the final string in a variable

    document.getElementById("character-count").innerHTML = morse.length;   //Display the string length
}


// Function used to calculate the number of words in the string

function countWords(){
    if ( document.getElementById("txtInput").value === "" ) {
        document.getElementById("word-count").innerHTML = "0";
    } else {
        s = document.getElementById("txtInput").value;
        s = s.replace(/(^\s*)|(\s*$)/gi,"");
        s = s.replace(/[ ]{2,}/gi," ");
        s = s.replace(/\n /,"\n");
        document.getElementById("wordcount").value = s.split(' ').length;
        document.getElementById("word-count").innerHTML = s.split(' ').length;
    }
} 



// This function is used to play the sounds associated with the Morse code phrase
function play(){
    var translated   = document.getElementById("txtOutput");    //Stores the translated text
    var sound        = translated.value;                        //Stores the value of the translated text
    var res1         = sound.toLowerCase();                     //Converts string to lowercase
    var res          = res1.split("");                          //Splits up the characters
    var prop         = res1.length;                             //Calculate the length of the string
    var i;                                                      //Used in the for loop

    var dit          = new Audio('dit.mp3');                    //Create an audio element for the dot
    dit.playbackRate = 3;                                     //Establish the playback speed
    var dah          = new Audio('dah.mp3');                    //Create an audio element for the dash
    dah.playbackRate = 3;                                     //Establish the playback speed


    for (i = 0; i < prop; i++) {                                //The function will repeat until the string runs out of characters

        if (res[i] == "\u2219") {                               //If the character is a dot
            setTimeout(function(){ 
                dit.play();                                     //Play the dit sound
            }, i * 375);                                        //Wait for the dit sound to finish
        } else if (res[i] == "\u2014") {                        //If the character is a dash
            setTimeout(function(){                      
                dah.play();                                     //Play the dit sound
            }, i * 375);                                        //Wait for the dit sound to finish
        }  else {}
    }

}





function shine() {
    var text         = document.getElementById("txtInput");     //Stores the text in the input field
    var translated   = document.getElementById("txtOutput");    //Stores the text in the output field
    var morse        = text.value;                              //Stores the value of the text from the input field
    var res1         = morse.toLowerCase();                     //Converts the string to lowercase
    var res          = res1.split("");                          //Splits up the characters
    var prop         = res1.length;                             //Calculates the length of the string
    var i;                                                      //Used in the for loop
    var final        = "";                                      //Used to build the final statement
    
    
    
    
    for (i = 0; i < prop; i++) {                                //The function will repeat until the string runs out of characters
        if (res[i] == "a") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.a').css("background-color", "#eee");                                     
            }, i * 1250);    
        } else if (res[i] == "b") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.b').css("background-color", "#eee");                                     
            }, i * 1250);    
        } else if (res[i] == "c") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.c').css("background-color", "#eee");                                     
            }, i * 1250);    
        } else if (res[i] == "d") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.d').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "e") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.e').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "f") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.f').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "g") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.g').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "h") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.h').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "i") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.i').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "j") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.j').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "k") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.k').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "l") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.l').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "m") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.m').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "n") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.n').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "o") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.o').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "p") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.p').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "q") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.q').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "r") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.r').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "s") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.s').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "t") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.t').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "u") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.u').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "v") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.v').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "w") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.w').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "x") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.x').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "y") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.y').css("background-color", "#eee");                                     
            }, i * 1250); 
        } else if (res[i] == "z") {
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
                $('.z').css("background-color", "#eee");                                     
            }, i * 1250);        //Contains the translation for numbers
        } else if (res[i] == " ") {                         //If there is a space it will appear larger
            setTimeout(function(){ 
                $('.letter').css("background-color", "white");
            }, i * 1250); 
        } else {
            final += "";                                    //If the character is not recognized it will be skipped
        }
    }
}


//When the translate button is pressed these functions will be called
function someFunc() {
    countWords()
    translate();
    play();
    shine();
}  

//When the play button is pressed these functions will be called
function anotherFunc() {
    countWords()
    translate();
    play();
    shine();
} 