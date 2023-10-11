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
                                    @click="handleDropdownItemClick('etiquette')">Etiquette
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
                    <p class="demo-subtitle">Bias Category: {{corpusCategory}}</p>
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
    // Split after newlines and spaces
    inputString = inputString.replaceAll(" ", " ꙮ").replaceAll("\n", "\nꙮ");
    return inputString.split("ꙮ").filter(string => string !== "");
}

function generateHTMLParagraph(
    stringsArray: string[],
    biasedIndices: number[],
    startingWords: string,
    isMarkovOutput: boolean) {
    // Initialize an empty array to store the HTML fragments
    const htmlFragments = [];

    // Loop through each string in stringsArray
    for (let i = 0; i < stringsArray.length; i++) {
        const currentString = stringsArray[i];
        const isBiased = biasedIndices.includes(i);

        // If the current index is in the biasedIndices, wrap it in a <span> with the class .highlight
        // pre-wrap to preserve whitespace between words, otherwise HTML removes trailing whitespace
        const wrappedString = isBiased ? `<span class="highlight" style="white-space: pre-wrap;">${currentString}</span>` : currentString;

        // Push the wrapped (or unwrapped) string into the HTML fragments array
        htmlFragments.push(wrappedString);
    }

    // Join the HTML fragments into a single string
    const joinedHTML = htmlFragments.join('');

    // Create the final HTML string with a <p> element
    let htmlString = `<p class="markov-text">${joinedHTML}</p>`;
    if (isMarkovOutput)
    {
        // prepend initial/prompt words to output
        htmlString = `<p class="markov-text">${startingWords} ${joinedHTML}</p>`;
    }

    return htmlString;
}


function updateMarkovDemo(generated: string, biasedIndices: number[], textAreaId: string, startingWords: string) {
    const textarea = document.getElementById(textAreaId);

    if (textarea) {
        const delimiters = ['\n', '.', ',', '...', ' '];
        const result = splitStringToArray(generated, delimiters);
        const isMarkovOutput = textAreaId === 'outputTextarea' ? true : false;

        const resultHTML = generateHTMLParagraph(result, biasedIndices, startingWords, isMarkovOutput);
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
        const wilsonCorpus = 'I have called the Congress into extraordinary session because there are serious, very serious, choices of policy to be made, and made immediately, which it was neither right nor constitutionally permissible that I should assume the responsibility of making. On the 3rd of February last, I officially laid before you the extraordinary announcement of the Imperial German government that on and after the 1st day of February it was its purpose to put aside all restraints of law or of humanity and use its submarines to sink every vessel that sought to approach either the ports of Great Britain and Ireland or the western coasts of Europe or any of the ports controlled by the enemies of Germany within the Mediterranean...\n\nWhen I addressed the Congress on the 26th of February last, I thought that it would suffice to assert our neutral rights with arms, our right to use the seas against unlawful interference, our right to keep our people safe against unlawful violence. But armed neutrality, it now appears, is impracticable... Armed neutrality is ineffectual enough at best; in such circumstances and in the face of such pretensions it is worse than ineffectual: it is likely only to produce what it was meant to prevent; it is practically certain to draw us into the war without either the rights or the effectiveness of belligerents. There is one choice we cannot make, we are incapable of making: we will not choose the path of submission and suffer the most sacred rights of our nation and our people to be ignored or violated. The wrongs against which we now array ourselves are no common wrongs; they cut to the very roots of human life.\n\nWith a profound sense of the solemn and even tragical character of the step I am taking and of the grave responsibilities which it involves, but in unhesitating obedience to what I deem my constitutional duty, I advise that the Congress declare the recent course of the Imperial German government to be in fact nothing less than war against the government and people of the United States; that it formally accept the status of belligerent which has thus been thrust upon it; and that it take immediate steps, not only to put the country in a more thorough state of defense but also to exert all its power and employ all its resources to bring the government of the German Empire to terms and end the war...\n\nThe world must be made safe for democracy. Its peace must be planted upon the tested foundations of political liberty. We have no selfish ends to serve. We desire no conquest, no dominion. We seek no indemnities for ourselves, no material compensation for the sacrifices we shall freely make. We are but one of the champions of the rights of mankind. We shall be satisfied when those rights have been made as secure as the faith and the freedom of nations can make them...';

        const wilsonCorpusBiasedIndices = [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 86, 87, 88, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 171, 172, 173, 174, 175, 176, 191, 192, 193, 194, 240, 241, 242, 243, 244, 245, 250, 251, 260, 262, 312, 313, 319, 320, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 389, 390, 391, 392, 399, 400, 401, 402, 403, 404, 405, 406, 407, 419, 420, 421, 422, 440, 441, 442, 443, 444, 445, 457, 458, 459, 460, 461, 468, 469, 470, 471, 472, 473];

        //eslint-disable-next-line
        const etiquetteCorpus = 'A Gentleman Offers His Arm:\n\nTo an old lady or to an invalid a gentleman offers his arm if either of\nthem wants his support. Otherwise a lady no longer leans upon a gentleman in the daytime, unless to cross a very crowded thoroughfare, or to be helped over a rough piece of road, or under other impeding circumstances. In accompanying a lady anywhere at night, whether down the steps of a house, or from one building to another, or when walking a distance, a gentleman always offers his arm. The reason is that in her thin high-heeled slippers, and when it is too dark to see her foothold clearly, she is likely to trip.\n\nUnder any of these circumstances when he proffers his assistance, he might say: "Don\'t you think you had better take my arm? You might trip." Or--"Wouldn\'t it be easier if you took my arm along here? The going is pretty bad." Otherwise the only occasions on which a gentleman offers his arm to a lady are in taking her in at a formal dinner, or taking her in to supper at a ball, or when he is an usher at a wedding. Even in walking across a ballroom, except at a public ball in the grand march, it is the present fashion for the younger generation to walk side by side, never arm in arm. This, however, is merely an instance where etiquette and the custom of the moment differ. Old-fashioned gentlemen still offer their arm, and it is, and long will be, in accordance with etiquette to do so. But etiquette does not permit a gentleman to take a lady\'s arm!\n\nIn seeing a lady to her carriage or motor, it is quite correct for a gentleman to put his hand under her elbow to assist her; and in helping her out he should alight first and offer her his hand. He should not hold a parasol over her head unless momentarily while she searches in her wrist-bag for something, or stops perhaps to put on or take off her glove, or do anything that occupies both hands. With an umbrella the case is different, especially in a sudden and driving rain, when she is often very busily occupied in trying to hold "good" clothes out of the wet and a hat on, as well. She may also, under these circumstances, take the gentleman\'s arm, if the "going" is thereby made any easier.\n\nA Lady Never "On The Left":\n\nThe owner always sits on the right hand side of the rear seat of a carriage or a motor, that is driven by a coachman or a chauffeur. If the vehicle belongs to a lady, she should take her own place always, unless she relinquishes it to a guest whose rank is above her own, such as that of the wife of the President or the Governor. If a man is the owner, he must, on the contrary, give a lady the right hand seat. Whether in a private carriage, a car or a taxi, a lady must never sit on a gentleman\'s left; because according to European etiquette, a lady "on the left" is not a "lady." Although this etiquette is not strictly observed in America, no gentleman should risk allowing even a single foreigner to misinterpret a lady\'s position.\n\nAwkward Questions Of Payment:\n\nIt is becoming much less customary than it used to be for a gentleman to offer to pay a lady\'s way. If in taking a ferry or a subway, a young woman stops to buy magazines, chocolates, or other trifles, a young man accompanying her usually offers to pay for them. She quite as usually answers: "Don\'t bother, I have it!" and puts the change on the counter. It would be awkward for him to protest, and bad taste to press the point. But usually in small matters such as a subway fare, he pays for two. If he invites her to go to a ball game, or to a matinée or to tea, he naturally buys the tickets and any refreshment which they may have.\n\nVery often it happens that a young woman and a young man who are bound for the same house party, at a few hours\' distance from the place where they both live, take the same train--either by accident or by pre-arrangement. In this case the young woman should pay for every item of her journey. She should not let her companion pay for her parlor car seat or for her luncheon; nor should he, when they arrive at their destination, tip the porter for carrying her bag.\n\nA gentleman who is by chance sitting next to a lady of his acquaintance on a train or boat, should never think of offering to pay for her seat or for anything she may buy from the vendor.';

        const etiquetteCorpusBiasedIndices = [1, 2, 3, 8, 9, 10, 11, 12, 13, 24, 25, 61, 62, 63, 86, 87, 88, 89, 90, 95, 96, 97, 98, 99, 111, 112, 113, 114, 115, 123, 124, 125, 126, 164, 165, 166, 167, 168, 169, 170, 171, 295, 297, 298, 299, 300, 301, 302, 304, 305, 308, 309, 310, 316, 317, 318, 319, 414, 415, 458, 459, 460, 463, 464, 480, 481, 482, 483, 489, 490, 491, 492, 493, 516, 517, 518, 535, 537, 580, 581, 582, 583, 584, 585, 586, 609, 610, 611, 612, 613, 614, 615, 660, 661, 681, 682, 683, 739, 740, 741, 742, 752, 753, 754, 791, 792, 793, 794, 795];


        onMounted(() => {
            // Call updateMarkovDemo after the component is mounted
            console.log(wilsonCorpusBiasedIndices)
            updateMarkovDemo(wilsonCorpus, wilsonCorpusBiasedIndices, 'inputTextarea', startingWords);
        });

        let startingWords = "I have";
        let corpusId = 'wilson';
        const corpusLabel = ref('Woodrow Wilson’s 1917 Declaration of War');
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
                    corpusLabel.value = 'Woodrow Wilson’s 1917 Declaration of War';
                    corpusCategory.value = "Political"
                    startingWords = "I";
                    updateMarkovDemo(wilsonCorpus, wilsonCorpusBiasedIndices, 'inputTextarea', startingWords);

                }
                if (itemId === 'etiquette') {
                    corpusId = itemId;
                    corpusLabel.value = 'Etiquette';
                    corpusCategory.value = "Gender"
                    startingWords = 'A';
                    updateMarkovDemo(etiquetteCorpus, etiquetteCorpusBiasedIndices, 'inputTextarea', startingWords);
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

            fetch('https://zrcoxf2hz6zzhkaztnldiqutwy0mnhre.lambda-url.ap-southeast-2.on.aws/', requestOptions)
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
    height: 600px;
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

.demo-textarea :deep(.markov-text) {
   text-align: left;
   white-space: pre-line;
}

.demo-textarea {
    border: 2px solid black;
    border-radius: 10px;
    height: 150px;
    overflow-y: auto;
}
</style>
