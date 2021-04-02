document.addEventListener('DOMContentLoaded', (event) => {
    console.log(" document fully loaded;");
    let f_article = document.querySelector(".first-article");
    let s_article = document.querySelector(".second-article");
    let t_article = document.querySelector(".third-article");
    let clickElementToRed = function changeArticleBackgroundToRed(event) {
        f_article.style.backgroundColor = "red";
        console.log(event);
        console.log("myclick");
    }
    let clickElementToGreen = function changeArticleBackgroundToGreen(event) {

        s_article.style.backgroundColor = "green";
        console.log(event);
        console.log("myclick");
    }
    let clickElementToGold = function changeArticleBackgroundToGold(event) {

        t_article.style.backgroundColor = "gold";
        console.log(event);
        console.log("myclick");
    }
    let call = document.querySelector(".call");

    let clickShowNum = function ShowNum(event) {
        document.querySelector(".num").innerHTML = "0649392144";

    }
    call.addEventListener("click", clickShowNum);
    f_article.addEventListener("click", clickElementToRed);
    s_article.addEventListener("click", clickElementToGreen);
    t_article.addEventListener("click", clickElementToGold);

    const image = document.querySelector("#vegetables");
    image.addEventListener("click", function () {
        let src = image.getAttribute('src');
        if (src === "image/vegetables.jpg") {
            image.setAttribute('src', "image/duck.jpg");
            image.style.width("80%");
        } else {
            image.setAttribute('src', 'image/vegetables.jpg')
        }
    });


});
