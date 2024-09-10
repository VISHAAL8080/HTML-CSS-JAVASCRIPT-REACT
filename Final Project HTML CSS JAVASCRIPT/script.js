

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState == "complete") {
        console.log("complete");
        initApp();
    }
});

const initApp = () =>{
    const button = document.getElementById("#btn");
    const cont = document.getElementsByTagName("div");
    button.addEventListener("click", (event) => {
        const random1 = Math.floor(Math.random() * 255);
        const random2 = Math.floor(Math.random() * 255);
        const random3 = Math.floor(Math.random() * 255);
        const color = `rgb(${random1},${random2},${random3})`;
        cont.style.backgroundColor = color;
    });
}

/*
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document. querySelector(".color") ;
btn. addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document. body. style. backgroundColor =
    colors [randomNumber] ;
    color. textContent = colors [randomNumber] ;
});
function getRandomNumber () {
    return Math. floor(Math. random() * colors.
    length)
}
*/