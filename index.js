const hh1 = document.querySelector("h1");
const formButton = document.querySelector("#divbutton");

hh1.innerText = "Change h1"

formButton.addEventListener('click',(e)=>{ 
    e.preventDefault();
    alert(e.target.nodeName);
})