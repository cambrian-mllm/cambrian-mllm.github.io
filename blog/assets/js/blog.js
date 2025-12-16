// TPU Training Blog JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('TPU Training Blog loaded');
    
    // Add click handlers for post cards
    const postCards = document.querySelectorAll('.post-card:not(.coming-soon)');
    postCards.forEach(card => {
        card.addEventListener('click', function() {
            const postLink = this.getAttribute('data-post-link');
            if (postLink) {
                window.location.href = postLink;
            }
        });
    });
});

// Utility function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}


