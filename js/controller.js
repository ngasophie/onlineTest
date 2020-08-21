
function signInLink(){
    view.showScreen('signIn');
}
function signUpLink(){
    view.showScreen('signUp')
}
window.onload = function () {
    // tất cả các question của các subject được phân loại
    loadQues.collect();
    controller = {};
    view.showScreen('signUp');
    controller.signUp = async function(email,password){
        try{

            await firebase.auth().createUserWithEmailAndPassword(email,password);
            view.setActiveBtn('btn-signUp',false);
            view.showScreen('mainPage');

        }
        catch(error){
            view.setText('signUp-error',error.message);
            view.setActiveBtn('btn-signUp',false);
        }
    }
    controller.signIn = async function(email,password){
        try{

            await firebase.auth().signInWithEmailAndPassword(email,password);
            view.setActiveBtn('btn-signIn',false);
            console.log('xsign In success');
            view.showScreen('mainPage');
        }
        catch(error){
            view.setText('signIn-error',error.message);
            view.setActiveBtn('btn-signIn',false);
        }
    }
    // nhận diện người dùng đang đăng nhập
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            view.showScreen('mainPage');
        } else {
            view.showScreen('signIn');
        }
      });
    // đăng xuất
    controller.signOut =  function(){
        try{
            document.getElementById('logOut').addEventListener('click',async function(){
                await firebase.auth().signOut();
                view.showScreen('signIn');
                console.log('abc');
            })
        }
        catch(error){
            console.log(error.message);
        }
    }
    controller.createTest = function(){
        document.getElementById('create-test').addEventListener('click',function(){
            view.showScreen('createTest');
        })
    }
   
}
