document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50 && rect.bottom > 50) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections();
});

document.addEventListener("DOMContentLoaded", function() {
    let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 1; // Check if 'counter' exists in localStorage, otherwise initialize it to 1
    console.log(`The page has been reloaded for ${counter} times`); // Log the current counter value
    counter++; // Increment the counter
    localStorage.setItem('counter', counter); // Save the updated counter back to localStorage
});

