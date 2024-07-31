function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmas = new Date(currentYear, 11, 25); 

    if (now > christmas) {
        christmas.setFullYear(currentYear + 1);
    }

    const difference = christmas - now;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').innerHTML = `${days} days until Christmas!`;
}

updateCountdown();
setInterval(updateCountdown, 86400000);