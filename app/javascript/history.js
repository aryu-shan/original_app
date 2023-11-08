document.addEventListener("DOMContentLoaded", function() {
  var questions = [];  // 問題文の配列
  var translations = [];  // 日本語訳の配列
  var currentQuestionIndex = 0;
  var time_limit = 60;
  var readytime = 3;
  var score;
  var correct;
  var mistake;
  var char_num = 0;
  var word_char;
  var wordElement = document.getElementById("word");
  var japaneseElement = document.getElementById("japanese");
  var countElement = document.getElementById("count");
  var scoredisElement = document.getElementById("scoredis");
  var startButton = document.getElementById("start_button");
  var map = { 'あ': ['a'], 'い': ['i', 'yi'], 'う': ['u', 'wu'], 'え': ['e'], 'お': ['o'],
  'か': ['ka', 'ca'], 'き': ['ki'], 'く': ['ku', 'cu', 'qu'], 'け': ['ke'], 'こ': ['ko', 'co'],
  'さ': ['sa'], 'し': ['si', 'shi', 'ci'], 'す': ['su'], 'せ': ['se', 'ce'], 'そ': ['so'],
  'た': ['ta'], 'ち': ['ti', 'chi'], 'つ': ['tu', 'tsu'], 'て': ['te'], 'と': ['to'],
  'な': ['na'], 'に': ['ni'], 'ぬ': ['nu'], 'ね': ['ne'], 'の': ['no'],
  'は': ['ha'], 'ひ': ['hi'], 'ふ': ['fu', 'hu'], 'へ': ['he'], 'ほ': ['ho'],
  'ま': ['ma'], 'み': ['mi'], 'む': ['mu'], 'め': ['me'], 'も': ['mo'],
  'や': ['ya'], 'ゆ': ['yu'], 'よ': ['yo'],
  'ら': ['ra'], 'り': ['ri'], 'る': ['ru'], 'れ': ['re'], 'ろ': ['ro'],
  'わ': ['wa'], 'ゐ': ['wyi'], 'ゑ': ['wye'], 'を': ['wo'], 'ん': ['nn', 'xn', 'n'],
  'が': ['ga'], 'ぎ': ['gi'], 'ぐ': ['gu'], 'げ': ['ge'], 'ご': ['go'],
  'ざ': ['za'], 'じ': ['ji', 'zi'], 'ず': ['zu'], 'ぜ': ['ze'], 'ぞ': ['zo'],
  'だ': ['da'], 'ぢ': ['di'], 'づ': ['du'], 'で': ['de'], 'ど': ['do'],
  'ば': ['ba'], 'び': ['bi'], 'ぶ': ['bu'], 'べ': ['be'], 'ぼ': ['bo'],
  'ぱ': ['pa'], 'ぴ': ['pi'], 'ぷ': ['pu'], 'ぺ': ['pe'], 'ぽ': ['po'],
  'うぁ': ['wha'], 'うぃ': ['whi'], 'うぇ': ['whe'], 'うぉ': ['who'],
  'きゃ': ['kya'], 'きぃ': ['kyi'], 'きゅ': ['kyu'], 'きぇ': ['kye'], 'きょ': ['kyo'],
  'くぁ': ['qa', 'qwa'], 'くぃ': ['qi', 'qwi'], 'くぇ': ['qe', 'qwe'], 'くぉ': ['qo', 'qwo'], 'くゃ': ['qya'], 'くゅ': ['qyu'], 'くょ': ['qyo'],
  'しゃ': ['sya', 'sha'], 'しぃ': ['syi'], 'しゅ': ['syu', 'shu'], 'しぇ': ['sye', 'she'], 'しょ': ['syo', 'sho'],
  'つぁ': ['tsa'], 'つぃ': ['tsi'], 'つぇ': ['tse'], 'つぉ': ['tso'],
  'ちゃ': ['tya', 'cha'], 'ちぃ': ['tyi'], 'ちゅ': ['tyu', 'chu'], 'ちぇ': ['tye', 'che'], 'ちょ': ['tyo', 'cho'],
  'てゃ': ['tha'], 'てぃ': ['thi'], 'てゅ': ['thu'], 'てぇ': ['the'], 'てょ': ['tho'],
  'とぁ': ['twa'], 'とぃ': ['twi'], 'とぅ': ['twu'], 'とぇ': ['twe'], 'とぉ': ['two'],
  'ひゃ': ['hya'], 'ひぃ': ['hyi'], 'ひゅ': ['hyu'], 'ひぇ': ['hye'], 'ひょ': ['hyo'],
  'ふぁ': ['fa'], 'ふぃ': ['fi'], 'ふぇ': ['fe'], 'ふぉ': ['fo'],
  'にゃ': ['nya'], 'にぃ': ['nyi'], 'にゅ': ['nyu'], 'にぇ': ['nye'], 'にょ': ['nyo'],
  'みゃ': ['mya'], 'みぃ': ['myi'], 'みゅ': ['myu'], 'みぇ': ['mye'], 'みょ': ['myo'],
  'りゃ': ['rya'], 'りぃ': ['ryi'], 'りゅ': ['ryu'], 'りぇ': ['rye'], 'りょ': ['ryo'],
  'ヴぁ': ['va'], 'ヴぃ': ['vi'], 'ヴ': ['vu'], 'ヴぇ': ['ve'], 'ヴぉ': ['vo'],
  'ぎゃ': ['gya'], 'ぎぃ': ['gyi'], 'ぎゅ': ['gyu'], 'ぎぇ': ['gye'], 'ぎょ': ['gyo'],
  'ぐぁ': ['gwa'], 'ぐぃ': ['gwi'], 'ぐぅ': ['gwu'], 'ぐぇ': ['gwe'], 'ぐぉ': ['gwo'],
  'じゃ': ['ja', 'zya'], 'じぃ': ['jyi', 'zyi'], 'じゅ': ['ju', 'zyu'], 'じぇ': ['je', 'zye'], 'じょ': ['jo', 'zyo'],
  'でゃ': ['dha'], 'でぃ': ['dhi'], 'でゅ': ['dhu'], 'でぇ': ['dhe'], 'でょ': ['dho'],
  'ぢゃ': ['dya'], 'ぢぃ': ['dyi'], 'ぢゅ': ['dyu'], 'ぢぇ': ['dye'], 'ぢょ': ['dyo'],
  'びゃ': ['bya'], 'びぃ': ['byi'], 'びゅ': ['byu'], 'びぇ': ['bye'], 'びょ': ['byo'],
  'ぴゃ': ['pya'], 'ぴぃ': ['pyi'], 'ぴゅ': ['pyu'], 'ぴぇ': ['pye'], 'ぴょ': ['pyo'],
  'ぁ': ['la', 'xa'], 'ぃ': ['li', 'xi'], 'ぅ': ['lu', 'xu'], 'ぇ': ['le', 'xe'], 'ぉ': ['lo', 'xo'],
  'ゃ': ['lya', 'xya'], 'ゅ': ['lyu', 'xyu'], 'ょ': ['lyo', 'xyo'], 'っ': ['ltu', 'xtu'],
  'ー': ['-'], ',': [','], '.': ['.'], '、': [','], '。': ['.'],
  '・': ['/'], '、': [','], '。': ['.'], '・': ['/']
};

  startButton.addEventListener("click", ready);

  function ready() {
    readytime = 3;
    scoredisElement.innerHTML = "";
    startButton.style.visibility = "hidden";
    var readytimer = setInterval(function() {
      countElement.innerHTML =  readytime;
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
      if (time_remaining < 0) {
        clearInterval(gametimer);
        finish();
      }
    }, 1000);
  }

  function wordDisplay() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    wordElement.innerHTML = questions[currentQuestionIndex];
    japaneseElement.innerHTML = translations[currentQuestionIndex];
    char_num = 0;  // char_num の初期化
    charInsort();
}

function charInsort() {
  word_char = questions[currentQuestionIndex].charAt(char_num);

  if (word_char === 'si') {
    word_char = 'shi';
  }
  else if (word_char === 'ti') {
    word_char = 'chi';
  }

}
document.addEventListener("keydown", function(e) {
  var keyStr = e.key.toLowerCase();
  if (keyStr == word_char) {
      wordElement.innerHTML = "<span style='color: red;'>" + questions[currentQuestionIndex].substr(0, char_num + 1) + "</span>" + questions[currentQuestionIndex].substr(char_num + 1);
      char_num++;
      if (questions[currentQuestionIndex].charAt(char_num) === " ") {
        char_num++;
      }
      correct++;
      charInsort();
    } else {
      mistake++;
    }

    if (char_num == questions[currentQuestionIndex].length) {
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
    char_num = 0;
  }

  // JSONファイルから問題文と日本語訳を読み込む
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/questions.json", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      questions = data.questions.map(function(question) {
        return question.text;
      });
      translations = data.questions.map(function(question) {
        return question.translation;
      });
    }
  };
  xhr.send();
});