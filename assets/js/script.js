// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);

            }
        });
    }
    runGame("addition");
});

document.getElementById('answer-box').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // Creates two random numbers between 1 and 25
    document.getElementById('answer-box').value = "";
    document.getElementById('answer-box').focus();

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`;
    }

}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        runGame(calculatedAnswer[1]);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplimented operator ${operator}. Aborting!`);
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
document.getElementById('operand1').textContent = operand1;
document.getElementById('operand2').textContent = operand2;
document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion( operand1, operand2) {
document.getElementById('operand1').textContent = operand1 > operand2 ? operand1: operand2;
document.getElementById('operand2').textContent = operand1 > operand2 ? operand2: operand1;
document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 * operand2;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";


}

document.addEventListener('DOMContentLoaded', function() {
    let nouns = document.getElementById('nouns');
    let pronouns = document.getElementById('pronouns');
    let verbs = document.getElementById('verbs');
    let adjectives = document.getElementById('adjectives');
    let adverbs = document.getElementById('adverbs');
    let prepositions = document.getElementById('prepositions');
    let conjunctions = document.getElementById('conjunctions');
    let interjections = document.getElementById('interjections');
    let contentDiv = document.getElementById('content-div');
    
    function nounsClicked() {
        if (this.innerText == "Nouns") {
          contentDiv.innerHTML = `<h2>Nouns</h2>
              <h3>What Are Nouns?</h3>
              <p>Nouns are words that represent people, places, or things. Everything we can see or talk about is represented by a word. That word is called a "noun." You might find it useful to think of a noun as a "naming word."</p>
              <p>Often, nouns name things we can touch (e.g., "lion," "cake," "computer"), but sometimes they name things we cannot touch (e.g., "bravery," "mile," "joy").</p>
              <h3>Examples of Nouns</h3>
              <p>Here are some examples of nouns. (Notice that some have capital letters. We will discuss why later.)</p>
              <ul>
                <li>
                  Person: soldier, Alan, cousin, lawyer
                </li>
                <li>
                  Place: house, London, factory, shelter
                </li>
                <li>
                  Thing. This includes:
                </li>
                <li>Objects: table, London Bridge, chisel, nitrogen, month, inch, cooking</li>
                <li>
                  Animals: aardvark, rat, shark, Mickey
                </li>
                <li>
                  Ideas: confusion, kindness, faith, Theory of Relativity, joy
                </li>
         
              </ul>
              <p>Most nouns can be pluralized, which usually involves adding "s" to the end (e.g., "aardvark" becomes "aardvarks").</p>
              <h3>Common Nouns and Proper Nouns</h3>
              <p>Every noun can be categorized as either a common noun or a proper noun.</p>
              <h4>Common Nouns</h4>
              <p>A common noun is the word for a person, place, or thing. It's the word that appears in the dictionary. For example:</p>
              <ul>
              <li>Person</li>
              <li>City</li>
              <li>Dog</li>
              </ul>
              <h3>Proper Nouns</h3>
              <p>A proper noun is the given name of a person, place, or thing. It's likely to be a personal name or a title. For example:</p>
              <ul>
               <li>Mohamed</li>
               <li>New York</li>
               <li>Rover</li>
              </ul>
              <p>A proper noun always starts with a capital letter.</p>
              `;
        } else if (this.innerText == "Pronouns") {
          contentDiv.innerHTML = `<h2>What Are Pronouns in English Grammar?</h2>
                <p>Pronouns are words that replace nouns. I, you, he, she, it, we, and they are all examples of common pronouns. In the example sentences below, the pronouns are highlighted, and the nouns they replace are in bold.</p>
                <ul>
                  <li>Sarah is my sister. She is also my best friend.</li>
                  <p>(The pronoun "she" replaces the noun "Sarah.")</p>
                  <li>If Martians exist, they are not "little green men" but tiny microbes.</li>
                  <p>(Here, the pronoun "they" replaces the noun "Martians.")</p>
                  <li>Snow is precipitation in the form of ice crystals. It originates in clouds when temperatures are below the freezing point.</li>
                  <p>(Here, the pronoun "it" replaces the noun "snow.")</p>
                </ul>
                
               <h3>Types of Pronouns</h3>
                <ol>
                  <li>Personal Pronouns</li>
                  <li>Possessive Pronouns</li>
                  <li>Relative Pronouns</li>
                  <li>Demonstrative Pronouns</li>
                  <li>Emphatic Pronouns</li>
                  <li>Reflexive Pronouns</li>
                  <li>Indefinite Pronouns</li>
                  <li>Interrogative Pronouns</li>
                  <li>Reciprocal Pronouns</li>
             
                </ol>`;
          
        } else if (this.innerText === "Verbs") {
          this.style.backgroundColor = 'red';
          alert('Hey! You clicked Verbs and turned it into another color!');
        } else {
          alert('You did not yet assign a color to this element!')
        }
    }
    
    nouns.addEventListener('click', nounsClicked);
    pronouns.addEventListener('click', nounsClicked);
    verbs.addEventListener('click', nounsClicked);
    adjectives.addEventListener('click', nounsClicked);
    adverbs.addEventListener('click', nounsClicked);
    prepositions.addEventListener('click', nounsClicked);
    conjunctions.addEventListener('click', nounsClicked);
    interjections.addEventListener('click', nounsClicked);
    });
    
