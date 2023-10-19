const btnOpen = document.querySelector('.btn');
const btnClose = document.querySelector('.btn-close');
const popup = document.querySelector('#popup');
btnOpen.addEventListener('click',openPopup)
btnClose.addEventListener('click',closePopup)

function openPopup(){
    popup.classList.add('open-popup');
}

function closePopup(){
    popup.classList.remove('open-popup');
}