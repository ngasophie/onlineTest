function signInHandler(){
    let formSignUp = document.getElementById('form-signIn');
    formSignUp.onsubmit = function(event){
        event.preventDefault();
        let email = formSignUp.email.value;
        let password = formSignUp.password.value;
        let passwordConfirm = formSignUp.passwordConfir.value;
        let isPassed = false; 
    }
}
function validate(){
    
}