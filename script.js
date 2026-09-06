var gameStarted=false;
var gameMode="";
var position=0;
var score=0;
var typed="";
var sequenceLength=8;
var startTime=0;
var timer;
var extraChance=true;
var key1="";
var key2="";
var key3="";
var key4="";
var key5="";
var key6="";
var key7="";
var key8="";
var key9="";
var key10="";
var key11="";
var key12="";
var key13="";
var key14="";
var key15="";
var key16="";
var key17="";
var key18="";
var key19="";
var key20="";
var infoText=document.getElementById("info");
var modeText=document.getElementById("mode");
var timeText=document.getElementById("time");
var scoreText=document.getElementById("score");
var sequenceText=document.getElementById("sequence");
var typedText=document.getElementById("typed");
var messageText=document.getElementById("message");
var normalBestText=document.getElementById("normalBest");
var memoryBestText=document.getElementById("memoryBest");
var sideStatusText=document.getElementById("sideStatus");
var normalBest=localStorage.getItem("normalBest");
var memoryBest=localStorage.getItem("memoryBest");
if(normalBest != null) {
    normalBestText.innerHTML="Normal: "+normalBest+" sec";
}
if(memoryBest != null) {
    memoryBestText.innerHTML="Memory: "+memoryBest+" sec";
}
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});
document.addEventListener("wheel", function(event) {
    event.preventDefault();
}, {passive: false});
document.addEventListener("keydown", function(event) {
    if(event.key=="Tab") {
        event.preventDefault();
    }
});
document.addEventListener("keydown", function(event) {
    var key=event.key.toUpperCase();
    if(gameStarted==false) {
        if(key=="N") {
            startNormal();
            return;
        }
        if(key=="M") {
            startMemory();
            return;
        }
    }
    if(key=="ESCAPE") {
        endGame();
        return;
    }
    if(gameStarted==false) {
        return;
    }
    if(position==0) {
        if(key==key1) {
            typed=typed+key;
            position=1;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==1) {
        if(key==key2) {
            typed=typed+key;
            position=2;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==2) {
        if(key==key3) {
            typed=typed+key;
            position=3;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==3) {
        if(key==key4) {
            typed=typed+key;
            position=4;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==4) {
        if(key==key5) {
            typed=typed+key;
            position=5;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==5) {
        if(key==key6) {
            typed=typed+key;
            position=6;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==6) {
        if(key==key7) {
            typed=typed+key;
            position=7;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==7) {
        if(key==key8) {
            typed=typed+key;
            position=8;
            if(sequenceLength==8) {
                correct();
            }
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==8) {
        if(key==key9) {
            typed=typed+key;
            position=9;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==9) {
        if(key==key10) {
            typed=typed+key;
            position=10;
            if(sequenceLength==10) {
                correct();
            }
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==10) {
        if(key==key11) {
            typed=typed+key;
            position=11;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==11) {
        if(key==key12) {
            typed=typed+key;
            position=12;
            if(sequenceLength==12) {
                correct();
            }
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==12) {
        if(key==key13) {
            typed=typed+key;
            position=13;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==13) {
        if(key==key14) {
            typed=typed+key;
            position=14;
            if(sequenceLength==14) {
                correct();
            }
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==14) {
        if(key==key15) {
            typed=typed+key;
            position=15;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==15) {
        if(key==key16) {
            typed=typed+key;
            position=16;
            if(sequenceLength==16) {
                correct();
            }
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==16) {
        if(key==key17) {
            typed=typed+key;
            position=17;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==17) {
        if(key==key18) {
            typed=typed+key;
            position=18;
            if(sequenceLength==18) {
                correct();
            }
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==18) {
        if(key==key19) {
            typed=typed+key;
            position=19;
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
    if(position==19) {
        if(key==key20) {
            typed=typed+key;
            position=20;
            if(sequenceLength==20) {
                correct();
            }
        } else {
            wrong();
        }
        typedText.innerHTML=typed;
        return;
    }
});
function startNormal() {
    gameStarted=true;
    gameMode="normal";
    score=0;
    sequenceLength=8;
    infoText.innerHTML="Type the sequence";
    modeText.innerHTML="Mode: Normal";
    scoreText.innerHTML="Score: 0";
    sideStatusText.innerHTML="Normal active";
    document.body.className="";
    startRound();
}
function startMemory() {
    gameStarted=true;
    gameMode="memory";
    score=0;
    sequenceLength=8;
    extraChance=true;
    infoText.innerHTML="Memorize the sequence";
    modeText.innerHTML="Mode: Memory";
    scoreText.innerHTML="Score: 0";
    sideStatusText.innerHTML="Memory active";
    document.body.className="memory";
    startRound();
}
function startRound() {
    position=0;
    typed="";
    extraChance=true;
    key1=randomKey();
    key2=randomKey();
    key3=randomKey();
    key4=randomKey();
    key5=randomKey();
    key6=randomKey();
    key7=randomKey();
    key8=randomKey();
    key9=randomKey();
    key10=randomKey();
    key11=randomKey();
    key12=randomKey();
    key13=randomKey();
    key14=randomKey();
    key15=randomKey();
    key16=randomKey();
    key17=randomKey();
    key18=randomKey();
    key19=randomKey();
    key20=randomKey();
    typedText.innerHTML="";
    messageText.innerHTML="";
    sequenceText.innerHTML="";
    showSequence();
    if(gameMode=="memory") {
        messageText.innerHTML="Memorize - 5 seconds";
        setTimeout(function() {
            sequenceText.innerHTML="";
            infoText.innerHTML="Type what you remember";
        }, 5000);
    }
    startTimer();
}
function showSequence() {
    var text="";
    if(sequenceLength>=1) {
        text=text+key1+" ";
    }
    if(sequenceLength>=2) {
        text=text+key2+" ";
    }
    if(sequenceLength>=3) {
        text=text+key3+" ";
    }
    if(sequenceLength>=4) {
        text=text+key4+" ";
    }
    if(sequenceLength>=5) {
        text=text+key5+" ";
    }
    if(sequenceLength>=6) {
        text=text+key6+" ";
    }
    if(sequenceLength>=7) {
        text=text+key7+" ";
    }
    if(sequenceLength>=8) {
        text=text+key8+" ";
    }
    if(sequenceLength>=9) {
        text=text+key9+" ";
    }
    if(sequenceLength>=10) {
        text=text+key10+" ";
    }
    if(sequenceLength>=11) {
        text=text+key11+" ";
    }
    if(sequenceLength>=12) {
        text=text+key12+" ";
    }
    if(sequenceLength>=13) {
        text=text+key13+" ";
    }
    if(sequenceLength>=14) {
        text=text+key14+" ";
    }
    if(sequenceLength>=15) {
        text=text+key15+" ";
    }
    if(sequenceLength>=16) {
        text=text+key16+" ";
    }
    if(sequenceLength>=17) {
        text=text+key17+" ";
    }
    if(sequenceLength>=18) {
        text=text+key18+" ";
    }
    if(sequenceLength>=19) {
        text=text+key19+" ";
    }
    if(sequenceLength>=20) {
        text=text+key20+" ";
    }
    sequenceText.innerHTML=text;
}
function correct() {
    clearInterval(timer);
    var finalTime=(Date.now()-startTime)/1000;
    score=score+100;
    scoreText.innerHTML="Score: "+score;
    messageText.innerHTML="Correct - "+finalTime.toFixed(2)+" seconds";
    document.body.className="correct";
    checkBestTime(finalTime);
    if(sequenceLength<20) {
        sequenceLength=sequenceLength+2;
    }
    setTimeout(function() {
        document.body.className="";
        startRound();
    }, 600);
}
function wrong() {
    typed="";
    position=0;
    typedText.innerHTML="";
    document.body.className="wrong";
    if(gameMode=="normal") {
        messageText.innerHTML="Wrong - Try again";
    }
    if(gameMode=="memory") {
        if(extraChance==true) {
            extraChance=false;
            messageText.innerHTML="Wrong - Final 5 second reveal";
            sequenceText.innerHTML="";
            setTimeout(function() {
                showSequence();
            }, 100);
            setTimeout(function() {
                sequenceText.innerHTML="";
                messageText.innerHTML="No more reveals";
            }, 5100);
        } else {
            messageText.innerHTML="Wrong - Session ended";
            setTimeout(function() {
                endGame();
            }, 800);
        }
    }
    setTimeout(function() {
        document.body.className="";
    }, 400);
}
function randomKey() {
    var number=Math.floor(Math.random()*28);
    if(number==0) {
        return "A";
    }
    if(number==1) {
        return "B";
    }
    if(number==2) {
        return "C";
    }
    if(number==3) {
        return "D";
    }
    if(number==4) {
        return "E";
    }
    if(number==5) {
        return "F";
    }
    if(number==6) {
        return "G";
    }
    if(number==7) {
        return "H";
    }
    if(number==8) {
        return "J";
    }
    if(number==9) {
        return "K";
    }
    if(number==10) {
        return "L";
    }
    if(number==11) {
        return "M";
    }
    if(number==12) {
        return "N";
    }
    if(number==13) {
        return "P";
    }
    if(number==14) {
        return "Q";
    }
    if(number==15) {
        return "R";
    }
    if(number==16) {
        return "S";
    }
    if(number==17) {
        return "T";
    }
    if(number==18) {
        return "U";
    }
    if(number==19) {
        return "V";
    }
    if(number==20) {
        return "W";
    }
    if(number==21) {
        return "X";
    }
    if(number==22) {
        return "Y";
    }
    if(number==23) {
        return "Z";
    }
    if(number==24) {
        return "1";
    }
    if(number==25) {
        return "2";
    }
    if(number==26) {
        return "3";
    }
    if(number==27) {
        return "4";
    }
}
function startTimer() {
    clearInterval(timer);
    startTime=Date.now();
    timer=setInterval(function() {
        var currentTime=(Date.now()-startTime)/1000;
        timeText.innerHTML="Time: "+currentTime.toFixed(2);
    }, 10);
}
function checkBestTime(finalTime) {
    var timeNumber=finalTime.toFixed(2);
    if(gameMode=="normal") {
        if(normalBest==null) {
            normalBest=timeNumber;
            localStorage.setItem("normalBest",normalBest);
            normalBestText.innerHTML="Normal: "+normalBest+" sec";
        } else {
            if(finalTime<Number(normalBest)) {
                normalBest=timeNumber;
                localStorage.setItem("normalBest",normalBest);
                normalBestText.innerHTML="Normal: "+normalBest+" sec";
            }
        }
    }
    if(gameMode=="memory") {
        if(memoryBest==null) {
            memoryBest=timeNumber;
            localStorage.setItem("memoryBest",memoryBest);
            memoryBestText.innerHTML="Memory: "+memoryBest+" sec";
        } else {
            if(finalTime<Number(memoryBest)) {
                memoryBest=timeNumber;
                localStorage.setItem("memoryBest",memoryBest);
                memoryBestText.innerHTML="Memory: "+memoryBest+" sec";
            }
        }
    }
}
function endGame() {
    if(gameStarted==false) {
        return;
    }
    gameStarted=false;
    clearInterval(timer);
    sequenceText.innerHTML="";
    typedText.innerHTML="";
    messageText.innerHTML="Session ended";
    infoText.innerHTML="Press N or M to start";
    modeText.innerHTML="Mode: None";
    timeText.innerHTML="Time: 0.00";
    scoreText.innerHTML="Score: 0";
    sideStatusText.innerHTML="Waiting";
    document.body.className="";
}
