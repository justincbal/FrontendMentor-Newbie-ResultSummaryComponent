const summaryRows = document.querySelector('.summaryRows');

fetch('./data.json')
.then( res => {
    if(!res.ok) {
        throw new Error('Error fetching');
    }

    return res.json();
})
.then(data => {
    data.forEach((d) => {
        const summaryRow = document.createElement('div');
        summaryRow.classList.add('summaryRow');
        summaryRow.style.backgroundColor = d.bg;

        const img = document.createElement('img');
        img.src = d.icon;

        const category = document.createElement('p');
        category.classList.add('category');
        category.textContent = d.category;
        category.style.color = d.text;

        const score = document.createElement('p');
        score.classList.add('score');
        score.textContent = d.score;

        const span = document.createElement('span');
        span.classList.add('dark');
        span.textContent = ' / 100';

        score.appendChild(span);

        summaryRow.appendChild(img);
        summaryRow.appendChild(category);
        summaryRow.appendChild(score);

        summaryRows.appendChild(summaryRow);
    })
})