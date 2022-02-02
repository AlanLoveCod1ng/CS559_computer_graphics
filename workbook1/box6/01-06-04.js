let lastTime;
let red = [255,0,0];
let white = [255,255,255];
let current = [255,255,255];
let text = document.getElementById("ex3-span");
let newRatio;
function makeFade(timestamp){
    if(lastTime===undefined){
        newRatio = 0;
    }else{
        let delta = (timestamp-lastTime)%1000.0;
        delta /=1000;
        newRatio = newRatio + delta;
        newRatio %= 2;
        let currentRatio = Math.abs(newRatio-1);
        let rgb = "#";
        for(let i = 0; i<red.length; i++){
            current[i] = Math.floor(currentRatio*red[i]+(1-currentRatio)*white[i]);
            let subStr=Math.abs(current[i]).toString(16);
            if(subStr.length<2){
                subStr = "0"+subStr;
            }
            rgb+=subStr;
        }
        text.style.backgroundColor = rgb;
    }
    lastTime = timestamp;
    window.requestAnimationFrame(makeFade);
}
window.requestAnimationFrame(makeFade);