let intervalId;

document.querySelector('#start').addEventListener('click', function () {
    if (!intervalId) {
        intervalId = setInterval(function () {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);
    }
    
});

document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null; // Clear the intervalId to indicate that the interval is stopped (a good practice)
});
    
  


    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }