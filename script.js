const loveSentences = [
    "Every moment with you is a precious gift that I cherish more than anything in the world.",
    "You are the light that illuminates my life and makes every day worth living.",
    "I am so grateful to have you in my life, and I promise to always cherish and care for you with all my heart.",
    "You are the most beautiful, intelligent, and amazing person I have ever met, and I love you more and more every day.",
    "I cannot imagine a life without you, and I am so lucky to have you as my partner and best friend.",
    "Being with you makes me feel complete and fills my heart with an overwhelming sense of joy and happiness.",
    "You are the missing piece that I have been searching for my whole life, and I am so blessed to have found you.",
    "I love the way your smile lights up the room and how your laugh can make even the toughest days seem brighter.",
    "You inspire me to be a better person every day, and I am grateful for your unwavering love and support.",
    "I am so grateful for the moments we share together, and I promise to always treasure each and every one of them.",
    "Your love is the most precious gift I have ever received, and I will always cherish it with all my heart.",
    "I cannot imagine a future without you by my side, and I promise to always love and care for you no matter what.",
    "You make my life more beautiful, more exciting, and more meaningful in every way.",
    "I am so grateful for the memories we have shared together and for the many more that are yet to come.",
    "Your love is the most important thing in my life, and I will always cherish it with all my heart.",
    "I love the way you look at me, the way you hold my hand, and the way you make me feel like I am the only person in the world.",
    "You are the most amazing person I have ever met, and I am so grateful for your love and support.",
    "I cannot imagine a day without you by my side, and I promise to always be there for you no matter what.",
    "You are my everything, and I love you more than words could ever express.",
    "I am so blessed to have you in my life, and I promise to always cherish and love you with all my heart.",
  ];
  
  let previousLoveSentenceIndex = -1;
  
  function getRandomLoveSentenceIndex() {
    let randomIndex = Math.floor(Math.random() * loveSentences.length);
    while (randomIndex === previousLoveSentenceIndex) {
      randomIndex = Math.floor(Math.random() * loveSentences.length);
    }
    previousLoveSentenceIndex = randomIndex;
    return randomIndex;
  }
  
  function displayLoveSentence() {
    const loveSentenceElement = document.getElementById("love-sentence");
    const randomIndex = getRandomLoveSentenceIndex();
    const loveSentence = loveSentences[randomIndex];
    loveSentenceElement.textContent = loveSentence;
  }
  
  displayLoveSentence();
  

  var radius = 240; // how big of the radius
  var autoRotate = true; // auto rotate or not
  var rotateSpeed = -60; // unit: seconds/360 degrees
  var imgWidth = 120; // width of images (unit: px)
  var imgHeight = 170; // height of images (unit: px)
  
  // Link of background music - set 'null' if you dont want to play background music
  var bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
  var bgMusicControls = true; // Show UI music control
  
  /*
       NOTE:
         + imgWidth, imgHeight will work for video
         + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
         + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
         + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
  */
  
  
  // ===================== start =======================
  // animation start after 1000 miliseconds
  setTimeout(init, 1000);
  
  var odrag = document.getElementById('drag-container');
  var ospin = document.getElementById('spin-container');
  var aImg = ospin.getElementsByTagName('img');
  var aVid = ospin.getElementsByTagName('video');
  var aEle = [...aImg, ...aVid]; // combine 2 arrays
  
  // Size of images
  ospin.style.width = imgWidth + "px";
  ospin.style.height = imgHeight + "px";
  
  // Size of ground - depend on radius
  var ground = document.getElementById('ground');
  ground.style.width = radius * 3 + "px";
  ground.style.height = radius * 3 + "px";
  
  function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }
  
  function applyTranform(obj) {
    // Constrain the angle of camera (between 0 and 180)
    if(tY > 180) tY = 180;
    if(tY < 0) tY = 0;
  
    // Apply the angle
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
  }
  
  function playSpin(yes) {
    ospin.style.animationPlayState = (yes?'running':'paused');
  }
  
  var sX, sY, nX, nY, desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;
  
  // auto spin
  if (autoRotate) {
    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
  }
  
  
  // setup events
  document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
        sY = e.clientY;
  
    this.onpointermove = function (e) {
      e = e || window.event;
      var nX = e.clientX,
          nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      sX = nX;
      sY = nY;
    };
  
    this.onpointerup = function (e) {
      odrag.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag.timer);
          playSpin(true);
        }
      }, 17);
      this.onpointermove = this.onpointerup = null;
    };
  
    return false;
  };
  
  document.onmousewheel = function(e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
  };