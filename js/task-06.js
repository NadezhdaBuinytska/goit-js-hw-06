const inputEl = document.querySelector('input');

const addInputText = (event) => {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    event.currentTarget.classList.remove('invalid') 
    event.currentTarget.classList.add('valid')    
    } else 
        {event.currentTarget.classList.remove('valid') 
    event.currentTarget.classList.add('invalid');}
};

inputEl.addEventListener("blur", addInputText);