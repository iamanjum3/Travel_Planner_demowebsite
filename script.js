
function submitForm() {
    const place = document.getElementById('place').value;
    const dates = document.getElementById('dates').value;

    if (place && dates) {
        alert(`Travel Plan Submitted!\nPlace: ${place}\nDates: ${dates}`);
    } else {
        alert('Please fill in all fields.');
    }
}
