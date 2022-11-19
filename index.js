const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-state");
const btnSubmit = document.getElementById("submit");
const btnRateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn")

btnSubmit.addEventListener("click",()=>{
    thanksContainer.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
})

btnRateAgain.addEventListener("click",()=>{
    thanksContainer.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
})

rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML = rate.innerHTML;
    })
})