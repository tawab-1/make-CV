//get started button event code
let getStartedButton = document.getElementById("get-started-btn");
getStartedButton.addEventListener('click', () => {
    document.getElementById("get-started-popup").style.display = "flex";
    document.getElementById("card-section").style.zIndex = -1;
});

//Not now cross icon event code
let getStartedCross = document.getElementById("get-started-cross");
getStartedCross.addEventListener('click', () => {
    document.getElementById("get-started-popup").style.display = "none";
    document.getElementById("card-section").style.zIndex = 1;
});


//Now now opoup button event code
let notNowBtn = document.getElementById("not-now-popup");
notNowBtn.addEventListener('click', () => {
    document.getElementById("get-started-popup").style.display = "none";
    document.getElementById("card-section").style.zIndex = 1;
});

//Check box to show password
let passwordCheckbox = document.getElementById("passwordCheckbox");
let showPassword1 = document.getElementById("user_password1");
let showPassword2 = document.getElementById("user_password2");
passwordCheckbox.addEventListener('click', () => {
    if (showPassword1.type === "password" && showPassword2.type === "password") {
        showPassword1.type = "text";
        showPassword2.type = "text";
    } else {
        showPassword1.type = "password";
        showPassword2.type = "password";
    }
})
// function myFunction() {
//     var x = document.getElementById("myInput");
//     if (x.type === "password") {
//         x.type = "text";
//     } else {
//         x.type = "password";
//     }
// }
