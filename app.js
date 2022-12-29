const pickBtn = document.getElementById("pickBtn");
const displayColor = document.querySelector(".colorSection");


const eyeDropperEnable = async () => {
    try{
        const eyeDropper = new EyeDropper();
        const {sRGBHex} = await eyeDropper.open();
        let colorCodeToUpper = sRGBHex.toUpperCase();
        console.log(sRGBHex);
        navigator.clipboard.writeText(colorCodeToUpper);
        displayColor.innerHTML = `
            <div class="box" style="background: ${sRGBHex}"></div>
            <div class="code"><span>${colorCodeToUpper}</span></div>
        `
        

    }catch(error){
        console.log(error);
    }
}

pickBtn.addEventListener("click", eyeDropperEnable)