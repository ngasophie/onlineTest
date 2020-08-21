loadQues = {};
loadQues.math = [];
loadQues.english = [];
loadQues.database = [];
loadQues.program = [];
loadQues.physics = [];
loadQues.collect = async function () {
    let questions = await firebase.firestore().collection('questions').get();
    for (let question of questions.docs) {
        let sb = question.data().subject;
        if (sb == 'English') {
            loadQues.english.push(question);
        }
        else if (sb == 'Math') {
            loadQues.math.push(question)
        }
        else if (sb == 'Database') {
            loadQues.database.push(question)
        }
        else if (sb == 'Program') {
            loadQues.program.push(question)
        }
        else if (sb == 'Physics') {
            loadQues.physics.push(question);
        }
    }
}
loadQues.resetArr = function () {
    loadQues.math = [];
    loadQues.english = [];
    loadQues.database = [];
    loadQues.program = [];
    loadQues.physics = [];

}
loadQues.newLoad = async function(){
    loadQues.resetArr();
    await loadQues.collect();
}

loadQues.load = function (name) {
    // code của m ấy, nó rắc rối đéo khác gì m cả :((
    switch (name) {

        case 'English':
            console.log(loadQues.english);
            var html = '';
            document.getElementsByClassName('list')[0].innerHTML = '';
            var count = 1;
            for (let q of loadQues.english) {
                html += `
                    <div class="due-content" id="due-content">
                    <div class="due-item">
                        <div class="due01">Question ${count}: ${q.data().content}</div><br>
                    </div>
                    <i class="far fa-trash-alt"id="deleteQues-${q.id}" onclick="createTest.deleteQuesInBank('${q.id}')" style="float: right;margin-left:10px"></i>
                    <i class="far fa-edit edit" style="float:right" onclick= "createTest.editQues('${q.id}')"></i>
                    <div class="view-question">
                        <span class="answer-A">A</span>
                        ${q.data().choices[0]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">B</span> 
                        ${q.data().choices[1]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">C</span>
                        ${q.data().choices[2]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">D</span>
                        ${q.data().choices[3]}
                    </div>
                </div>
                    `;
                count++;
            }

            document.getElementsByClassName('overdue')[0].innerHTML = 'Questions at English';
            html += `
                <div class="add-block">
                <div class="back-list">
                    Back
                </div>
            `;
            console.log(html);

            document.getElementsByClassName('list')[0].innerHTML = html;
            break;

        case 'Math':
            var html = '';
            var count = 1;
            document.getElementsByClassName('list')[0].innerHTML = '';
            // lỗi !!!!!!
            console.log(loadQues.math)
            for (let q of loadQues.math) {
                console.log(q);
                html += `
                    <div class="due-content" id="due-content">
                    <div class="due-item">
                        <div class="due01">Question ${count}: ${q.data().content}</div><br>
                    </div>
                    <i class="far fa-trash-alt"id="deleteQues-${q.id}" onclick="createTest.deleteQuesInBank('${q.id}')" style="float: right;margin-left:10px"></i>
                    <i class="far fa-edit edit" style="float:right" onclick= "createTest.editQues('${q.id}')"></i>
                    <div class="view-question">
                        <span class="answer-A">A</span>
                        ${q.data().choices[0]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">B</span> 
                        ${q.data().choices[1]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">C</span>
                        ${q.data().choices[2]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">A</span>
                        ${q.data().choices[3]}
                    </div>
                </div>
                    `;
                count++;
            }
            document.getElementsByClassName('overdue')[0].innerHTML = 'Questions at Math';
            html += `
            <div class="add-block">
            <div class="back-list">
                Back
            </div>
            
        `;
            document.getElementsByClassName('list')[0].innerHTML = html;
           
            break;
        case 'Physics':
            document.getElementsByClassName('list')[0].innerHTML = '';

            var html = '';
            var count = 1;
            for (let q of loadQues.physics) {
                html += `
                    <div class="due-content" id="due-content">
                    <div class="due-item">
                        <div class="due01">Question ${count}: ${q.data().content}</div><br>
                    </div>
                    <i class="far fa-trash-alt"id="deleteQues-${q.id}" onclick="createTest.deleteQuesInBank('${q.id}')" style="float: right;margin-left:10px"></i>
                    <i class="far fa-edit edit" style="float:right" onclick= "createTest.editQues('${q.id}')"></i>
                    <div class="view-question">
                        <span class="answer-A">A</span>
                        ${q.data().choices[0]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">B</span> 
                        ${q.data().choices[1]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">C</span>
                        ${q.data().choices[2]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">A</span>
                        ${q.data().choices[3]}
                    </div>
                </div>
                    `;
                count++;
            }
            document.getElementsByClassName('overdue')[0].innerHTML = 'Questions at Physics';
            html += `
            <div class="add-block">
            <div class="back-list">
                Back
            </div>
          
        `;
            document.getElementsByClassName('list')[0].innerHTML = html;
            break;
        case 'Program':
            document.getElementsByClassName('list')[0].innerHTML = '';

            var html = '';
            var count = 1;
            for (let q of loadQues.program) {
                html += `
                    <div class="due-content" id="due-content">
                    <div class="due-item">
                        <div class="due01">Question ${count}: ${q.data().content}</div><br>
                    </div>
                    <i class="far fa-trash-alt"id="deleteQues-${q.id}" onclick="createTest.deleteQuesInBank('${q.id}')" style="float: right;margin-left:10px"></i>
                    <i class="far fa-edit edit" style="float:right" onclick= "createTest.editQues('${q.id}')"></i>
                    <div class="view-question">
                        <span class="answer-A">A</span>
                        ${q.data().choices[0]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">B</span> 
                        ${q.data().choices[1]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">C</span>
                        ${q.data().choices[2]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">A</span>
                        ${q.data().choices[3]}
                    </div>
                </div>
                    `;
                count++;
            }
            document.getElementsByClassName('overdue')[0].innerHTML = 'Questions at Program';
            html += `
            <div class="add-block">
            <div class="back-list">
                Back
            </div>
           
        `;
            document.getElementsByClassName('list')[0].innerHTML = html;
            break;
        case 'Database':
            document.getElementsByClassName('list')[0].innerHTML = '';

            var html = '';
            var count = 1;
            for (let q of loadQues.database) {
                html += `
                    <div class="due-content" id="due-content">
                    <div class="due-item">
                        <div class="due01">Question ${count}: ${q.data().content}</div><br>
                    </div>
                    <i class="far fa-trash-alt"id="deleteQues-${q.id}" onclick="createTest.deleteQuesInBank('${q.id}')" style="float: right;margin-left:10px"></i>
                    <i class="far fa-edit edit" style="float:right" onclick= "createTest.editQues('${q.id}')"></i>
                    <div class="view-question">
                        <span class="answer-A">A</span>
                        ${q.data().choices[0]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">B</span> 
                        ${q.data().choices[1]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">C</span>
                        ${q.data().choices[2]}
                    </div>
                    <div class="view-question">
                        <span class="answer-A">A</span>
                        ${q.data().choices[3]}
                    </div>
                </div>
                    `;
                count++;
            }
            document.getElementsByClassName('overdue')[0].innerHTML = 'Questions at Database';
            html += `
            <div class="add-block">
            <div class="back-list">
                Back
            </div>
            
        `;
            document.getElementsByClassName('list')[0].innerHTML = html;
            break;
    }
    document.getElementsByClassName('back-list')[0].addEventListener('click', function () {
        createTest.action();
    })
}