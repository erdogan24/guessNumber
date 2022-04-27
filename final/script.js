'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent =
    number;

document.querySelector('.check').addEventListener
    ('click', function () {
        const quess = document.querySelector('.quess').
            value;
        console.log(quess, typeof quess);

        if (!quess) {
            document.querySelector('.message').textContent =
                'No number!';


        } else if (quess === SecretNumber) {
            document.querySelector('.message').textContent =
                '✔ Correct Number!';
            document.querySelector('.message').textContent =
                secretNumber;


            document.querySelector('body').style.
                backgroundColor = '#60b347';
            Document.querySelector('.number').style.width =
                '30rem';

        } else if (quess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    '📈 Too high';
                score--;
                document.querySelector('.score').textContent =
                    score;
            } else {
                document.querySelector('.message').textContent =
                    '😢 You lost the game!';
                document.querySelector('.score').textContent =
                    0;
            }

            document.querySelector('.message').textContent =
                '📈 Too high';
            score--;
            document.querySelector('.score').textContent =
                score;
        } else if (quess < secretNumber) {
            document.querySelector('.message').textContent =
                '📉 Too low';
            score--;
            document.querySelector('.score').textContent =
                score;

        }
    });

document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message').textContent =
            'Start quessing..';
        document.querySelector('.score').textContent =
            score;
        document.querySelector('.score').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.
            backgroundColor = '#333';
        Document.querySelector('.number').style.width =
            '15rem';

    });