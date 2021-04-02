
document.addEventListener('DOMContentLoaded', (event) => {
    console.log(" document fully loaded;");

    let count = 0;
    const cliTtic = document.getElementsByClassName("tic");
    for (let item = 0; item < cliTtic.length; item++) {
        console.log(item);
        cliTtic[item].addEventListener("click", function (event) {
            this.style.backgroundColor = "gold";
            console.log(event);
            count += 1;
            if (count % 2 === 0) {
                this.style.backgroundColor = "white";
            }
        })
    }

    const cliTtac = document.getElementsByClassName("tac");
    for (let item = 0; item < cliTtac.length; item++) {
        console.log(item);
        cliTtac[item].addEventListener("click", function (event) {
            console.log(event);
            this.style.backgroundColor = "olive";
            count += 1;
            if (count % 2 === 0) {
                this.style.backgroundColor = "white";
            }
        })
    }

    const search = document.querySelector("input");
    function press(event) {
        document.querySelector(".header__nav__button_search");
        let target = event.target.value;
        console.log(target);
        document.querySelector(".textinput").innerHTML = target;
    }

    const button = document.querySelector(".header__nav__button_search");
    function alerte() {
        alert("button click");
    }
    button.addEventListener("click", alerte);
    search.addEventListener("input", press);

    const text = document.querySelector(".text_open_js");

    text.addEventListener("click", (event) => {
        console.log(event);
        text.style.textOverflow = "initial";
        text.style.overflow = "visible";
        text.style.whiteSpace = "normal";
        text.style.display = "block";
        text.style.height = "100%";
        text.style.borderStyle = "inset";
        text.style.padding = "10%";
        text.textAlign = "justify";
        text.style.textIndent = "10%";

    });

    const texttitle = document.querySelector(".block_div__block_under_div__p-strong");

    let textShow = function showtext(event) {
        console.log(event);
        let t = document.querySelector(".block_div__block_under_div__p");
        t.style.overflow = "visible";
        t.style.textOverflow = "initial";
        t.style.whiteSpace = "normal";
        t.style.display = "block";
        t.textAlign = "justify";
        t.style.height = "100%";
        t.style.width = "100%";
        t.style.margin = "2%";



    }
    texttitle.addEventListener("click", textShow);

    const testTextBox = document.querySelector("text");
    const box = document.querySelector("rect");
    const changColor = function changColor(event) {
        box.style.stroke = "red";

    }
    testTextBox.addEventListener("click", changColor);
    box.addEventListener("click", changColor);
});
