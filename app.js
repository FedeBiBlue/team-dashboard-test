document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            let currentLikes = parseInt(button.textContent.match(/\d+/)[0]);
            currentLikes++;
            button.textContent = `Like (${currentLikes})`;
        });
    });

    // You can add more complex JS here later, e.g., dynamically adding cards
    // For the Git training, simple HTML/CSS changes will be the focus.
});