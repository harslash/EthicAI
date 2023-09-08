<template>
    <form class="form-container d-flex flex-column justify-content-center align-items-center">
        <div class="container pb-3">
            <div class="row">
                   <div class="col-md-12 d-flex">
                    <div class="dropdown px-3">
                        <button 
                            class="btn 
                            btn-secondary 
                            dropdown-toggle 
                            demo-btn
                            " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Corpus
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item"
                                    @click="handleDropdownItemClick('wilson')">Woodrow Wilson's declaration of war</a>
                            </li>
                             <li>
                                <a class="dropdown-item"
                                    @click="handleDropdownItemClick('corpus-b')">Corpus B
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button 
                        class="btn btn-primary demo-btn" 
                        @click="handleButtonClick"
                        :disabled="loading"
                        type="button">Train Model</button>
                    <div v-if="loading" class="spinner-grow" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group pb-3">
            <div class="row">
                <div class="col-md-12">
                    <h5 class="demo-title"> {{ corpusLabel }}</h5>
                    <p class="demo-subtitle">Biases Category: {{corpusCategory}}</p>
                </div>
                 <div class="col-md-12 demo-textarea" id="inputTextarea"></div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-md-12">
                    <h5 class="demo-title">Markov Chain Output</h5>
                </div>
                <div class="col-md-12 demo-textarea" id="outputTextarea">

                </div>
            </div>
          
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

function splitStringToArray(inputString: string, delimiters: string[]) {
    const stringArray = [];
    const regex = new RegExp(`(${delimiters.join('|')})`);
    let currentString = "";

    const substrings = inputString.split(regex);
    for (const substring of substrings) {
        if (delimiters.includes(substring)) {
            if (currentString.trim() !== "") {
                stringArray.push(currentString.trim());
            }
            stringArray.push(substring);
            currentString = "";
        } else {
            currentString += substring;
        }
    }

    if (currentString.trim() !== "") {
        stringArray.push(currentString.trim());
    }

    return stringArray;
}

function generateHTMLParagraph(stringsArray: string[], biasedIndices: number[], startingWords: string) {
    // Initialize an empty array to store the HTML fragments
    const htmlFragments = [];

    // Loop through each string in stringsArray
    for (let i = 0; i < stringsArray.length; i++) {
        const currentString = stringsArray[i];
        const isBiased = biasedIndices.includes(i);

        // If the current index is in the biasedIndices, wrap it in a <span> with the class .highlight
        const wrappedString = isBiased ? `<span class="highlight">${currentString}</span>` : currentString;

        // Push the wrapped (or unwrapped) string into the HTML fragments array
        htmlFragments.push(wrappedString);
    }

    // Join the HTML fragments into a single string
    const joinedHTML = htmlFragments.join(' ');

    // Create the final HTML string with a <p> element
    const htmlString = `<p class="markov-text">${startingWords} ${joinedHTML}</p>`;

    return htmlString;
}


function updateMarkovDemo(generated: string, biasedIndices: number[], textAreaId: string, startingWords: string) {
    const textarea = document.getElementById(textAreaId);

    if (textarea) {
        const delimiters = ['\n', '.', ',', '...', ' '];
        const result = splitStringToArray(generated, delimiters);
        const resultHTML = generateHTMLParagraph(result, biasedIndices, startingWords);
        textarea.innerHTML = resultHTML;
    }
}

export default defineComponent({
    name: 'MarkovDemo',
    components: {
    },
    props: {
    },
    setup() {
        const wilsonCorpus = 'I have called the Congress into extraordinary session because there are serious, very serious, choices of policy to be made, and made immediately, which it was neither right nor constitutionally permissible that I should assume the responsibility of making. On the 3rd of February last, I officially laid before you the extraordinary announcement of the Imperial German government that on and after the 1st day of February it was its purpose to put aside all restraints of law or of humanity and use its submarines to sink every vessel that sought to approach either the ports of Great Britain and Ireland or the western coasts of Europe or any of the ports controlled by the enemies of Germany within the Mediterranean...\nWhen I addressed the Congress on the 26th of February last, I thought that it would suffice to assert our neutral rights with arms, our right to use the seas against unlawful interference, our right to keep our people safe against unlawful violence.But armed neutrality, it now appears, is impracticable...Armed neutrality is ineffectual enough at best; in such circumstances and in the face of such pretensions it is worse than ineffectual: it is likely only to produce what it was meant to prevent; it is practically certain to draw us into the war without either the rights or the effectiveness of belligerents.There is one choice we cannot make, we are incapable of making: we will not choose the path of submission and suffer the most sacred rights of our nation and our people to be ignored or violated.The wrongs against which we now array ourselves are no common wrongs; they cut to the very roots of human life.\nWith a profound sense of the solemn and even tragical character of the step I am taking and of the grave responsibilities which it involves, but in unhesitating obedience to what I deem my constitutional duty, I advise that the Congress declare the recent course of the Imperial German government to be in fact nothing less than war against the government and people of the United States; that it formally accept the status of belligerent which has thus been thrust upon it; and that it take immediate steps, not only to put the country in a more thorough state of defense but also to exert all its power and employ all its resources to bring the government of the German Empire to terms and end the war...\nThe world must be made safe for democracy.Its peace must be planted upon the tested foundations of political liberty.We have no selfish ends to serve.We desire no conquest, no dominion.We seek no indemnities for ourselves, no material compensation for the sacrifices we shall freely make.We are but one of the champions of the rights of mankind.We shall be satisfied when those rights have been made as secure as the faith and the freedom of nations can make them...';

        const wilsonCorpusBiasedIndicies = [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 86, 87, 88, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 169, 170, 171, 172, 173, 174, 189, 190, 191, 192, 238, 239, 240, 241, 242, 243, 248, 249, 258, 260, 308, 309, 315, 316, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 385, 386, 387, 388, 395, 396, 397, 398, 399, 400, 401, 402, 403, 413, 414, 415, 416, 434, 435, 436, 437, 438, 439, 451, 452, 453, 454, 455, 462, 463, 464, 465, 466, 467];


        onMounted(() => {
            // Call updateMarkovDemo after the component is mounted
            updateMarkovDemo(wilsonCorpus, wilsonCorpusBiasedIndicies, 'inputTextarea', startingWords);
        });

        let startingWords = "I have";
        let corpusId = 'wilson';
        const corpusLabel = ref('Woodrow Wilson Declaration of War');
        const corpusCategory = ref('Political');

        const loading = ref(false);

        const handleDropdownItemClick = (itemId: string) => {
     
            let inputTextArea = document.getElementById('inputTextarea');
            let outputTextarea = document.getElementById('outputTextarea');
            if (outputTextarea) {
                outputTextarea.innerHTML = '';
            }
            
            if (inputTextArea) {
                if (itemId === 'wilson') {
                    corpusId = itemId;
                    corpusLabel.value = 'Woodrow Wilson Declaration of War';
                    corpusCategory.value = "Poltical"
                    updateMarkovDemo(wilsonCorpus, wilsonCorpusBiasedIndicies, 'inputTextarea', startingWords);

                }
                if (itemId === 'corpus-b') {
                    corpusId = itemId;
                    corpusLabel.value = 'Corpus B';
                    corpusCategory.value = "Unknown"
                    updateMarkovDemo('To be implemented', [], 'inputTextarea', startingWords);
                }
            } 
        };

         const handleButtonClick = () => {
            const requestBody = JSON.stringify(
                { corpus: corpusId, context_size: 1, words_to_generate: 100, input: startingWords}
                );

            loading.value = true;

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            };

            fetch('https://cwlspalwoizpw6aqf7piiskpce0cioco.lambda-url.ap-southeast-2.on.aws/', requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    loading.value = false;
                    updateMarkovDemo(data.generated, data.biased_indices, 'outputTextarea', startingWords);
                })
                .catch((error) => {
                    loading.value = false;
                });
        };

        return {
            loading,
            handleDropdownItemClick,
            handleButtonClick,
            corpusLabel,
            corpusCategory
        }
    },
});
</script>

<style scoped>
/* Add your CSS styles here, scoped to this component */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');

.form-container {
    border: 2px solid #E8E4E4;
    box-shadow: 5px 5px 5px #E8E4E4;
    border-radius: 20px;
}

.form-group {
    width: 60%;
}

.form-control {
    border: 2px solid black;
    border-radius: 10px;
}

.spinner-grow {
    background-color: #BF8FFE;
}

.demo-btn {
    background-color: #6D0CFF;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
}

.demo-btn:hover {
    background-color: #8638fc;
}

.demo-title,.demo-subtitle {
    color: #6D0CFF;
    text-align: left;
}

.demo-title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
}

.demo-subtitle {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
}

.spinner-grow {
    background-color: #BF8FFE;
}

.demo-textarea  :deep(.highlight) {
    display: inline-block;
    padding: .25em 0;
    background: #ff6257;
    color: black;
}

.demo-textarea  :deep(.markov-text) {
   text-align: left;
}

.demo-textarea {
    border: 2px solid black;
    border-radius: 10px;
    height: 20vh;
    overflow-y: auto;
}
</style>
