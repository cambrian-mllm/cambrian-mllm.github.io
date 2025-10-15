document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articles = document.querySelectorAll('.article-list article');
 
 
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
           
            const filter = e.target.getAttribute('data-filter');
           
            // Handle active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
           
            // Filter articles
            articles.forEach(article => {
                const category = article.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
 });
 