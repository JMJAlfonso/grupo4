let slider = document.querySelector(".slider-container");
let sliderIndividual = document.querySelectorAll(".slider-contain");
let counter = 1;
let width = sliderIndividual[0].clientWidth;
let interval = 3000;

window.addEventListener("resize",function(){
    width = sliderIndividual[0].clientWidth;
});

setInterval(function(){
    slides();
},interval);

function slides(){
    slider.style.transform = "translate("+(-width*counter)+"px)";
    slider.style.transition = "transform .8s"
    counter++;
    if(counter == sliderIndividual.length)
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            counter = 1;
    },1500);
}