let slider = document.getElementById("slider");
let lastTime;
slider.setAttribute("step",".001");
let value;
function advanceSlider(timestamp){
    let currentValue = 0;
    if(lastTime===undefined){
        value = 0;
    }else{
        let delta = timestamp - lastTime;
        value = (value +delta/10)%200;
        currentValue = Math.abs(value-100);
    }
    slider.value = currentValue.toString();
    window.requestAnimationFrame(advanceSlider);
    lastTime = timestamp;
}
window.requestAnimationFrame(advanceSlider);