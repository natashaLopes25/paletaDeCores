const generateButton = document.querySelector("#generate-button");
const colorsDiv = document.querySelector(".colors");

function generateColors(){
    colorsDiv.innerHTML = "" // sempre que usuario clicar, vai resetar e gerar novas cores

    for (let i = 0; i < 5; i++){// for criado para conter quantidade max de cores
        const color = generateRandomColor();
        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = color;
        const colorName = document.createElement("p");
        colorName.textContent = color;
        colorName.style.color = color;
        colorDiv.appendChild(colorName);
        colorsDiv.appendChild(colorDiv);
    }
}

function generateRandomColor(){
    const letters = "0123456789ABCDEF" // definindo quais caracteres a cor pode ter, com base na regra de cores hexadecimais
    let color = "#"//regra hexadecimal

    for( let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]; //gera cores ate 16 caracteres
    }

    return color;
}

generateButton.addEventListener("click", generateColors);