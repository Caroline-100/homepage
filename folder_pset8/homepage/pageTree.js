document.addEventListener('DOMContentLoaded', (event) => {
    console.log(" document fully loaded;");

    const button = document.querySelector("button");
    const title = document.querySelector(".nameplace");
    let button_change_value = document.querySelector("button");
    const message = document.querySelector("p");
    const userName =
        function userNames(event) {
            let myn = prompt(" Name :");
            localStorage.setItem('nom', myn);

            if (!localStorage.getItem('nom')) {
                userNames();
                console.log("this is i  f");
            } else {
                let storedName = localStorage.getItem('nom');
                console.log("this is else");
                message.textContent = 'Help by mozilla : ' + storedName;
            }

        }
    let buttonToBeValidate = function () {
        userNames();
    };

    button_change_value.addEventListener("click", userName);
    title.addEventListener("click", userName);
    button.querySelector("click", buttonToBeValidate);

});

