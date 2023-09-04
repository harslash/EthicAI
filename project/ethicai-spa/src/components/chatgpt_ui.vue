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
<style>
        /* Styles for the card container */
        .card {
            width: 600px; /* Adjusted width to be 4 times the height (150px * 4 = 600px) */
            background-color: #fff;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            overflow: hidden;
            position: relative;
        }

        /* Styles for the two rectangle containers */
        .rectangle {
            width: 100%;
            height: 150px;
            color: #000; /* Set text color to black */
            font-size: 20px;
            font-family: Arial, sans-serif;
            position: relative;
            padding: 10px; /* Add padding for top and left */
            display: flex;
            flex-direction: row; /* Arrange children horizontally */
        }

        /* Style for the top rectangle */
        .rectangle:nth-child(1) {
            background-color: #E2D8F2;
        }

        /* Style for the bottom rectangle */
        .rectangle:nth-child(2) {
            background-color: #fff;
        }

        /* Styles for the child containers */
        .text-container {
            flex: 85; /* Equal width for both child containers within a rectangle */
            display: flex;
            flex-direction: column; /* Arrange child items vertically within the child container */
            justify-content: flex-start; /* Align items to the top of the child container */
            align-items: flex-start; /* Align items to the left of the child container */
            margin-top: 5px;
        }

        .icon-container {
            flex: 15; /* Equal width for both child containers within a rectangle */
            display: flex;
            flex-direction: column; /* Arrange child items vertically within the child container */
            justify-content: flex-start; /* Align items to the top of the child container */
            align-items: flex-start; /* Align items to the left of the child container */
        }

        /* Styles for the purple circles */
        .circle {
            width: 50px;
            height: 50px;
            background-color: #6D0CFF;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-weight: bold;
        }
        
        /* Style for the images inside circles */
        .circle img {
            max-width: 100%;
            max-height: 100%;
        }
    </style>
