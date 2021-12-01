// allow the user to add a workout to their profile
async function newWorkoutHandler(event) {
    event.preventDefault();
    console.log(event);

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);

    if (formProps) {
        const response = await fetch('/api/workout', {
            method: 'post',
            body: JSON.stringify({formProps}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.addworkout-form').addEventListener('submit', newWorkoutHandler);