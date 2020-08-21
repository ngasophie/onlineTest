// window.onload = function(){
view = {};
view.showScreen = function (screenName) {
    let screen = document.getElementById('screen');
    switch (screenName) {
        case "signIn": screen.innerHTML = `
            <section>
                <div class="signIn">
                    <div class="signIn-content">
                        <form id="form-signIn">
                            <div class="block-title">
                                <div class="title">

                                    <img src="./images/168-1683771_transparent-quiz-clipart-images-quiz-night-hd-png.png"
                                        class="img" alt="img" style="width:100px; height:100px;">
                                </div>

                                <div class="form-title">
                                    Sign In
                                </div>
                            </div>
                            <div class="input">
                                <div class="input-email">
                                    <input type="email" name="email" placeholder="Email" class="email">
                                </div>
                                <div class="message-error" id="email-error"></div>

                                <div class="input-password">
                                    <input type="password" name="password" placeholder="Password" class="password">
                                </div>
                                <div class="message-error" id="password-error"></div>

                                <div class="btn">
                                    <button id="btn-signIn">Sign In</button>
        
                                </div>
                                <div class="error" id="signIn-error"></div>
                                <a id="signUpLink" onclick = "signUpLink()">You don't have an account</a>
                            </div>
                        </form>
                        <div class="back-ground"></div>
                    </div>
                </div>
            </section>
            `;
            let formSignIn = document.getElementById('form-signIn');
            formSignIn.onsubmit = function (event) {
                event.preventDefault();
                console.log(123)
                let email = formSignIn.email.value.trim();
                let password = formSignIn.password.value.trim();
                let isPassed = true;
                if (email == '') {
                    view.setText('email-error', 'Input email');
                    isPassed = false;
                }
                if (password == '') {
                    view.setText('password-error', 'Input password');
                    isPassed = false;
                }
                if (isPassed) {
                    view.setActiveBtn('btn-signIn', true);
                    view.setText('email-error', '');
                    view.setText('password-error', '');
                    controller.signIn(email, password);

                }
            }

            break;
        case "signUp": screen.innerHTML = `
            <section>
                <div class="signIn">
                    <div class="signIn-content">
                        <form id="form-signUp" class="form-signUp">
                            <div class="block-title">
                                <div class="title">

                                    <img src="./images/168-1683771_transparent-quiz-clipart-images-quiz-night-hd-png.png"
                                        class="img" alt="img" style="width:100px; height:100px">
                                </div>

                                <div class="form-title">
                                    Sign Up
                                </div>
                            </div>
                            <div class="input">
                                <div class="input-email">
                                    <input type="email" name="email" placeholder="Email" class="email">
                                </div>
                                <div class="message-error" id="email-error"></div>
                                <div class="input-password">
                                    <input type="password" name="password" placeholder="Password" class="password">
                                </div>
                                <div class="message-error" id="password-error"></div>

                                <div class="input-password">
                                    <input type="password" name="passwordConfir" placeholder="Password Confirmation" class="password">
                                </div>
                                <div class="message-error" id="passwordConfir-error"></div>
                                <div class="btn">
                                    <button id="btn-signUp">Sign Up</button>
        
                                </div>
                                <div class="error" id="signUp-error"></div>
                                <a id="signInLink" onclick = "signInLink()">You have an account?</a>
                            </div>
                        </form>
                        <div class="back-ground"></div>
                    </div>
                </div>
            </section>
            `;
            let formSignUp = document.getElementById('form-signUp');
            formSignUp.onsubmit = function (event) {
                event.preventDefault();
                console.log(123)
                let email = formSignUp.email.value.trim();
                let password = formSignUp.password.value.trim();
                let passwordConfirm = formSignUp.passwordConfir.value.trim();
                let isPassed = true;
                if (email == '') {
                    view.setText('email-error', 'Input email');
                    isPassed = false;
                }
                if (password == '') {
                    view.setText('password-error', 'Input password');
                    isPassed = false;

                }
                if (passwordConfirm == '') {
                    view.setText('passwordConfir-error', "Input password confirmation");
                    isPassed = false;

                }
                if (password != passwordConfirm) {
                    view.setText('passwordConfir-error', "Password confirmation is not match");
                    isPassed = false;

                }
                if (isPassed) {
                    view.setActiveBtn('btn-signUp', true);
                    view.setText('email-error', '');
                    view.setText('password-error', '');
                    view.setText('passwordConfir-error', "");
                    view.setText('passwordConfir-error', "");
                    console.log('pass')
                    controller.signUp(email, password);
                }
            }
            break;
        case "mainPage": screen.innerHTML = `
            <section>
            <div class="mainPage">
                <div class="menu">
                    <div class="aside-left">
                        <div class="logo">
                            <img class="logo"
                                src="./images/168-1683771_transparent-quiz-clipart-images-quiz-night-hd-png.png" alt="img"
                                style="width:50px;height:50px">
                        </div>
                        <div class="list-review">Exam Library</div>
                    </div>
                    <div class="aside-right">
                        <div class="contact">
                            <i class="fas fa-phone-volume fa-2x" style="margin-right: 5px;"></i>
                            Contact us
                        </div>
                        <div class="search-test">
                            <form id="search">
                                <i class="fas fa-search fa-1x"></i>
                                <input type="text" class="btn-search" placeholder="Search">
                        </div>
                        </form>
    
                        <div class="account">
                            <div class="avt">
                                <img src="./images/avt-girl.jpg" alt="img" style="width:50px; height:50px"class="avt-img">
                            </div>
                            <div class="user-name">Nga Trịnh</div>
                        </div>
                    </div>
                </div>
                <div class="setting-block">

                    <div class="account-setting">
                        <div class="choice01">View Profile</div>
                        <div class="choice01">History test</div>
                        <div class="choice01">Setting</div>
                        <div class="choice01" id="create-test">Create Test</div>
                        <div class="choice01" id="logOut">Log out</div>
                    </div>
                </div>
                <div class="test-category">
                    <div class="category01">Math</div>
                    <div class="category01">English</div>
                    <div class="category01">Database</div>
                    <div class="category01">Physics</div>
                    <div class="category01">Progams</div>

                </div>
                <div class="container" id = 'container-test'>
                   
                </div>
                   
            </div>
        </section>
            `;
            loadTest.listTest();
            trans.load();
            controller.signOut();
            controller.createTest();
            break;
        case "test": screen.innerHTML = `
            <section>
            <div class="test">
                <div class="menu">
                    <div class="aside-left">
                        <div class="logo">
                            <img class="logo"
                                src="./images/168-1683771_transparent-quiz-clipart-images-quiz-night-hd-png.png" alt="img"
                                style="width:50px;height:50px">
                        </div>
                        <div class="list-review">Exam Library</div>
                    </div>
                    <div class="aside-right">
                        <div class="contact">
                            <i class="fas fa-phone-volume fa-2x" style="margin-right: 5px;"></i>
                            Contact us
                        </div>
                        <div class="search-test">
                            <form id="search">
                                <i class="fas fa-search fa-1x"></i>
                                <input type="text" class="btn-search" placeholder="Search">
                        </div>
                        </form>
    
                        <div class="account">
                            <div class="avt">
                                <img src="./images/avt-girl.jpg" alt="img" style="width:50px; height:50px" class="avt-img">
                            </div>
                            <div class="user-name">Nga Trịnh</div>
                        </div>
                    </div>
                </div>
                <div class="setting-block">

                    <div class="account-setting">
                        <div class="choice01">View Profile</div>
                        <div class="choice01">History test</div>
                        <div class="choice01">Setting</div>
                        <div class="choice01"id="create-test">Create Test</div>
                        <div class="choice01"id="logOut">Log out</div>
                    </div>
                </div>
                <div class="test-category">
                    <div class="category01">Math</div>
                    <div class="category01">English</div>
                    <div class="category01">Database</div>
                    <div class="category01">Physics</div>
                    <div class="category01">Progams</div>

                </div>
                <div class="test-name">Test Online 01</div>
                <div class="test-container">
    
                    <div class="ques-container">
                      
          
                    </div>
                    
                    <div class="extra">
                        <div class="timer">
                            <div id="app"></div>
    
                        </div>
                        <div class="list-answer"></div>
                    </div>
                </div>
    
            </div>
        </section>
        `;
            trans.load();
            controller.signOut();
            controller.createTest();
        break;
        case 'createTest':
            screen.innerHTML = `
            <section>
            <div class="mainPage">
                <div class="menu">
                    <div class="aside-left">
                        <div class="logo">
                            <img class="logo"
                                src="./images/168-1683771_transparent-quiz-clipart-images-quiz-night-hd-png.png" alt="img"
                                style="width:50px;height:50px">
                        </div>
                        <div class="list-review">Exam Library</div>
                    </div>
                    <div class="aside-right">
                        <div class="contact">
                            <i class="fas fa-phone-volume fa-2x" style="margin-right: 5px;"></i>
                            Contact us
                        </div>
                        <div class="search-test">
                            <form id="search">
                                <i class="fas fa-search fa-1x"></i>
                                <input type="text" class="btn-search" placeholder="Search">
                        </div>
                        </form>
    
                        <div class="account">
                            <div class="avt">
                                <img src="./images/avt-girl.jpg" alt="img" style="width:50px; height:50px"class="avt-img">
                            </div>
                            <div class="user-name">Nga Trịnh</div>
                        </div>
                    </div>
                </div>
                <div class="setting-block">

                    <div class="account-setting">
                        <div class="choice01">View Profile</div>
                        <div class="choice01">History test</div>
                        <div class="choice01">Setting</div>
                        <div class="choice01" id="create-test">Create Test</div>
                        <div class="choice01" id="logOut">Log out</div>
                    </div>
                </div>
                <div class="test-category">
                    <div class="category01">Math</div>
                    <div class="category01">English</div>
                    <div class="category01">Database</div>
                    <div class="category01">Physics</div>
                    <div class="category01">Progams</div>

                </div>
                <section>
                    <section class="content">
                        <div class="aside-left-content">
                            <div class="today">
                                <i class="far fa-calendar-alt"></i>
                                <h1>Today</h1>
                            </div>
                        </div>
                        <div class="todo-list">
                            <h1 class="list-title">Today</h1>
                            <div class="due">
                                <div class="due-list">
                                    <h2 class="overdue">Create Test</h2>
                                    <ul class="list">
                                       
                                    </ul>
                                </div>
                            </div>
                           
                            <div class="add-task-block">
                                <form class="add-task" id="add-task">
                                    <div class="task-block">
                                        <span class="formAdd-error name-error"></span>
                                        <textarea name="title" id="task" cols="30" rows="10"
                                            placeholder="Input test title"></textarea>
                                            <span class="formAdd-error des-error"></span>
                                            <textarea name="description" id="task" cols="30" rows="10"
                                            placeholder="Input test brief description"></textarea>
                                            <span class="formAdd-error duration-error"></span>
                                            <div>
                                                <input class="form-control" placeholder="Time duration"  type="number" name="duration" style="margin-bottom:10px; padding:5px">
                                            
                                            </div>
                                            <div>
                                                <input type="radio" id="Math" name="gender" value="Math" checked="true">
                                                <label for="male">Math</label><br>
                                                <input type="radio" id="English" name="gender" value="English">
                                                <label for="female">English</label><br>
                                                <input type="radio" id="Database" name="gender" value="Database">
                                                <label for="other">Database</label>
                                            </div>
                                    <button class="add" style="margin-top:10px">Add Test</button>   
                                    </div>
                                </form>
                                <button class="cancel" id="close">Cancel</button>
                            </div>
                            <div class="add-ques-block">
                                <form class="add-ques" id="add-ques">
                                    <div class="task-block">
                                        <span class="formAdd-error ques-error"></span>
                                        <textarea name="ques" id="task" cols="30" rows="10"
                                            placeholder="Input question"></textarea>
                                            <span class="formAdd-error A-error"></span>
                                            <textarea name="answerA" id="task" cols="30" rows="10"
                                            placeholder="Input answer A"></textarea>
                                            <span class="formAdd-error B-error"></span>
                                            <textarea name="answerB" id="task" cols="30" rows="10"
                                            placeholder="Input answer B"></textarea>
                                            <span class="formAdd-error C-error"></span>
                                            <textarea name="answerC" id="task" cols="30" rows="10"
                                            placeholder="Input answer C"></textarea>
                                            <span class="formAdd-error D-error"></span>
                                            <textarea name="answerD" id="task" cols="30" rows="10"
                                            placeholder="Input answer D"></textarea>
                                            <span class="formAdd-error duration-error"></span>
                                          
                                            <div class="radio-answerkey">
                                                <input type="radio" id="answer-A" name="gender" value="Math" checked="true">
                                                <label>A is key</label>
                                                <input type="radio" id="answer-B" name="gender" value="English">
                                                <label >B is key</label>
                                                <input type="radio" id="answer-C" name="gender" value="Database">
                                                <label>C is key</label>
                                                <input type="radio" id="answer-D" name="gender" value="Database">
                                                <label>D is key</label><br>
                                                <br>
                                            </div>
                                            <div>
                                                <input type="radio" id="at-math" name="subject" value="Math" checked="true">
                                                <label>Math</label>
                                                <input type="radio" id="at-english" name="subject" value="English">
                                                <label >English</label>
                                                <input type="radio" id="at-database" name="subject" value="Database">
                                                <label>Database</label>
                                                
                                                
                                            </div>
                                    <button class="add" style="margin-top:10px">Add question</button>   
                                    </div>
                                </form>
                                <button class="cancel" id="cancel">Cancel</button>
                            </div>
    
                        </div>
                    </section>
                </section>
    
            </div>
        </section>
        <section>
        <div class="modal">
        </div>
        <div class="modal-block">
            <div class="modal-content">
                <div class="modal-title">Chooose Questiion</div>
                <div class="count-question" style="margin-bottom: 5px;font-weight: bold; text-align: right; margin-right: 50px;font-size: 20px;">18</div>
                <div class="question-content">
                   
                </div>
                <div class="modal-foot">

                    <button class="btn-primary add-ques-choose" id="addQues">Add</button>
                    <button class="btn-primary cancel-modal">Cancel</button>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="modal-block">
            <div class="delete-content">
                <div class="delete-title">Are you sure you want to remove this test?</div>
                <div class="modal-foot">
                    <div class="modal-btn">
                        <button class="btn-primary add-ques-choose del-test">Yes</button>
                        <button class="btn-primary cancel-modal cancel-modal-del">No</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="modal-block">
            <div class="delete-content edit-content" style="background-color:#FEB033">
                <form id="editTest">
                    <div class="input">
                        <div class="input-email">
                            <input type="text" name="editName" value="" class="email edit-name">
                        </div>
                        <div class="input-email" style="margin-top:10px">
                            <textarea type="text" name="editDes" value="" class="email edit-des"></textarea>
                        </div>
                        <div style="text-align:center; margin-top:10px">
                            <button id="btn-edit">Save</button>
                        </div>       
                    </div>
                </form>
                <div style="text-align:center;margin-top:10px">
                    <button id="btn-cancel-edit">Cancel</button>
                </div>
            </div>
        </div>
    </section>
    <section>
    <div class="modal-block">
        <div class="delete-content">
            <div class="delete-title">Are you sure you want to remove this?</div>
            <div class="modal-foot">
                <div class="modal-btn">
                    <button class="btn-primary add-ques-choose del-test">Yes</button>
                    <button class="btn-primary cancel-modal cancel-modal-del">No</button>
                </div>
                
            </div>
        </div>
    </div>
</section>
            `;
            
            controller.signOut();
            createTest.action();
            trans.load();
        break;
       
    }
}
//     showScreen('test');
//     loadTest.onload('gFXwepODUeaQtGOoR5n8');
//     countdown.onload();
// }
view.setText = function setText(tagId, text) {
    document.getElementById(tagId).innerHTML = text;
}
view.setActiveBtn = function (tagId, status) {
    document.getElementById(tagId).disabled = status;
}