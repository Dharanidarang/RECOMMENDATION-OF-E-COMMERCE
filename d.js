const categories = document.querySelector('.categories');
const leftBtn = document.querySelector('.nav-btn.left');
const rightBtn = document.querySelector('.nav-btn.right');

leftBtn.addEventListener('click', () => {
    categories.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    categories.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

const searchInput = document.getElementById('searchInput');
const categoryItems = document.querySelectorAll('.category-item');

searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.toLowerCase();
    
    categoryItems.forEach(item => {
        const categoryName = item.querySelector('p').textContent.toLowerCase();
        
        if (categoryName.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        categoryItems.forEach(i => i.classList.remove('active'));
        
        item.classList.add('active');
    });
});