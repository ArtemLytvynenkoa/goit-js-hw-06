const form = document.querySelector('.login-form');



const onFormSubmit = (event) => {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;
    const personalData = { email, password };

    personalData.email = event.currentTarget.elements.email.value;
    personalData.password = event.currentTarget.elements.password.value;

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled!!!');
    } else {
        console.log(personalData);
    }

    form.reset();
};

form.addEventListener('submit', onFormSubmit)


