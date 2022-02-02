let slr1 = document.getElementById("slider1");
let slr2 = document.getElementById("slider2");
let slr3 = document.getElementById("slider3");
let slr1Radio = document.getElementById("slider1Radio");
let slr2Radio = document.getElementById("slider2Radio");

let slr3Clicked = false;
slr3.onmousedown = function(){
    slr3Clicked = true;
}
slr3.onmouseup = function(){
    slr3Clicked = false;
}
function updateSLD1(){
    if(!slr3Clicked){
        const value = Number(slr2.value) - Number(slr1.value);
        slr3.value = value;
    }
    window.requestAnimationFrame(updateSLD1);
}

function updateSLD3(){
    if(slr1Radio.checked){
        const value = Number(slr2.value) - Number(slr3.value);
        slr1.value = value;
    }
    if(slr2Radio.checked){
        const value = Number(slr1.value) + Number(slr3.value);
        slr2.value = value;
    }
    window.requestAnimationFrame(updateSLD3);
}
updateSLD1();
updateSLD3();