const colorPicker = document.getElementById('color-picker')
const colorSchemeBtn = document.getElementById('color-scheme-btn')
const colorMode = document.getElementById('color-mode')
const imgContainer = document.getElementById("img-container")
let colorsArray = []


function getHex() {
    for (let i = 0; i < colorsArray.length; i++) {
        hexArray.push(colorsArray[i].hex.value)
    }
}

function renderScheme() {
    let html = ""
    for (let hex of hexArray){
        html += `
         <div class="color-hex-wrapper">
            <div class="color-container" style="background-color:${hex}">
         </div>
            <h1>${hex}</h1>
         </div>`
        }
        imgContainer.innerHTML = html
}

colorSchemeBtn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&format=json&mode=${colorMode.value}&count=6`)
        .then(res => res.json())
        .then(data => {
            colorsArray = data.colors
            console.log(colorsArray)
            hexArray = []
            getHex()
            renderScheme()
        })
            
})