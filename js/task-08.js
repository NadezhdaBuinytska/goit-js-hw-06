const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', checkSubmit);

function checkSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Make sure all the fields are filled in!")
    } else {
    const formElements = {};
        formElements.email = email.value,
        formElements.password = password.value
    
        console.log(formElements);
        event.currentTarget.reset();
    };
}