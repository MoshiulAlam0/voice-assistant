import { searchFromGoogle } from "./functionLibary.js";
import { playVideoFromYoutube } from "./functionLibary.js";
import { toKnowTimeAndDate } from "./functionLibary.js";
import { toKnowWeather } from "./functionLibary.js";
import { data } from "./utility.js";

// console.log(data.greetingsArray)

const btn = document.querySelector(".btn");
const listainer = document.querySelector(".listainer");
const textContent = document.querySelector(".text-content .text");
const textContent2 = document.querySelector(".text-content .text2");

/* text to voice */
const speechMain = window.speechSynthesis;
// voice to text
const voiceToText = window.SpeechRecognition || window.webkitSpeechRecognition;

function talk_me(text) {               /// text to speech :::::===>
  setText(textContent2, text, 'ans')
  const utterence = new window.SpeechSynthesisUtterance();
  utterence.text = text;
  setTimeout(() => {
    const voiceArr = speechMain.getVoices();
    utterence.voice = voiceArr[6];
    speechMain.speak(utterence);
  }, 112);
}

// make voice to text function
if (voiceToText) {
  const voiceInfo = new voiceToText();

  btn.addEventListener("click", () => {
    const lt = gsap.timeline();
    lt.to(".btn", {
      duration: 0.3,
      width: 0,
      opacity: 0,
      ease: "back.out(1.7)",
    });
    lt.to(".listainer", {
      duration: 3,
      opacity: 1,
      ease: "back.out(1.7)",
    });

    voiceInfo.start();

    voiceInfo.onresult = (event) => {
      let result = event.results[0][0].transcript;
      mainSpaek(result);
      setText(textContent, result, 'qus');
    };
    voiceInfo.onerror = (err) => {
      if (err.error === "network") {
        talk_me("sorry sir, plase check you internet");
        console.log(err);
      } else {
        talk_me("sir, something is wrong");
        console.log(err);
      }
    };
    voiceInfo.onend = () => {
      gsap.to(".listainer", {
        duration: 3,
        opacity: 0,
        ease: "back.out(1.7)",
      });
      gsap.to(".btn", {
        delay: 0.3,
        duration: 0.3,
        width: "70%",
        opacity: 1,
        ease: "back.out(1.7)",
      });
    };
  });
} else {
  alert(
    "voice is not supported to your browser. you can switch another browser"
  );
}

// auto talk
function autoSpaek() {
  const date = new Date();
  const houre = date.getHours();
  if (houre >= 5 && houre <= 12) {
    talk_me("Good morning , what can i help you sir.");
  } else if (houre >= 13 && houre <= 17) {
    talk_me("Good afternoon sir, what can i help you sir.");
  } else if (houre >= 18 && houre <= 21) {
    talk_me("Good evening sir, what can i help you sir.");
  } else if (houre >= 22 && houre <= 24) {
    talk_me("Good night sir, what can i help you sir.");
  }
}


// voice ar reaply / ans deoyar jonno :
function mainSpaek(text) {
  let lowText = text.toLowerCase();

  // some commone qustion and answer
  for (let i = 0; i < data.qustionAndAns.length; i++) {
    const ele = data.qustionAndAns[i];
    if (ele.question.includes(lowText)) {
      talk_me(ele.answer);
      return;
    }
  }


  // to know how are you or other
  for (let i = 0; i < data.howAreYouPhrases.length; i++) {
    const speech = data.howAreYouPhrases[i];
    let lowSpeech = speech.question.toLowerCase();
    if (lowText.includes(lowSpeech) || lowSpeech.includes(lowText)) {
      talk_me(speech.answer);
      return;
      break;
    }
  }

  

  // if is open the any website and setting and app.
  let lastword = lowText.split(" ")[lowText.split(" ").length - 1];
  let lastword2 = lowText.split(" ")[lowText.split(" ").length - 2];
  if (
    lowText.includes(`open the`) ||
    lowText.includes(`open the ${lastword}`) ||
    lowText.includes(`open ${lastword}`) ||
    lowText.includes(`open the ${lastword2} ${lastword}`) ||
    lowText.includes(`open ${lastword2} ${lastword}`) ||
    lowText.includes(`can you please open the ${lastword}`) ||
    lowText.includes(`can you please open ${lastword}`) ||
    lowText.includes(`can you open the ${lastword}`) ||
    lowText.includes(`can you open ${lastword}`)
  ) {
    // for open social media
    for (let i = 0; i < data.popularWebsites.length; i++) {
      const app = data.popularWebsites[i];
      if (
        lowText.includes(app.name.toLowerCase()) ||
        app.name.toLowerCase().includes(lastword)
      ) {
        talk_me(`opening the ${app.name}`);
        window.open(app.path);
        break;
      }
    }

    //  for open inbuilt app
    for (let i = 0; i < data.inbuiltApps.length; i++) {
      const app = data.inbuiltApps[i];
      if (
        lowText.includes(app.name.toLowerCase()) 
        // app.name.toLowerCase().includes(lastword)
      ) {
        talk_me(`opening the ${app.name}`);
        window.open(app.path);
        break;
      }
    }

    searchFromGoogle(talk_me, lowText)
    // open the setting
    if (lowText.includes("setting") || lowText.includes("settings")) {
      for (let i = 0; i < data.windowsSettings.length; i++) {
        const setting = data.windowsSettings[i];
        let name = setting.name.toLowerCase();
        if (lowText.includes(name)) {
          talk_me(`opening the ${name} setting.`);
          window.open(setting.path);
          break;
        }
      }
    }
  } else if (
    //to play any music , quran , etc
    lowText.includes("play") ||
    lowText.includes("can you play") ||
    lowText.includes("can you please play") ||
    lowText.includes("could you please play") ||
    lowText.includes("please play") ||
    lowText.includes("would you play") ||
    lowText.includes("I would like you to play") ||
    lowText.includes("kindly play") ||
    lowText.includes("could you play") ||
    lowText.includes("can I ask you to play") ||
    lowText.includes("would you kindly play") ||
    lowText.includes("might you play") ||
    lowText.includes("let's hear") ||
    lowText.includes("let's play") ||
    lowText.includes("start playing")
  ) {
    playVideoFromYoutube(talk_me, lowText);
  }else if(data.timeAndDateStr.toLowerCase().includes(lowText)){   // to know the time and date 
    toKnowTimeAndDate(talk_me, lowText)
  }else if(
    lowText.includes('weather')||
    lowText.includes('temperature')
  ){   // to know the time and date 
    toKnowWeather(talk_me, lowText)
  }
   else {
    if(lowText.includes('let\'s go to the google') || 
    lowText.includes('let\'s go to google') ||
    lowText.includes('go to the google') ||
    lowText.includes('go to google') ||
    lowText.includes('go google') 
  ){
    window.open('https://www.google.com')
    talk_me('sir, i\'m in google')
  }else{
    searchFromGoogle(talk_me, lowText);
  }
  }
}

// whene speaking

// set text to the and p tag or qustion p tag 
function setText(elem, text, ansQus) {
  //
  elem.innerHTML = "";
  let newSTR = "";
  text.split("").forEach((char) => {
    if(ansQus === 'qus'){
      newSTR += `<span class="letter1">${char}</span>`;
    }else{
      newSTR += `<span class="letter2">${char}</span>`;
    }
    
  });
  elem.innerHTML = newSTR;
  if(ansQus === 'qus'){
    gsap.from(".letter1", {
      opacity:0,
      stagger: 0.05,
    });
  }else{
    gsap.from(".letter2", {
      opacity: 0,
      stagger: 0.05,
      // color: "white",
    });
  }
}

// call relode function >===>:
// window.addEventListener("lode", autoSpaek());