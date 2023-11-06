const button = document.getElementById("btn");
const result = document.getElementById("results");
function calculate(){
    const p = Number(document.getElementById("principal-input").value);
    const r = Number(document.getElementById("rate-input").value);
    const t = Number(document.getElementById("time-input").value);
    const duration = document.getElementById("duration").value;
    let intrest = 0;
    let flag = false;
    if (duration === "Select Duration"){
        flag=false;
    } else {
        flag = true;
        if(duration === "year") {
            intrest =(p * r * t)/100;
        } else{
            intrest = (p * r * t)/1200;
        } 
        console.log(`intrest = ${intrest}`)
    }

    if (p <= 0 && r <= 0 &&  t <= 0 && flag){
        let ans = "Please enter values";
        result.innerHTML = `<div><span>${ans}</span></div>`
    } else {
        result.innerHTML = `<div>The Principal is: <span>$${p.toFixed(2)}</span></div>
        <div>The Intrest is: <span>$${intrest.toFixed(2)}</span></div>
        <hr>
        <div>The Total amount is: <span>$${(p + intrest).toFixed(2)}</span></div>`
    }
    console.log(p, r, t, duration, intrest);
}
button.addEventListener("click", calculate);
window.addEventListener("load", calculate)