createTest = {};
createTest.action = async function () {
    let list = document.getElementsByClassName('list')[0];
    list.innerHTML = ''
    let listTest = await firebase.firestore().collection('tests').get();
    let html = '';
    for (let test of listTest.docs) {
        html += `
        <i class="far fa-trash-alt"id="deleteTest-${test.id}" onclick="createTest.delete('${test.id}')" style="float: right;"></i>
        <div id="due-content-${test.id}" class = "due-content" onclick="createTest.viewTest('${test.id}')">
            <div class="due-item">
                
                <div class="due01">${test.data().title}</div><br>
            </div>
            <div class="date">${test.data().description}</div>
            <div class="date">${test.data().subject}</div>
        </div>

    `;
        // list.innerHTML += html;
    }
    html += `
    <div class="add-block">
        <div class="back">
            Back
        </div>
        <div class="add-due">
            Add Test
        </div>
        <div class="add-due">
            Add question
        </div>
        <div class="add-due">
            View all question
        </div>
        <div class="trans-choice">
           
            <div class="choice">
                <div class="add-due view-math">
                    Math
                </div>
                <div class="add-due view-en">
                    English
                </div>
                <div class="add-due view-db">
                    Database
                </div>
                <div class="add-due view-pro">
                    Program
                </div>
                <div class="add-due view-phy">
                    Physics
                </div>
             
            </div>
        </div>
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

    `
        + `
    
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
    `
        ;
    list.innerHTML = html
    createTest.addTest();
    createTest.addQuestion();
    createTest.viewQuesstion();
}
createTest.addTest = function () {
    console.log('again');
    let addBtn = document.getElementsByClassName('add-due')[0];
    // let addQBtn = document.getElementsByClassName('add-due')[1];
    let add = document.getElementsByClassName('add-block')[0]
    let addBlock = document.getElementsByClassName('add-task-block')[0];
    let formAdd = document.getElementById('add-task');
    let nameError = document.getElementsByClassName('name-error')[0];
    let desError = document.getElementsByClassName('des-error')[0];
    let durationError = document.getElementsByClassName('duration-error')[0];
    let math = document.getElementById('Math');
    let english = document.getElementById('English');
    let database = document.getElementById('Database');
    addBtn.addEventListener('click', function () {
        addBlock.style.display = 'block';
        add.style.display = 'none';
    });
    document.getElementById('close').onclick = function () {
        addBlock.style.display = 'none';
        add.style.display = 'flex';
        nameError.innerHTML = '';
        desError.innerHTML = '';
        durationError.innerHTML = '';
    }
    formAdd.onsubmit = async function (event) {
        event.preventDefault();
        console.log(12)
        let title = formAdd.title.value;
        let description = formAdd.description.value;
        let duration = formAdd.duration.value;
        let isPassed = true;
        let subject;
        if (title == '') {
            nameError.innerHTML = 'Input test title';
            isPassed = false;
        }
        if (description == '') {
            desError.innerHTML = 'Input test brief description';
            isPassed = false;
        }
        if (duration == '') {
            durationError.innerHTML = 'Input duration';
            isPassed = false;
        }
        if (math.checked) {
            subject = "Math";

        }
        else if (english.checked) {
            subject = "English";
        }
        else {
            subject = "Database";
        }
        if (isPassed) {
            nameError.innerHTML = '';
            desError.innerHTML = '';
            durationError.innerHTML = '';
            let currentUserEmail = await firebase.auth().currentUser.email;
            let test = {
                createAt: new Date().toLocaleString(),
                description: description,
                duration: duration,
                owner: currentUserEmail,
                questions: [],
                subject: subject,
                title: title
            }
            await firebase.firestore().collection('tests').add(test);
            console.log('ok')
            addBlock.style.display = 'none';
            formAdd.reset();
        }
    }
}
createTest.viewTest = async function (id) {
    let test = await firebase.firestore().collection('tests').doc(id).get();
    let subject = test.data().subject;
    let html = `
    <div class="due">
    <div class="due-list">
        <i class="far fa-edit edit" style="float:right" onclick= "createTest.editTest('${id}')"></i>
        <h2 class="overdue">${test.data().title}</h2>
        <ul class="list">
    `;
    let count = 1;
    let quesId = test.data().questions;
    for (let question of quesId) {
        let questions = await firebase.firestore().collection('questions').doc(question).get();
        let quesContent = questions.data().content;
        let ans01 = questions.data().choices[0];
        let ans02 = questions.data().choices[1];
        let ans03 = questions.data().choices[2];
        let ans04 = questions.data().choices[3];
        let key = questions.data().key;
        html += `
            <div class="due-content" id="due-content-${question.id}">
            <div class="due-item">
            
            <div class="due01">Question ${count}: ${quesContent}</div><br>
            </div>
            <i class="far fa-trash-alt"id="deleteQues-${test.id}" onclick="createTest.deleteQues('${test.id}','${questions.id}')" style="float: right;"></i>
            <div class="view-question">
                <span class="answer-A">A</span>
                ${ans01}
            </div>
            <div class="view-question">
                <span class="answer-A">B</span> 
                ${ans02}
            </div>
            <div class="view-question">
                <span class="answer-A">C</span>
                ${ans03}
            </div>
            <div class="view-question">
                <span class="answer-A">D</span>
                ${ans04}
            </div>
        </div>
            `;
        count++;
    }
    html += ` </ul>
            </div>
        </div>
        <div class="add-block">
        <div class="back-list">
            Back
        </div>
        <div class="add-due" onclick="addQues.load('${id}','${subject}')">
            Add question
        </div>
       
    </div>
`;
    document.getElementsByClassName('todo-list')[0].innerHTML = html;
    document.getElementsByClassName('back-list')[0].addEventListener('click', function () {
        document.getElementsByClassName('add-block')[0].innerHTML = '';
        document.getElementsByClassName('overdue')[0].innerHTML = "Create Test";
        document.getElementsByClassName('edit')[0].style.display = 'none'
        createTest.action();
    })

}
function listenRealtimeUpdate() {
    let isFirstRun = true;
    firebase.firestore().collection('tests').onSnapshot(function (snapshot) {
        if (isFirstRun) {
            isFirstRun = false;
            return;
        }
        snapshot.docChanges().forEach(function (change) {
            if (change.type == 'added') {
                let subject = change.doc.data().subject;
                createTest.viewTest(change.doc.id);
                addQues.load(change.doc.id, subject);
            }
            if (change.type == 'modified') {
                createTest.viewTest(change.doc.id);
            }
            if (change.type == 'removed') {
                createTest.viewTest(change.doc.id);
            }
        });
    });
    let firstRun = true;
    firebase.firestore().collection('questions').onSnapshot(function (snapshot) {
        if (firstRun) {
            firstRun = false;
            return;
        }
        snapshot.docChanges().forEach(function (change) {
            if (change.type == 'added') {
                let subject = change.doc.data().subject;
                console.log(subject);
                console.log(subject.type)
                loadQues.newLoad().then(() => {
                    loadQues.load('English');
                    console.log('added');
                });

            }
            if (change.type == 'modified') {
                let subject = change.doc.data().subject;
                loadQues.newLoad().then(() => {
                    loadQues.load('English');
                    console.log('added');
                });

            }
            if (change.type == 'removed') {
                let subject = change.doc.data().subject;
                loadQues.newLoad().then(() => {
                    loadQues.load(subject);
                    console.log('added');
                });
                
            }
        });
    })
}
createTest.addQuestion = async function () {
    let addQuesBlock = document.getElementsByClassName('add-ques-block')[0];
    let addBlock = document.getElementsByClassName('add-block')[0];
    let quesError = document.getElementsByClassName('ques-error')[0];
    let AError = document.getElementsByClassName('A-error')[0];
    let BError = document.getElementsByClassName('B-error')[0];
    let CError = document.getElementsByClassName('C-error')[0];
    let DError = document.getElementsByClassName('D-error')[0];
    let keyA = document.getElementById('answer-A');
    let keyB = document.getElementById('answer-B');
    let keyC = document.getElementById('answer-C');
    let keyD = document.getElementById('answer-D');
    let atMath = document.getElementById('at-math');
    let atEnglish = document.getElementById('at-english');
    let key;
    let subject;
    let user = await firebase.auth().currentUser.email;
    try {

        document.getElementsByClassName('add-due')[1].addEventListener('click', function () {
            addBlock.style.display = 'none';
            addQuesBlock.style.display = 'block';
        })
    }
    catch (error) {
        console.log(error.message)
    }
    try {
        let formAdd = document.getElementById('add-ques');
        formAdd.onsubmit = async function (event) {
            event.preventDefault();
            let ques = formAdd.ques.value;
            let ansA = formAdd.answerA.value;
            let ansB = formAdd.answerB.value;
            let ansC = formAdd.answerC.value;
            let ansD = formAdd.answerD.value;
            let isPassed = true;
            if (ques == '') {
                quesError.innerHTML = "Input question";
                isPassed = false;
            }
            if (ansA == '') {
                AError.innerHTML = "Input answer A";
                isPassed = false;
            }
            if (ansB == '') {
                BError.innerHTML = "Input answer B";
                isPassed = false;
            }
            if (ansC == '') {
                CError.innerHTML = "Input answer C";
                isPassed = false;
            }
            if (ansD == '') {
                DError.innerHTML = "Input answer D";
                isPassed = false;
            }
            else if (keyA.checked) {
                key = 1;
            }
            else if (keyB.checked) {
                key = 2
            }
            else if (keyC.checked) {
                key = 3
            }
            else {
                key = 4
            }
            if (atMath.checked) {
                subject = "Math"
            }
            else if (atEnglish.checked) {
                subject = "English"
            }
            else {
                subject = "Database"
            }
            if (isPassed) {
                quesError.innerHTML = "";
                AError.innerHTML = "";
                BError.innerHTML = "";
                CError.innerHTML = "";
                DError.innerHTML = "";
                let data = {
                    choices: [
                        ansA,
                        ansB,
                        ansC,
                        ansD
                    ],
                    content: ques,
                    key: key,
                    owner: user,
                    subject: subject
                }
                await firebase.firestore().collection('questions').add(data);
                addQuesBlock.style.display = 'none';
                addBlock.style.display = 'flex';
                formAdd.reset();
            }

        }
    }
    catch (error) {
        console.log(error.message);
    }
    try {
        document.getElementById('cancel').onclick = function () {
            addQuesBlock.style.display = 'none';
            addBlock.style.display = 'flex';
            quesError.innerHTML = '';
            AError.innerHTML = '';
            BError.innerHTML = '';
            CError.innerHTML = '';
            DError.innerHTML = '';
        }
    }
    catch (error) {
        console.log(error.message)
    }

}
createTest.viewQuesstion = function () {
    document.getElementsByClassName('add-due')[2].addEventListener('click', function () {
        document.getElementsByClassName('trans-choice')[0].style.opacity = 1;
        document.getElementsByClassName('add-due')[2].style.opacity = 0;
        document.getElementsByClassName('add-due')[2].style.display = 'none';
    });
    document.getElementsByClassName('view-math')[0].addEventListener('click', function () {
        loadQues.load('Math');
    });
    document.getElementsByClassName('view-en')[0].addEventListener('click', function () {
        loadQues.load('English');
    });
    document.getElementsByClassName('view-pro')[0].addEventListener('click', function () {
        loadQues.load('Program');
    });
    document.getElementsByClassName('view-db')[0].addEventListener('click', function () {
        loadQues.load('Database');
    });
    document.getElementsByClassName('view-phy')[0].addEventListener('click', function () {
        loadQues.load('Physics');
    });
}
// delete test
createTest.delete = async function (id) {
    let modal = document.getElementsByClassName('modal')[0];
    let modalBlock = document.getElementsByClassName('modal-block')[1]
    modal.style.display = 'flex';
    modalBlock.style.display = 'flex';
    let cancel = document.getElementsByClassName('cancel-modal-del')[0];
    cancel.addEventListener('click', function () {
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
    });
    let del = document.getElementsByClassName('del-test')[0];
    del.addEventListener('click', function () {
        createTest.delFirebase('tests', id);
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
        createTest.action();
    })
}
// delete question of test
createTest.deleteQues = function (id, idQues) {
    let modal = document.getElementsByClassName('modal')[0];
    let modalBlock = document.getElementsByClassName('modal-block')[3]
    modal.style.display = 'flex';
    modalBlock.style.display = 'flex';
    let cancel = document.getElementsByClassName('cancel-modal-del')[1];
    cancel.addEventListener('click', function () {
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
    });
    let del = document.getElementsByClassName('del-test')[1];
    del.addEventListener('click', async function () {
        await firebase.firestore().collection('tests').doc(id).update({
            questions: firebase.firestore.FieldValue.arrayRemove(idQues)
        })
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
        // createTest.viewTest(id);
    })
}

// delete data from firebase
createTest.delFirebase = async function (collection, id) {
    await firebase.firestore().collection(collection).doc(id).delete();
}
// edit test
createTest.editTest = async function (idTest) {
    let doc = await firebase.firestore().collection('tests').doc(idTest).get();
    let name = doc.data().title;
    let description = doc.data().description;
    // edit name of test
    let modal = document.getElementsByClassName('modal')[0];
    let modalBlock = document.getElementsByClassName('modal-block')[2];
    document.getElementsByClassName('edit-name')[0].value = name;
    document.getElementsByClassName('edit-des')[0].value = description;
    modal.style.display = 'flex';
    modalBlock.style.display = 'flex';
    let cancel = document.getElementById('btn-cancel-edit');
    cancel.addEventListener('click', function () {
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
    });
    // submit form
    let formEdit = document.getElementById('editTest');
    formEdit.onsubmit = async function (event) {
        event.preventDefault();
        if (formEdit.editName.value.trim() == '' || formEdit.editDes.value.trim() == '') {
            alert('please enter the text to process');
        }
        else {
            if (formEdit.editName.value != name) {
                // update title
                await firebase.firestore().collection('tests').doc(idTest).update({
                    title: formEdit.editName.value
                })
            }
            if (formEdit.editDes.value != description) {
                await firebase.firestore().collection('tests').doc(idTest).update({
                    description: formEdit.editDes.value
                })
            }
        }
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
        // createTest.viewTest(idTest)
    }
}
// delete question in bank
// note: reference to question in test =>> bug
// handler: delete id of question in test
createTest.deleteQuesInBank = function(id){
    let modal = document.getElementsByClassName('modal')[0];
    let modalBlock = document.getElementsByClassName('modal-block')[3]
    modal.style.display = 'flex';
    modalBlock.style.display = 'flex';
    let cancel = document.getElementsByClassName('cancel-modal-del')[1];
    cancel.addEventListener('click', function () {
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
    });
    let del = document.getElementsByClassName('del-test')[1];
    del.addEventListener('click', async function () {
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
        // delete id of question in test
        // search id in tests
        let query = await firebase.firestore().collection('tests').where('questions','array-contains',id).get();
        // delete
        query.forEach(async function(doc){
            await firebase.firestore().collection('tests').doc(doc.id).update({
                questions: firebase.firestore.FieldValue.arrayRemove(id)
            })
        })
        await firebase.firestore().collection('questions').doc(id).delete();
        // createTest.viewTest(id);
    });
}
// edit questions
createTest.editQuestion = function (idQues) {

}
listenRealtimeUpdate();
// công việc còn dở:
// 1 chút bug đoạn thêm, xóa câu hỏi=> ko load dc lên sau khi xóa, sửa
//  chỉnh sửa câu hỏi, xóa câu hỏi
// tạo bài test ngẫu nhiên
// tạo thêm môn học
// làm bài  test
// chấm điểm
// xem lộ trình
// xếp hạng điểm thi
// chỉnh sửa giao diện
// ....