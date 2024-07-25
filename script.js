document.getElementById('start-button').addEventListener('click', function() {
    const targetDate = new Date(document.getElementById('datetime').value);
    const countdownsElement = document.getElementById('countdowns');
    const alarm = document.getElementById('alarm');

    if (isNaN(targetDate.getTime())) {
        alert('Please set a valid date and time.');
        return;
    }

    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    countdownsElement.appendChild(countdownElement);

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = '<div class="time finished">Countdown finished!</div>';
            alarm.play();
            countdownElement.classList.add('finished');
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="time">${days} Days</div>
            <div class="time">${hours} Hours</div>
            <div class="time">${minutes} Minutes</div>
            <div class="time">${seconds} Seconds</div>
        `;
    }, 1000);
});
