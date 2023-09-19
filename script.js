console.groupCollapsed('Galvosūkis2023-09-18');

let secretNumber, numberOfGuesses, correctAnswers = 0;

// Pirmas lygis
alert('Turite atsakyti į tris klausimus.');
alert('Pirmame lygyje turite pasirinkti vieną atsakymą.');
alert('Įrašykite vieną teisingo atsakymo numerį.');
secretNumber = 1;
numberOfGuesses = 3;

const question1 = 'Kada gimė Vytautas Didysis?\n1. 1350\n2. 1410\n3. 1239\n4. 1009\n5. 1430';
const answer1 = prompt(question1);

if (answer1 === '1') {
    correctAnswers++;
    confirm('Teisingai! Eikime prie kito klausimo.');
} else {
    location.reload(); // Refresh the page after three succeeding incorrect answers
}

// Antras lygis
alert('Jums liko atsakyti į du klausimus.');
alert('Antrame lygyje turite pasirinkti du atsakymus.');
alert('Įrašykite du teisingo atsakymo numerius atskirtus kableliu.');
secretNumber = '3, 4';
numberOfGuesses = 3;

const question2 = 'Kokios upės susijungia Kauno mieste?\n1.Nemunėlis\n2.Vilija\n3.Nemunas\n4.Neris\n5.Santaka';
const answer2 = prompt(question2);

const answers2 = answer2.split(',').map(answer => answer.trim());

if (answers2.length === 2 && answers2.includes('3') && answers2.includes('4')) {
    correctAnswers++;
    confirm('Teisingai! Eikime prie kito klausimo.');
} else {
    location.reload(); // Refresh the page after three succeeding incorrect answers
}

// Trečias lygis
alert('Jums liko atsakyti į vieną klausimą.');
alert('Trečiame lygyje turite pasirinkti tris atsakymus.');
alert('Įrašykite tris teisingo atsakymo numerius atskirtus kableliais.');
secretNumber = '1, 2, 3';
numberOfGuesses = 3;

const question3 = 'Kaip vadinasi Lietuvoje gaminamas gazuotas mineralinis vanduo?\n1. Birutė ir Vytautas\n2. Birutė\n3. Vytautas\n4. Birštonas\n5. Druskininkai';
const answer3 = prompt(question3);

const answers3 = answer3.split(',').map(answer => answer.trim());

if (answers3.length === 3 && answers3.includes('1') && answers3.includes('2') && answers3.includes('3')) {
    correctAnswers++;
    alert('Sėkmingai atsakėte į visus tris klausimus.');
    alert('Linkime Jums daug sveikatos, laimės ir daug pinigų!');
} else {
    location.reload(); // Refresh the page after three succeeding incorrect answers
}

console.groupEnd();
