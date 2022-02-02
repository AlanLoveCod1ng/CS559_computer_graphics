let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let slider = document.getElementById("slider");
let continued = false;
startButton.onclick = function(){
    continued = true;
}
stopButton.onclick = function(){
    continued = false;
}
function advanceSlider(){
    if(continued){
        let current = (Number(slider.value)+1)%100;
        slider.value = current.toString();
    }
    window.requestAnimationFrame(advanceSlider);
}
advanceSlider();