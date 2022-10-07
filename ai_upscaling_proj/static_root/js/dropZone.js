const dropZone = document.querySelector('.drop-box');

const cover = document.querySelector('.cover');

const imgBox = dropZone.querySelector('.img-box');

const fileLabel = dropZone.querySelector('#file-label');
const fileInput = document.querySelector('#file');

const successText = () => fileLabel.innerText = 'File successfully added';
const errorText = () => fileLabel.innerText = 'An error occurred, try again';
const resetText = () => fileLabel.innerText = 'Drop files here or click to upload';
const resetInput = () => fileInput.value = '';

const coverAnimate = () => {
    dropZone.style.backgroundColor = "var(--hover)";
    imgBox.style.transform = 'rotate(20deg)';
    imgBox.style.scale = '1.1';
}

const coverStopAnimate = () => {
    dropZone.style.backgroundColor = "var(--normal)";
    imgBox.style.transform = 'rotate(0deg)';
    imgBox.style.scale = '1';
}

const setAnimation = (animation1='', animation2='') => {
    dropZone.style.animationName = animation1;
    cover.style.animationName = animation2;
}

cover.addEventListener('dragover', e => {
    e.preventDefault();
    coverAnimate();
});

cover.addEventListener('dragleave', coverStopAnimate);

cover.addEventListener('click', () => {
    fileLabel.click();
});

cover.addEventListener('drop', e => {
    e.preventDefault();
    coverStopAnimate();
    fileInput.files = e.dataTransfer.files;
    setAnimation('successDrop', 'successCover');
    successText();
});

fileInput.addEventListener('change', () => {
    setAnimation('successDrop', 'successCover');
    successText();
});

dropZone.addEventListener('animationend', () => {
    setAnimation();
});