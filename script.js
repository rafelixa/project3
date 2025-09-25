const ratings = document.querySelectorAll('.rating');
const ratingContainer = document.querySelector('.rating-container');
const sendButton = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'Amazing!';

ratingContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.rating');
    if (clicked) {
        removeActive();
        clicked.classList.add('active');
        const ratingText = clicked.querySelector('small');
        if (ratingText) {
            selectedRating = ratingText.innerHTML;
        }
    }
});

sendButton.addEventListener('click', (e) => {
    const activeRating = document.querySelector('.rating.active');
    if (!activeRating) {
        alert('Please select a rating before sending your review!');
        return;
    }
    
    panel.innerHTML = `
    <div style="text-align: center;">
        <div style="font-size: 48px; margin-bottom: 20px;">💬</div>
        <strong style="font-size: 24px; display: block; margin-bottom: 10px;">Thank You!</strong>
        <strong style="font-size: 18px; display: block; margin-bottom: 15px;">Feedback: ${selectedRating}</strong>
        <p style="font-size: 16px; color: #666;">We'll use your feedback to improve our customer support.</p>
    </div>
    `;
});

function removeActive() {
    ratings.forEach((rating) => {
        rating.classList.remove('active');
    });
}