document.addEventListener("DOMContentLoaded", function() {
  var wordlist = ["aaieba kouiu", "waraukadoniha hukukitaru", "umanomimininenbutu"];
  var wordlistJapanese = ["ああ言えばこう言う", "笑う門には福来たる", "馬の耳に念仏"];
  var time_limit = 60;
  var readytime = 3;
  var score;
  var correct;
  var mistake;
  var char_num = 0;
  var word_char;
  var random;
  var newline;


  var wordElement = document.getElementById("word");
  var japaneseElement = document.getElementById("japanese");
  var countElement = document.getElementById("count");
  var scoredisElement = document.getElementById("scoredis");
  var startButton = document.getElementById("start_button");


  startButton.addEventListener("click", ready);


  function ready() {
    readytime = 3;
    scoredisElement.innerHTML = "";
    startButton.style.visibility = "hidden";
    var readytimer = setInterval(function() {
      countElement.innerHTML = readytime;
      readytime--;
      if (readytime < 0) {
        clearInterval(readytimer);
        gameStart();
      }
    }, 1000);
  }


  function gameStart() {
    score = 0;
    mistake = 0;
    correct = 0;
    wordDisplay();
    var time_remaining = time_limit;
    var gametimer = setInterval(function() {
      countElement.innerHTML = "残り時間：" + time_remaining;
      time_remaining--;
      if (time_remaining <= 0) {
        clearInterval(gametimer);
        finish();
      }
    }, 1000);
  }


  function wordDisplay() {
    random = Math.floor(Math.random() * wordlist.length);
    wordElement.innerHTML = wordlist[random];
    japaneseElement.innerHTML = wordlistJapanese[random];
    charInsort();
  }


  function charInsort() {
    word_char = wordlist[random].charAt(char_num);
  }


  document.addEventListener("keydown", function(e) {
    var keyStr = String.fromCharCode(e.keyCode).toLowerCase();
    if (keyStr == word_char) {
      correctaudio.pause();
      correctaudio.currentTime = 0;
      correctaudio.play();
      wordElement.innerHTML = "<span style='color: red;'>" + wordlist[random].substr(0, char_num + 1) + "</span>" + wordlist[random].substr(char_num + 1);
      char_num++;
      if (wordlist[random].charAt(char_num) === " ") {
        char_num++;
      }
      correct++;
      charInsort();
    } else {
      missaudio.pause();
      missaudio.currentTime = 0;
      missaudio.play();
      mistake++;
    }


    if (char_num == wordlist[random].length) {
      char_num = 0;
      wordDisplay();
    }
  });


  function finish() {
    score = Math.floor(Math.pow(correct, 2) * Math.pow((correct / (correct + mistake)), 5));
    scoredisElement.innerHTML = "スコア:" + score + "点" + "<hr>正タイプ数:" + correct + "<br>ミスタイプ数:" + mistake + "<br>正答率" + (correct / (correct + mistake) * 100).toFixed(1) + "%";
    countElement.innerHTML = "";
    wordElement.innerHTML = "";
    japaneseElement.innerHTML = "";
    startButton.style.visibility = "visible";
    word_char = 0;
    random = 0;
    char_num = 0;
  }
});