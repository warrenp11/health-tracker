async function signupFormHandler(event) {
    event.preventDefault();

    console.log(event)
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const gender = document.querySelector('#gender-signup').value.trim();
    const height = document.querySelector('#height-signup').value.trim();
    const weight = document.querySelector('#weight-signup').value.trim();

    if (username && email && password && age && gender && height && weight) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                age,
                gender,
                height,
                weight
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);