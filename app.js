document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            let currentLikes = parseInt(button.textContent.match(/\d+/)[0]);
            currentLikes++;
            button.textContent = `Like (${currentLikes})`;
        });
    });
    
    // Add a button in HTML first, then this logic:
    const themeBtn = document.createElement('button');
    themeBtn.innerText = "🌙 Toggle Dark Mode";
    themeBtn.className = "theme-toggle";
    document.querySelector('header').appendChild(themeBtn);

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

});