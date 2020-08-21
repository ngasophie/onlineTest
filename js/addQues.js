addQues = {};
// add question into a test
addQues.load = function (idTest,subject) {
    var arrChoose =[];
    let modal = document.getElementsByClassName('modal')[0];
    let modalBlock = document.getElementsByClassName('modal-block')[0];
    let questions = document.getElementsByClassName('question-content')[0];
    let add = document.getElementsByClassName(' add-ques-choose')[0];
    let cancel = document.getElementsByClassName('cancel-modal')[0];
    let countHTML = document.getElementsByClassName('count-question')[0];
    questions.innerHTML = '';
    countHTML.innerHTML = '0';
    modal.style.display = 'flex';
    modalBlock.style.display = 'flex';
    switch (subject) {
        case 'Math':
            var html = '';
            document.getElementsByClassName('list')[0].innerHTML = '';
            var count = 1;
            for (let q of loadQues.math) {
                html += `
                    <i class="fas fa-times unchecked" style="float: right;"></i>
                    <div class="question-choose" id="choose-${q.id}"onclick="addQues.choose('${q.id}')">${q.data().content}
                    </div>
                `;
            }

            questions.innerHTML = html;
            break;
        case 'English':
            var html = '';
            document.getElementsByClassName('list')[0].innerHTML = '';
            var count = 1;
            for (let q of loadQues.english) {
                html += `
                    <i class="fas fa-times unchecked" style="float: right;"></i>
                    <div class="question-choose" id="choose-${q.id}"onclick="addQues.choose('${q.id}')">${q.data().content}
                    </div>
                `;
            }

            questions.innerHTML = html
            break;
        case 'Program':
            var html = '';
            document.getElementsByClassName('list')[0].innerHTML = '';
            var count = 1;
            for (let q of loadQues.program) {
                html += `
                    <i class="fas fa-times unchecked" style="float: right;"></i>
                    <div class="question-choose" id="choose-${q.id}"onclick="addQues.choose('${q.id}')">${q.data().content}
                    </div>
                `;
            }

            questions.innerHTML = html
            break;
        case 'Database':
            var html = '';
            document.getElementsByClassName('list')[0].innerHTML = '';
            var count = 1;
            for (let q of loadQues.database) {
                html += `
                    <i class="fas fa-times unchecked" style="float: right;"></i>
                    <div class="question-choose" id="choose-${q.id}"onclick="addQues.choose('${q.id}')">${q.data().content}
                    </div>
                `;
            }

            questions.innerHTML = html
            break;
        case 'Physics':
            var html = '';
            document.getElementsByClassName('list')[0].innerHTML = '';
            var count = 1;
            for (let q of loadQues.physics) {
                html += `
                    <i class="fas fa-times unchecked" style="float: right;"></i>
                    <div class="question-choose" id="choose-${q.id}"onclick="addQues.choose('${q.id}')">${q.data().content}
                    </div>
                `;
            }

            questions.innerHTML = html
            break;
    }
    add.addEventListener('click', function () {
        for(let id of arrChoose){
            addQues.addToFirebase(idTest,id);
        }
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
        createTest.viewTest(idTest);
    });
    cancel.addEventListener('click', function () {
        modal.style.display = 'none';
        modalBlock.style.display = 'none';
      
    });

    addQues.choose = function(id){
        arrChoose.push(id);
        document.getElementById('choose-'+id).style.backgroundColor = '#26B899';
        document.getElementsByClassName('unchecked')[0].style.display='flex';
        document.getElementsByClassName('count-question')[0].innerHTML = arrChoose.length;
    }
    addQues.addToFirebase = async function(idTest,idQues){
        await firebase.firestore().collection('tests').doc(idTest).update({
            questions: firebase.firestore.FieldValue.arrayUnion(idQues)
        })
    }
}
