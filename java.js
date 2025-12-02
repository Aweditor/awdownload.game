const filter = document.getElementById('filter');
const items = document.querySelectorAll('.content .tab-game');

filter.addEventListener('input', (e) => filterData(e.target.value));

function filterData(search) {
    items.forEach((item) => {
        if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
            item.classList.remove('none');
        } else {
            item.classList.add('none');
        }
    })
}