
// set today's date

    $(document).ready(function () {
        const today = new Date();
        const options = {year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString(undefined, options);
        $('#current-date').text(formattedDate);
    });

const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const modeText = document.getElementById('modeText');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.checked = true; 
    modeText.textContent = 'Light Mode'; 
} else {
    modeText.textContent = 'Dark Mode'; 
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        modeText.textContent = 'Light Mode'; 
    } else {
        localStorage.setItem('theme', 'light');
        modeText.textContent = 'Dark Mode'; 
    }
});

