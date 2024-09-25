const buttons = document.querySelectorAll('button');
const 컴퓨터선택 = ['가위', '바위', '보'];
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');


const showTheResult = (user, computer, result) => {
    computerChoice.innerText = computer;
    userChoice.innerText = user;
    winner.innerText = result;
}


const game = (user, computer) => {
    let message; 
    if (user === computer) {
        message = '아쉽게 무승부!!!';
    } else {
        switch (user + computer) {
            case '가위보':
            case '바위가위':
            case '보바위':
            message = '당신의 승리';
             break;
            case '가위바위':
            case '바위보':
            case '보가위': 
            message = '컴퓨터의 승리';
            break;
        }
    }
    showTheResult(user, computer, message);
}


const play = (클릭) => {
    const user = 클릭.target.innerText;
    const 랜덤넘버 = Math.floor(Math.random()* 3);
    const computer = 컴퓨터선택[랜덤넘버];
    game(user, computer);
}

buttons.forEach((button) => {
    button.addEventListener('click', play);
})