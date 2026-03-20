document.addEventListener("DOMContentLoaded", () => {
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        const logs = [
            { text: "> INITIALIZING_CORE_RECLAMATION...", type: 'normal', delay: 300 },
            { text: "Checking integrity of psychological buffers [OK]", type: 'normal', delay: 800 },
            { text: "Identifying noise vectors: SOCIAL_MEDIA [REDACTED]", type: 'normal', delay: 1200 },
            { text: "Identifying noise vectors: CORPORATE_STATIC [REDACTED]", type: 'normal', delay: 700 },
            { text: "> ALERT: UNSTABLE FOCUS DETECTED", type: 'alert', delay: 1000 },
            { text: "Applying silent_protocol.v4.8...", type: 'normal', delay: 800 },
            { text: "> SYSTEM_BOOT_COMPLETE", type: 'normal', delay: 1500 }
        ];

        let currentLogIndex = 0;

        function createCursor() {
            const cursor = document.createElement('span');
            cursor.classList.add('cursor');
            return cursor;
        }

        function typeLine(log, callback) {
            const line = document.createElement('div');
            line.classList.add('log-line');
            if (log.type === 'alert') {
                line.classList.add('alert');
            }
            
            const textSpan = document.createElement('span');
            line.appendChild(textSpan);
            terminalBody.appendChild(line);

            let charIndex = 0;
            const speed = 30; // ms per char

            function typeChar() {
                if (charIndex < log.text.length) {
                    textSpan.textContent += log.text.charAt(charIndex);
                    charIndex++;
                    terminalBody.scrollTop = terminalBody.scrollHeight;
                    setTimeout(typeChar, speed);
                } else {
                    // Done typing this line
                    currentLogIndex++;
                    setTimeout(nextLog, 500); // Pause between lines
                    if (callback) callback();
                }
            }

            typeChar();
        }

        function nextLog() {
            if (currentLogIndex < logs.length) {
                const cursor = createCursor();
                terminalBody.appendChild(cursor);
                
                setTimeout(() => {
                    cursor.remove();
                    typeLine(logs[currentLogIndex], () => {
                       if (currentLogIndex === logs.length) {
                           // Done with all logs, add static cursor at bottom
                           terminalBody.appendChild(createCursor());
                       }
                    });
                }, logs[currentLogIndex].delay);
            }
        }

        // Start index reveal after short initial pause
        setTimeout(nextLog, 1000);
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        trigger.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // Progress Bar Animation on Scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                // Animate
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 50);
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});
