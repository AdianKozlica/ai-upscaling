const form = document.querySelector('form');
const modal = document.querySelector('.output-box');
const closeBtn = document.querySelector('.close-btn');

const originalImg = document.querySelector('#original-img');
const upscaledImg = document.querySelector('#upscaled-img');

$("#generateForm").submit(e => {
    e.preventDefault();
    const form = $(this);

    if(flag)
    {
        $.ajax({
            type:'POST',
            url:'/',
            data:form.serialize(),
            success: data => {
                originalImg.setAttribute('src', URL.createObjectURL(fileInput.files[0]));
                upscaledImg.setAttribute('src', data);
                modal.showModal();
            }
        });
    }
    else
    {
        setAnimation('failDrop', 'failCover');
        errorText();
    }
});

closeBtn.addEventListener('click', () => {
    resetText();
    resetInput();
    flag = false;
    modal.close();
});