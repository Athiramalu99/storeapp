// Get the department dropdown element
const departmentDropdown = document.getElementById('departmentDropdown');

// Add event listener to detect dropdown changes
departmentDropdown.addEventListener('change', () => {
    // Get the selected department value
    const selectedDepartment = departmentDropdown.value;

    // Redirect to the corresponding Wikipedia page
    if (selectedDepartment) {
        window.location.href =
                    'https://en.wikipedia.org/wiki/Science',
                    'https://en.wikipedia.org/wiki/Commerce',
                    'https://en.wikipedia.org/wiki/The_arts',
                    'https://en.wikipedia.org/wiki/Music',
                    'https://en.wikipedia.org/wiki/Musical_instrument';
    }
});
