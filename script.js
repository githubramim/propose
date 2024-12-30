        // Love Calculator
        function calculateLove() {
            const yourName = document.getElementById('yourName').value;
            const theirName = document.getElementById('theirName').value;
            const resultElement = document.getElementById('loveResult');

            if (!yourName || !theirName) {
                resultElement.textContent = "Name Input Na Diye ValoBasha Measure Kora Jabe Na! 😜";
                resultElement.style.opacity = 1;
                return;
            }
            let loveScore = 100;
            // const loveScore = Math.floor(Math.random() * 101); // Random percentage
            resultElement.textContent = `Love for ${yourName} to ${theirName} is ${loveScore}% `;
            resultElement.style.opacity = 1;
        }

        // Dedicated Page
        function showMessage() {
            const messageElement = document.getElementById('dedicatedMessage');
            messageElement.style.display = 'block';
            setTimeout(() => messageElement.style.opacity = 1, 100);
        }

        // Click to Reveal Message
        function revealHiddenMessage() {
            const hiddenElement = document.getElementById('hiddenMessage');
            hiddenElement.style.display = 'block';
            setTimeout(() => hiddenElement.style.opacity = 1, 100);
        }