// User name
const userName = prompt('Your name: ');

// Step 1. User Question
const userQuestion = prompt('Your question: ');
console.log(`${userName} asked: ${userQuestion}`);

// Step 2. Generate random number(answer)
const randomNumber = Math.floor(Math.random() * 8);

// Step 3. Eight ball answe
let eightBall = '';
switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
  break;
  case 1:
    eightBall = 'It is decidedly so';
  break;
  case 2:
    eightBall = 'Reply hazy try again';
  break;
  case 3:
    eightBall = 'Cannot predict now';
  break;
  case 4:
    eightBall = 'Do not count on it';
  break;
  case 5:
    eightBall = 'My sources say no';
  break;
  case 6:
    eightBall = 'Outlook not so good';
  break;
  case 7:
    eightBall = 'Signs point to yes';
  break;
}

// Result 
console.log(`Magic eight ball answer: ${eightBall}`);
