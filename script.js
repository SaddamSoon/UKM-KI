document.addEventListener('DOMContentLoaded', function () {
    function handleScroll() {
        const elements = document.querySelectorAll('.visi-row, .misi-row');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll handler on page load
});
