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
  