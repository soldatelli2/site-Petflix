window.onload = function () {
    setTimeout(function () {
        document.querySelector('.logo').classList.add('slide-in');
    }, 500);

    setTimeout(function () {
        document.querySelector('.logo').classList.add('slide-out');
        document.querySelector('.texto-logo').classList.add('slide-in');
    }, 2000);

    setTimeout(function () {
        document.querySelector('.texto-logo').classList.add('slide-out');
    }, 4000);

    setTimeout(function () {
        document.querySelector('.texto-logo').style.display = 'none';
        document.querySelector('.catalogo').style.display = 'flex';
        document.querySelector('.catalogo').classList.add('slide-in');
        startCountdown(5);
    }, 5000);
};

function startCountdown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
        counter--;
        document.getElementById('contador').textContent = counter;
        if (counter === 0) {
            clearInterval(interval);
            // window.location.href = 'filme.html';
        }
    }, 1000);
}