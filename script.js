// function submitFeedback() {
//     const feedbackText = document.getElementById('feedback-text').value;
//     if (feedbackText.trim() === '') {
//         alert('Please enter your feedback before submitting.');
//         return;
//     }
//     // Here you could add code to send the feedback to a server or process it further
//     alert('Thank you for your feedback!');
//     document.getElementById('feedback-text').value = '';
// }
function playSound(letter) {
    const audio = new Audio(`sounds/${letter}.mp3`);
    audio.play();
}

function submitFeedback() {
    const feedbackText = document.getElementById('feedback-text').value;
    if (feedbackText.trim() === '') {
        alert('Please enter your feedback before submitting.');
        return;
    }
    alert('Thank you for your feedback!');
    document.getElementById('feedback-text').value = '';
}
