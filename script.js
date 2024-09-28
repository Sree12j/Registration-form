let titles=document.getElementById("title");
let signUp=document.getElementById("Signup-btn");
let signIn=document.getElementById("Signin-btn");
let nameField=document.getElementById("namefield");
signIn.onclick=function(){
    nameField.style.maxHeight="0";/*it will hidden*/
    titles.innerHTML="Sign In";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}
signUp.onclick=function(){
    nameField.style.maxHeight="65px";/*it will hidden*/
    titles.innerHTML="Sign Up";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}