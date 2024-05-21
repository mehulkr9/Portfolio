// ---------------------In about section skills,eduction tab change-----------------------

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
console.log("click button",tabname);
for(tablink of tablinks){
tablink.classList.remove("active-links");
}
for(tabcontent of tabcontents){
tabcontent.classList.remove("active-contents");
}
event.currentTarget.classList.add("active-links");
document.getElementById(tabname).classList.add("active-contents");
}

// ---------------------For Navigation bar on right side----------------------


let sidemenus=document.querySelector("#sidemenu");
function closemenu(){
    sidemenus.style.right = "-200px";
}
function openmenu(){
    sidemenus.style.right = "0px";
}


// --------------------------------For Contact us page input receive on sheet---------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyaLhuDfECwRQqS0lhyOBEE6mczXabDs8FwNWOBAgZkwIh4cmHVKHPj4PwCOqBh-Pw8/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.querySelector("#submit-message")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent succesfully";
        setTimeout(function(){
            msg.innerHTML="";
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})