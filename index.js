//Dice Roll

function diceRoll() {
    const input = document.getElementById("diceNum").value;
    const result = document.getElementById("result");
    const dice = document.getElementById("diceImg");
    const values = [];
    const images = [];

    for (let i = 1; i <= input; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        //console.log(value);
        values.push(value);
        images.push(`<img src="./dice_images/${value}.png">`);
        //console.log(values);
    }
    result.textContent = `Dice: ${values.join(", ")}`;
    dice.innerHTML = images.join(" ");
}
