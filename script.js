const WS = [
  new Audio("sounds/key01.mp3"),
  new Audio("sounds/key02.mp3"),
  new Audio("sounds/key03.mp3"),
  new Audio("sounds/key04.mp3"),
  new Audio("sounds/key05.mp3"),
  new Audio("sounds/key06.mp3"),
  new Audio("sounds/key07.mp3"),
  new Audio("sounds/key08.mp3"),
  new Audio("sounds/key09.mp3"),
  new Audio("sounds/key10.mp3"),
  new Audio("sounds/key11.mp3"),
  new Audio("sounds/key12.mp3"),
  new Audio("sounds/key13.mp3"),
  new Audio("sounds/key14.mp3"),
  new Audio("sounds/key15.mp3"),
  new Audio("sounds/key16.mp3"),
  new Audio("sounds/key17.mp3"),
  new Audio("sounds/key18.mp3"),
  new Audio("sounds/key19.mp3"),
  new Audio("sounds/key20.mp3"),
  new Audio("sounds/key21.mp3"),
];

const BS = [
  new Audio("sounds/b1.mp3"),
  new Audio("sounds/a3.mp3"),
  new Audio("sounds/a6.mp3"),
  new Audio("sounds/b6.mp3"),
  new Audio("sounds/c3.mp3"),
  new Audio("sounds/d6.mp3"),
  new Audio("sounds/do.mp3"),
  new Audio("sounds/e6.mp3"),
  new Audio("sounds/fa.mp3"),
  new Audio("sounds/g6.mp3"),
  new Audio("sounds/la.mp3"),
  new Audio("sounds/mi.mp3"),
  new Audio("sounds/re.mp3"),
  new Audio("sounds/si.mp3"),
  new Audio("sounds/sol.mp3"),
];

const whiteKeyMap = {
  a: 0,
  s: 1,
  d: 2,
  f: 3,
  g: 4,
  h: 5,
  j: 6,
  k: 7,
  l: 8,
  ";": 9,
  "'":10,
  z: 11,
  x: 12,
  c: 13,
  v: 14,
  b: 15,
  n: 16,
  m: 17,
  ",":18,
  ".":19,
  "/":20
};
const blackKeyMap = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  0: 9,
  q: 10,
  w: 11,
  e: 12,
  r: 13,
  t: 14
};


let currentSound = null;

function playAudio(audio) {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
  currentSound = audio;
  currentSound.currentTime = 0; 
  currentSound.play();
}

const w = document.getElementsByClassName("white");
for (let i = 0; i < w.length; i++) {
  w[i].addEventListener("click", function () {
    w[i].style.backgroundColor = "grey";
    playAudio(WS[i]);
    setTimeout(() => {
      w[i].style.backgroundColor = "white";
    }, 150);
  });
}

const b = document.getElementsByClassName("black");
for (let i = 0; i < b.length; i++) {
  b[i].addEventListener("click", function () {
    b[i].style.backgroundColor = "grey";
    playAudio(BS[i]);
    setTimeout(() => {
      b[i].style.backgroundColor = "black";
    }, 150);
  });
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (whiteKeyMap.hasOwnProperty(key)) {
    const index = whiteKeyMap[key];
    w[index].style.backgroundColor = "grey";
    playAudio(WS[index]);
    setTimeout(() => {
      w[index].style.backgroundColor = "white";
    }, 150);
  }
  if (blackKeyMap.hasOwnProperty(key)) {
    const index = blackKeyMap[key];
    b[index].style.backgroundColor = "grey";
    playAudio(BS[index]);
    setTimeout(() => {
      b[index].style.backgroundColor = "black";
    }, 150);
  }
});
