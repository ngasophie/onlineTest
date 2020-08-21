trans={};
trans.load = function(){
    try{
        
        let rv = document.getElementsByClassName('list-review')[0];
        let html = document.getElementsByClassName('test-category')[0];
        rv.addEventListener('mouseover',function(){
           
            html.style.height= "50px";
            html.style.opacity =1;
            // rv.classList.add('test-category')
        });
        html.addEventListener('mouseleave',function(){
            html.style.height= "0px";
            html.style.opacity =0;
        });
    }
    catch(error){
        console.log(error.message);
    }
    try{

        let account = document.getElementsByClassName('account')[0];
        let settingBlock = document.getElementsByClassName('setting-block')[0];
        let setting = document.getElementsByClassName('account-setting')[0];
        account.addEventListener('mouseover',function(){
            settingBlock.style.display='block';
            setting.style.height = "250px";
            setting.style.opacity = 1;
        });
        setting.addEventListener('mouseleave',function(){
            settingBlock.style.display='none';
            setting.style.height = "0px";
            setting.style.opacity = 0;
        });
        settingBlock.addEventListener('mouseleave',function(){
            settingBlock.style.display='none';
            setting.style.height = "0px";
            setting.style.opacity = 0;
    
        });
    }
    catch(error){
        console.log(error.message);
    }
    try{

        let logo = document.getElementsByClassName('logo')[0];
        logo.addEventListener('click',function(){
            view.showScreen('mainPage')
        });
    }
    catch(error){
        console.log(error.message)
    }
    try{

        document.getElementsByClassName('add-due')[2].addEventListener('mouseover',function(){
            document.getElementsByClassName('choice')[0].opacity = 1;
            document.getElementsByClassName('trans-choice').style.width = '300px';
            console.log(123);
        })
    }
    catch(error){
        console.log(error.message);
    }
}
