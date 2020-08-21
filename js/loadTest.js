// window.onload = function(){
loadTest = {};
loadTest.onload = async function (id) {
    view.showScreen('test');
    countdown.onload();
    let d = await firebase.firestore().collection('tests').doc(id).get();
    let quesId = d.data().questions;
    let title = d.data().title;
    document.getElementsByClassName('test-name')[0].innerHTML = title;
    let count = 1;
    for (let question of quesId) {
        let questions = await firebase.firestore().collection('questions').doc(question).get();
        let quesContent = questions.data().content;
        let ans01 = questions.data().choices[0];
        let ans02 = questions.data().choices[1];
        let ans03 = questions.data().choices[2];
        let ans04 = questions.data().choices[3];
        let key = questions.data().key;
        let html = `
            <div class="numOfContent">Question ${count}</div>
            <div class="ques-content">

                <div id="ques-content">
                    <div class="question-block">
                        <span class="question">${quesContent}</span>
                    </div>
                </div>
            </div>
            <div class="answer-content">
                <div class="answer01">
                    <div class="A">A</div>
                    <div class="A-content">
                        <span>${ans01}</span>
                    </div>
                </div>
                <div class="answer01">
                    <div class="A">B</div>
                    <div class="A-content">
                        <span>${ans02}</span>
                    </div>
                </div>
                <div class="answer01">
                    <div class="A">C</div>
                    <div class="A-content">
                        <span>${ans03}</span>
                    </div>
                </div>
                <div class="answer01">
                    <div class="A">D</div>
                    <div class="A-content">
                        <span>${ans04}</span>
                    </div>
                </div>
            </div>
            `;
        document.getElementsByClassName('ques-container')[0].innerHTML += html;

        console.log(quesContent);
        console.log(ans01);
        console.log(ans02);
        console.log(ans03)
        console.log(ans04)
        console.log(key);
        count++;
    }
}
loadTest.listTest = async function () {
    let list = await firebase.firestore().collection('tests').get();
    for (let t of list.docs) {
        let id = t.id;
        let subject = t.data().subject;
        let title = t.data().title;
        let duration = t.data().duration;
        let createdAt = t.data().createdAt;
        let description = t.data().description;
        console.log(description);
        let amountOfQuestion = t.data().questions.length;
        console.log(amountOfQuestion);
        let html = `
        <div class="exam-01">
        <div class="subject">${subject}</div>
        <div class="des-block">
            <div class="description">
                <div class="des-txt">${description}
                </div>
            </div>
            <div class="detail-block">

                <div class="details">
                    <div class="time">
                        <i class="far fa-clock" style="margin-right:10px"></i>${duration}m
                    </div>
                    <div class="amount">
                        <i class="far fa-question-circle" style="margin-right:10px"></i>${amountOfQuestion} ques
                    </div>
                    <div class="creatAt">
                        <i class="far fa-calendar-alt"style="margin-right:10px"></i>${createdAt}
                    </div>
                    <div class="join">
                        <button class="btn-join" onclick = "loadTest.onload('${id}')">Join</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        document.getElementById('container-test').innerHTML += html;

    }
}
