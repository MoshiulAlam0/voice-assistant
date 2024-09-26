import { data } from "./utility.js";

// search any thing from the google
export const searchFromGoogle = (talk_me, lowText) => {
  const wordsArray = [
    "hey zini",
    "hello zini",
    "hey xini",
    "hello xini",
    "hey genie",
    "hello genie",
    "hey genies",
    "hello genies",
    "zini",
    "xini",
    "genie",
    "genies",
    "hey",
    "hello",
    "jini",
    "siri",
    "jeni",
    "hi",
    "ok",
    'open the the',
    'open the',
    'open',
    'can you please open',
    'can you please open the',
    'can you open',
    'can you open the',
    'let\'s open',
    'let us open',
  ];
  let newSearch = lowText;
  wordsArray.forEach((w) => {
    if (lowText.includes(w) || w.includes(lowText)) {
      newSearch = newSearch.replaceAll(w, "");
    }
  });
  talk_me(`Here’s what I found for you: ${newSearch}.`);
  window.open(`https://www.google.com/search?q=${newSearch}`);
};

// play or find video from youtube
export const playVideoFromYoutube = (talk_me, lowText) => {
  let palyW = lowText.split(" ");
  let playIndx = palyW.indexOf("play") || palyW.indexOf("hear");
  let searchName = palyW.splice(playIndx + 1, palyW.length - 1).join(" ");
  let newSearch = searchName;

  ["zini", "the", "ginies", "jini"].forEach((element) => {
    if (searchName.includes(element)) {
      newSearch = searchName.replaceAll(element, "");
    }
  });

  talk_me(`Here’s what I found for you: ${newSearch}.`);
  window.open(`https://www.youtube.com/results?search_query=${newSearch}`);
};

// to know the time and date
export const toKnowTimeAndDate = (talk_me, lowText) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const timeAndDate = new Date();
  let time = `${timeAndDate.getHours().toLocaleString()} hour,${timeAndDate
    .getMinutes()
    .toLocaleString()} minits,${timeAndDate
    .getSeconds()
    .toLocaleString()} seconds ${timeAndDate.getHours() < 12 ? 'AM' : "PM"}`;

  let date = timeAndDate.getDate().toLocaleString();
  let day = timeAndDate.getDay();
  let dateTime = new Date().toLocaleString();

  if (lowText.includes("time") && !lowText.includes("date")) {
    talk_me(`now time is ${time}`);
  } else if (lowText.includes("date") && !lowText.includes("time")) {
    talk_me(`now date is ${date}`);
  } else if (lowText.includes("day")) {
    talk_me(`the day is ${daysOfWeek[day]}`);
  } else if (lowText.includes("time and date")) {
    talk_me(`now time and date is ${dateTime}`);
  }
};

// to know the wather tamparacher
export const toKnowWeather = async (talk_me, lowText) => {
  let country;
  let code;

  for (let i = 0; i < data.allCountry.length; i++) {
    const cntry = data.allCountry[i];
    const cntryName = cntry.country.toLowerCase();
    if (lowText.includes(cntryName)) {
      country = cntryName;
      code = cntry.code;
      break;
    }
  }


  if (country) {
    const data = await getWeather(country, code);
    if (lowText.includes("temperature") && !lowText.includes("weather")) {
      talk_me(`the ${country} temperature is ${data.degC} °C`);

    } else if ( lowText.includes("weather") && !lowText.includes("temperature")) {
      talk_me(`the ${country} weather is ${data.weather}`);

    } else {
      talk_me( `the ${country} weather is ${data.weather} and temperature is ${data.degC} °C`);
    }

  } else {
    const time = new Date();
    let timeArr = time.toString().split(' ')
    let country = timeArr[6].replace('(', '')

    const data = await getWeather('bangladesh', "BD")
    talk_me(`the ${country} weather is ${data.weather} and temperature is ${data.degC} °C` );
  }
};

//for  get weather function :
async function getWeather(country, code) {
  let keyCode = "f2a0bdfd217977c1a781d9ce17749d60";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country},${code}&appid=${keyCode}`
  );
  const result = await res.json();
  // console.log(result);
  let weather = result.weather[0]?.description || result.weather[0]?.main;
  // console.log(weather)
  let degC = (result.main.temp_min - 273.15).toFixed(2);
  return { weather, degC };
}
