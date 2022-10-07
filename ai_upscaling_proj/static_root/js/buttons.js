const upscaleBtn = document.querySelector('.upscale-btn');

upscaleBtn.addEventListener('click', () => {
    upscaleBtn.style.boxShadow = '10px -10px 10px var(--bg-color-1)';
});

upscaleBtn.addEventListener('transitionend', () => {
    upscaleBtn.style.boxShadow = '-10px 10px 10px var(--bg-color-1)';
});