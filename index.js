let firstName=document.getElementById("first-name");
let lastName=document.getElementById("last-name");
let email=document.getElementById("email");
let message=document.getElementById("message");
let submitBtn=document.getElementById("submit-btn");
let errorMsg=document.getElementById("error-msg");
let menuToggle=document.querySelector(".menu-toggle");
let mobileNavItems=document.querySelector(".mobile-nav-items");
let messageBox=document.getElementById("message-box");

menuToggle.addEventListener("click",()=>{
    mobileNavItems.classList.toggle("mobile-nav-items");
});
submitBtn.addEventListener("click",submitForm);

alert("Hello, Welcome to my portfolio website!");

function validateForm(){
    if (firstName.value==="" || lastName.value==="" || email.value.trim()==="" || message.value===""){
        errorMsg.style.display="block";
        return false;
    }
    errorMsg.style.display="none";
    return true;
}
function submitForm(event){
    event.preventDefault();
    if (validateForm()) {
        messageBox.style.display="block";
        popupVisible=true;

        firstName.value="";
        lastName.value="";
        email.value="";
        message.value="";
        setTimeout(() => {
        popupVisible = false;
        }, 1000);
    }

}
document.addEventListener("click", function () {
        if (!popupVisible && messageBox) {
        messageBox.style.display = "none";
        }
      });
