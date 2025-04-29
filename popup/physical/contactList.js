document.addEventListener('DOMContentLoaded', () => {
    const erufToggle = document.getElementById('erufContactsDD');
    const erufContent = document.getElementById('erufContentsDD');
    const fireToggle = document.getElementById('fireContactsDD');
    const fireContent = document.getElementById('fireContentsDD');
    const policeToggle = document.getElementById('policeContactsDD');
    const policeContent = document.getElementById('policeContentsDD');
    const hospitalToggle = document.getElementById('hospitalContactsDD');
    const hospitalContent = document.getElementById('hospitalContentsDD');
    const erufSVGUp = document.querySelector('.erufSVG.erufSVG_active');
    const erufSVGDown = document.querySelector('.erufSVG:not(.erufSVG_active)');
    const fireSVGUp = document.querySelector('.fireSVG.fireSVG_active');
    const fireSVGDown = document.querySelector('.fireSVG:not(.fireSVG_active)');
    const policeSVGUp = document.querySelector('.policeSVG.policeSVG_active');
    const policeSVGDown = document.querySelector('.policeSVG:not(.policeSVG_active)');
    const hospitalSVGUp = document.querySelector('.hospitalSVG.hospitalSVG_active');
    const hospitalSVGDown = document.querySelector('.hospitalSVG:not(.hospitalSVG_active)');

    erufSVGDown.style.display = 'none';
    erufToggle.addEventListener('click', () => {
        if (erufContent.style.display === 'block') {
            erufContent.style.display = 'none';
            erufSVGUp.style.display = 'block';
            erufSVGDown.style.display = 'none';
        } else {
            erufContent.style.display = 'block';
            erufSVGUp.style.display = 'none';
            erufSVGDown.style.display = 'block';
        }
    });

    fireSVGDown.style.display = 'none';
    fireToggle.addEventListener('click', () => {
        if (fireContent.style.display === 'block') {
            fireContent.style.display = 'none';
            fireSVGUp.style.display = 'block'; 
            fireSVGDown.style.display = 'none';
        } else {
            fireContent.style.display = 'block';
            fireSVGUp.style.display = 'none';
            fireSVGDown.style.display = 'block';
        }
    });

    policeSVGDown.style.display = 'none';
    policeToggle.addEventListener('click', () => {
        if (policeContent.style.display === 'block') {
            policeContent.style.display = 'none';
            policeSVGUp.style.display = 'block';
            policeSVGDown.style.display = 'none';
        } else {
            policeContent.style.display = 'block';
            policeSVGUp.style.display = 'none';
            policeSVGDown.style.display = 'block';
        }
    });

    hospitalSVGDown.style.display = 'none';
    hospitalToggle.addEventListener('click', () => {
        if (hospitalContent.style.display === 'block') {
            hospitalContent.style.display = 'none';
            hospitalSVGUp.style.display = 'block';
            hospitalSVGDown.style.display = 'none';
        } else {
            hospitalContent.style.display = 'block';
            hospitalSVGUp.style.display = 'none';
            hospitalSVGDown.style.display = 'block';
        }
    });
});