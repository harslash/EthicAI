<body>
    <div id="app">
        <div class="card">
            <div class="rectangle">
                <div class="icon-container">
                    <div class="circle">
                        <img src="pics/smiley_icon.png">
                    </div>
                </div>
                <div class="text-container">
                    {{ question }} <!-- Bind to the question property -->
                </div>
            </div>
            <div class="rectangle">
                <div class="icon-container">
                    <div class="circle">
                        <img src="pics/robot_icon.png">
                    </div>
                </div>
                <div class="text-container">
                    {{ answer }} <!-- Bind to the answer property -->
                </div>
            </div>
        </div>
    </div>

    <script>
        new Vue({
            el: '#app',
            data: {
                question: 'What is your question?', // Predefined input question
                answer: 'This is the answer.', // Predefined output answer
            },
        });
    </script>
</body>
