const rangeInput = document.querySelector('.range-input');
const outputEl = document.querySelector('.range-output');

const {min, max} = rangeInput;
const range = max - min;

const updatePos = () => {
    const {value} = rangeInput;
    const percentage = (value - min) / range * 100;

    outputEl.style.left = `${percentage}%`;
    outputEl.style.transform = `translate(-${percentage}%, 150%)`;
}

outputEl.value = rangeInput.value;
updatePos();

rangeInput.addEventListener('input', () => {
    outputEl.value = rangeInput.value;

    updatePos();
});
