const body = document.body;
        const startButton = document.getElementById("startButton");
        const stopButton = document.getElementById("stopButton");
        
        let intervalId;

        startButton.addEventListener("click", () => {
            intervalId = setInterval(() => {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                const rgb = `rgb(${red},${green},${blue})`;
                body.style.background = rgb;
            }, 1000);
            startButton.style.display = "none";
            stopButton.style.display = "block";
        });

        stopButton.addEventListener("click", () => {
            clearInterval(intervalId);
            startButton.style.display = "block";
            stopButton.style.display = "none";
        });