export function displaySigninPopup (){
let signinModal = document.getElementsByClassName("signinmodal")[0]
let signInButton = document.getElementsByClassName("signinonclick")[0]
let closeSigninButton = document.getElementsByClassName("closesigninbutton")[0]
signInButton.addEventListener('click',() =>{

signinModal.style.display = "block"

if (signinModal.style.display = "block"){
    signInButton.style.display ="none"
}

})

closeSigninButton.addEventListener('click',() =>{

signinModal.style.display = "none"

signInButton.style.display = "block"

})


}