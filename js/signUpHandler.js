// // function signUpHandler(){
//     let formSignUp = document.getElementById('form-signUp');
//     formSignUp.onsubmit = function(event){
//         event.preventDefault();
//         let email = formSignUp.email.value.trim();
//         let password = formSignUp.password.value.trim();
//         let passwordConfirm = formSignUp.passwordConfir.value.trim();
//         let isPassed = true; 
//         if(email == ''){
//             setText('email-error','Input email');
//             isPassed = false;
//         }
//         if(password == ''){
//             setText('password-error','Input password');
//             isPassed = false;

//         }
//         if(passwordConfirm == ''){
//             setText('passwordConfir-error',"Input password confirmation");
//             isPassed = false;

//         }
//         if(password!= passwordConfirm){
//             setText('passwordConfir-error',"Password confirmation is not match");
//             isPassed = false;

//         }
//         if(isPassed){
//             setText('email-error','');
//             setText('password-error','');
//             setText('passwordConfir-error',"");
//             setText('passwordConfir-error',"");

//         }
//     }
// // }
// function setText(tagId, text){
//     document.getElementById(tagId).innerHTML = text;
// }
