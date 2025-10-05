document.addEventListener('DOMContentLoaded', () => {

    // --- NEW: FILTERING LOGIC ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Set the active class on the clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.dataset.filter;

            // 2. Filter the cards
            productCards.forEach(card => {
                const cardCategory = card.dataset.category;
                
                // If the filter is 'all' or the card's category matches the filter, show it. Otherwise, hide it.
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // --- EXISTING: SCROLL ANIMATION LOGIC ---
    // This part remains the same. It will animate any cards that are visible.
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    productCards.forEach(card => {
        observer.observe(card);
    });

});