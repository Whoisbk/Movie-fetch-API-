const movies = document.querySelector('.movies-container')
const search_btn = document.querySelector('.Search-btn')
const search_input = document.querySelector('.search-input')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f04a947de1msh064fa249cb1d89fp1ef34ajsn6882198374cf',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

search_btn.addEventListener('click', () => {
    
    let search_text = search_input.value.trim()
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${search_text}`, options)
        .then(response => response.json())
        .then(data => {
            let html = ""
            const lst = ""
            const items = data.d

            items.forEach((i) => {
                console.log(i)
                const img = i.i['imageUrl']
                const Title = i.l
                const year = i.y

                html += `<div class="box">
                <div class="box-img">
                    <img src="${img}" alt="">
                </div>
                <h3>${Title}</h3>
                <span>${year} | Category</span>
            </div>`
            });

            movies.innerHTML = html
        })
        .catch(err => console.error(err));

})

