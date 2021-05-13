const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    //New added: response
    response: document.querySelector('#response'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
    resetForm(){
        this.response.answer.value = '';
        this.response.answer.focus();
    },
    // view.setup(), which will be used to set up the view when the game starts
    //This will make elements visible or hidden
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        this.resetForm();
    },
    //At the end of the game makes visible the start button again and hide the unnecessary
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};

const game = {
    start(quiz){
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
    },
    //This checks the length property of the this.questions array, to see if there are any questions left to ask.
    //the pop() method is used to remove the last element of the array and assign it to this.question
    ask(name){
        if(this.questions.length > 0) {
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
        }else {
            this.gameOver();
        }
    },
    // We grab the answer that was submitted by querying view.response.answer.value, which is the value stored in the <input> field
    check(event){
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score,this.score);
        }else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        view.resetForm();
        //We need to call game.ask() function to display the next question after the current is submitted and checked
        this.ask();
        },
        //At the end of the game teardow is called to show previously hidden elements
        gameOver(){
            view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
            view.teardown();
        }
}

view.start.addEventListener('click', () => game.start(quiz), false);
//This will call the game.check() method to check if the answer submitted by the player is correct
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);
