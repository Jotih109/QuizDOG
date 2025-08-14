const dogImage = document.getElementById('dog-image');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const generateButton = document.getElementById('generate-button');
const resultText = document.getElementById('result');
const acertou = document.getElementById("acerto");
const errou = document.getElementById("erro");

function fetchRandomDogImage() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.message;
            dogImage.src = imageUrl;
            return imageUrl;
        });
}

fetchRandomDogImage();

guessButton.addEventListener('click', () => {
    const guessedName = guessInput.value.trim().toLowerCase();
    const breed = dogImage.src.split('/')[4].split('-').join(' ');
    if (guessedName === breed) {
        resultText.textContent = 'Parabéns! Você acertou o nome do cachorro!';
        acertou.textContent = Number(acertou.textContent) + 1;
    } else {
        resultText.textContent = `Oops! O nome correto é ${breed}. Tente novamente.`;
        errou.textContent = Number(errou.textContent) + 1;
    }

    setTimeout(() => {
        resultText.textContent = '';
        fetchRandomDogImage();
    }, 2000);
});

generateButton.addEventListener('click', () => {
    fetchRandomDogImage();
    resultText.textContent = '';
});

