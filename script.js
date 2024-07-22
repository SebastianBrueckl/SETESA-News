const textElement = document.getElementById('text');
        const text = textElement.innerHTML;
        textElement.innerHTML = '';

        let lastColorIndex = -1;

        for (let i = 0; i < text.length; i++) {
            if (text[i] === '<') {
                while (text[i] !== '>') {
                    textElement.innerHTML += text[i];
                    i++;
                }
                textElement.innerHTML += '>';
                continue;
            }

            const span = document.createElement('span');
            span.textContent = text[i];
            textElement.appendChild(span);
        }