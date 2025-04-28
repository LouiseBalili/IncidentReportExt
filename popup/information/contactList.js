document.addEventListener('DOMContentLoaded', () => {
    const erufToggle = document.getElementById('erufContactsDD');
    const erufContent = document.getElementById('erufContentsDD');

    erufToggle.addEventListener('click', () => {
        if (erufContent.style.display === 'block') {
            erufContent.style.display = 'none';
        } else {
            erufContent.style.display = 'block';
        }
    });
});