const modal = document.querySelector('.output-box');
const closeBtn = document.querySelector('.close-btn');

const originalImg = document.querySelector('#original-img');
const upscaledImg = document.querySelector('#upscaled-img');

$("#generateForm").submit(e => {
    e.preventDefault();
    let form = document.getElementById("generateForm");
    let formData = new FormData(form);
    $.ajax({
        type:'POST',
        data:formData,
        processData: false,
        contentType: false,
        success: data => {
            if(data === null)
            {
                originalImg.setAttribute('src', URL.createObjectURL(fileInput.files[0]));
                upscaledImg.setAttribute('src', data);
                modal.showModal();
            }
            else
            {
                setAnimation('failDrop', 'failCover');
                errorText();
            }
        }
    });
});

closeBtn.addEventListener('click', () => {
    resetText();
    resetInput();
    modal.close();
});