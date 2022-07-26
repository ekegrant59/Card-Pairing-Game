 var cards = document.querySelectorAll("#card");
var resultsArray = [];
var counter = 0;
var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");
var minutes = 00;
var seconds = 00;
var tens = 00;
var addMinutes = document.querySelector('#minutes');
var addSeconds = document.querySelector('#seconds');
var addTens = document.querySelector('#tens');
var Timer ;
var newGame = document.querySelector('#newButton');
var title = document.querySelector('#title');
var hide = document.querySelector('#hide');


//Shuffle Function
function shuffle(){
    for (oneCard of cards) {
        let random = Math.floor(Math.random() * 12);
        oneCard.style.order = random;
    }
}
shuffle()

for (oneCard of cards){

    oneCard.onclick = function () {
        if (this.className != 'flip' && this.className != 'correct' ){
            this.className = 'flip';
            var result = this.dataset.name;
            resultsArray.push(result);
            clearInterval(Timer);
            Timer = setInterval(startTimer, 10);
        }

        if (resultsArray.length > 1){

            if (resultsArray[0] === resultsArray[1]){
                matched();
                counter++;
                win();
                resultsArray= [];
            } else {
                notMatched();
                resultsArray =[];
            }
        }
    }
};

var matched = function() {
    var flipped = document.getElementsByClassName('flip');

    setTimeout(function(){
        for (var i = (flipped.length - 1); i >=0; i--){
            flipped[i].className = ('correct');
        }
    },400);

}

var notMatched = function(){
    var flipped = document.getElementsByClassName('flip');

    setTimeout(function(){
        for (var i = (flipped.length - 1); i >=0; i--){
            flipped[i].classList.remove('flip')
        }
    },500);
}

var win = function(){
    setTimeout(function(){
        if(counter === 6){
            clearInterval(Timer);
            text1.innerHTML = 'YOU WIN!!';
            text2.innerHTML = 'Your time was ' + minutes + ':' + seconds + ':' + tens;
            newGame.innerHTML = 'New Game';
            newGame.classList.add('newButton');
            title.style.marginBottom = '20px'
            hide.style.display = 'none'
    
        }
    },800)
}

function startTimer () {
    tens++;

    if (tens < 9){
        addTens.innerHTML = '0' + tens;
    }

    if (tens > 9){
        addTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        addSeconds.innerHTML = '0' + seconds;
        tens = 0;
        addTens.innerHTML = '0' + 0;
    }

    if (seconds > 9){
        addSeconds.innerHTML = seconds
    }

    if(seconds > 59){
        minutes++;
        addMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        addSeconds.innerHTML = '0' + 0;
    }

    if (minutes > 9){
        addMinutes.innerHTML = minutes
    }
}