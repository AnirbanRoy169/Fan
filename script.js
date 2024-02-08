const fan = document.getElementById("fan")
const on = document.getElementById("on");
const off = document.getElementById("off");
const oneSpeed = document.getElementById("oneSpeed");
const twoSpeed = document.getElementById("twoSpeed");
const threespeed = document.getElementById("threeSpeed");

on.addEventListener("click", () => {
    fan.style.animationDuration = "1.5s";
    oneSpeed.style.backgroundColor = "#4b9eb9";
    oneSpeed.style.color = "white";
    twoSpeed.style.backgroundColor = "";
    twoSpeed.style.color = "";
    threespeed.style.backgroundColor = "";
    threespeed.style.color = "";
})
off.addEventListener("click", () => {
    fan.style.animationDuration = "0s";
    oneSpeed.style.backgroundColor = "";
    oneSpeed.style.color = "";
    twoSpeed.style.backgroundColor = "";
    twoSpeed.style.color = "";
    threespeed.style.backgroundColor = "";
    threespeed.style.color = "";
})

oneSpeed.addEventListener("click", () => {
    fan.style.animationDuration = "1.5s";
    oneSpeed.style.backgroundColor = "#4b9eb9";
    oneSpeed.style.color = "white";
    twoSpeed.style.backgroundColor = "";
    twoSpeed.style.color = "";
    threespeed.style.backgroundColor = "";
    threespeed.style.color = "";
})
twoSpeed.addEventListener("click", () => {
    fan.style.animationDuration = "1s";
    oneSpeed.style.backgroundColor = "";
    oneSpeed.style.color = "";
    twoSpeed.style.backgroundColor = "#4b9eb9";
    twoSpeed.style.color = "white";
    threespeed.style.backgroundColor = "";
    threespeed.style.color = "";
})
threespeed.addEventListener("click", () => {
    fan.style.animationDuration = "0.5s";
    oneSpeed.style.backgroundColor = "";
    oneSpeed.style.color = "";
    twoSpeed.style.backgroundColor = "";
    twoSpeed.style.color = "";
    threespeed.style.backgroundColor = "#4b9eb9";
    threespeed.style.color = "white";
})