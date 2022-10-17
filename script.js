function changeHeroText(){
    document.querySelector("#hero > h1").innerHTML = "Welcome to<br />Our Site";
}

const changeButtonText = () => {
    document.querySelector("button").innerHTML = "Hovered Text";
}

const changeButtonBack = () => {
    document.querySelector("button").innerHTML = "Click to Submit";
}

function addLoginSuccess(){
    var s = document.createElement("section");
    var t = document.createTextNode("Login Successful!");

    s.appendChild(t);
    s.classList.add("success");
    document.querySelector("form").classList.add("hide");

    document.querySelector("#login").appendChild(s);
}



document.querySelector("button").addEventListener("click", changeHeroText);
document.querySelector("button").addEventListener("click", addLoginSuccess);

document.querySelector("button").addEventListener("mouseenter", changeButtonText);
document.querySelector("button").addEventListener("mouseleave", changeButtonBack);