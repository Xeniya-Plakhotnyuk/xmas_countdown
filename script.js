function christmasCountdown(){
    const xmsDate = new Date("December 25, 2023 00:00");
    const todayDate = new Date();
    const diff = xmsDate-todayDate;
   


const msInSecond = 1000;
const msInMinute = 60*1000;
const msInHour = 60*60*1000;
const msInDay = 24*60*60*1000;

const displayDay = Math.floor(diff/msInDay);
document.querySelector(".days").textContent = displayDay;


const displayHour = Math.floor((diff%msInDay)/msInHour);
document.querySelector(".hours").textContent = displayHour;


const displayMinute = Math.floor ((diff%msInHour)/msInMinute);
document.querySelector(".minutes").textContent = displayMinute;


const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
document.querySelector(".seconds").textContent = displaySecond;

if (diff<=0){
document.querySelector(".days").textContent = 0;
document.querySelector(".hours").textContent = 0;
document.querySelector(".minutes").textContent = 0;
document.querySelector(".seconds").textContent = 0;
clearInterval(stopCount);
merryXmas();
}


}
const stopCount = setInterval(christmasCountdown,1000);
christmasCountdown();

function merryXmas(){
   const heading= document.querySelector("h1");
   heading.textContent = "MERRY CHRISTMAS! HO-HO-HO!";
   heading.classList.add("red");
}

const button = document.querySelector("#myButton");
const music = document.querySelector("#myAudio");


button.addEventListener("click", function() {

    if(music.paused){
        music.play();
        button.classList.toggle("pause");
    }
    else{
        music.pause();
        button.classList.toggle("pause");
    }
})



particlesJS('snowing',
  
  {
    "particles": {
      "number": {
        "value": 1000,
        "density": {
          "enable": true,
          "value_area": 2000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "snowflake.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);