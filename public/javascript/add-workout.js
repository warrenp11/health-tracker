// allow the user to add a workout to their profile
async function newWorkoutHandler(event) {
    event.preventDefault();
    console.log(event);

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);

    const exName = document.querySelector('#ex-name').value.trim();
    const exType = document.querySelector('#ex-type').value.trim();
    const exTime = document.querySelector('#ex-time').value.trim();
    const reps = document.querySelector('#reps').value.trim();
    const sets = document.querySelector('#sets').value.trim();





    if (exName && exType && exTime && reps && sets) {
        const response = await fetch('/api/exercises/', {
            method: 'post',
            body: JSON.stringify({
                exName,
                exType,
                exTime,
                reps,
                sets
            }),
            headers: { 'Content-Type': 'application/json' }
        });


        if (response.ok) {
            document.location.replace('/dashboard');
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
};






// if (exName && exType && exTime && reps && sets) {
//     const response = await fetch('/api/activities', {
//         method: 'post',
//         body: JSON.stringify({
//             exTime,
//             reps,
//             sets
//         }),
//         headers: { 'Content-Type': 'application/json' }
//     });


//     if (response.ok) {
//         document.location.replace('/dashboard');
//         console.log('success');
//     } else {
//         alert(response.statusText);
//     }
// }


document.querySelector('.addworkout-form').addEventListener('submit', newWorkoutHandler);