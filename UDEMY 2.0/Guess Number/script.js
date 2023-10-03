'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 
// 'Correct Number!';

// document.querySelector('.number') = 13;
// document.querySelector('.score') = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // Ketika tidak ada input
        if (!guess) {
            document.querySelector('.message').textContent = ' No Number!';

            // Ketika player menang
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number!';
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            // Ketika tebakan terlalu tinggi
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = ' Terlalu Tinggi!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = ' Kamu kalah!';
                document.querySelector('.score').textContent = 0;
        }
         // Ketika tebakan terlalu rendah
        } else if (guess < secretNumber) {

            if (score > 1) {
                document.querySelector('.message').textContent = 'Terlalu Rendah!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'Kamu kalah!';
                document.querySelector('.score').textContent = 0;
            }
        }
    });