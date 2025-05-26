const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");

const copyicon = document.getElementById("copyIcon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});


generateBtn.addEventListener("click", () => {
    passBox.value = generatePassword();    //llamamos a la función
});

function generatePassword() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(password);
    }

    return password;    
}   

copyicon.addEventListener("click", () => {
    if (passBox.value != "" || passBox.values.length >=10){
        navigator.clipboard.writeText(passBox.value);
        copyicon.innerText = "check"; // Cambia el icono a check

        setTimeout(() => {
            copyicon.innerHTML = "content_copy"; // Cambia de nuevo el icono a copy
        }, 3000);
    } 
     
});