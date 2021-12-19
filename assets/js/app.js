let movies = [
    {
        title: "The Man From Earth 1",
        description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
        poster:
            "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
        isFavourite: true
    },
    {
        title: "The Man From Earth 2",
        description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
        poster:
            "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
        isFavourite: false
    },
    {
        title: "The Man From Earth 3",
        description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
        poster:
            "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
        isFavourite: true
    }
];

const search_text = document.querySelector('.search_text');
search_text.addEventListener('keydown', (event) => {
    if (event.keyCode = 13) {
        
    }
})

// ready movies
function prepareMovies(movies) {
    movies.forEach(movie => {
        let movie_card = document.createElement('movie-card');

        movie_card.setAttribute('title', movie.title);
        movie_card.setAttribute('poster', movie.poster);
        movie_card.setAttribute('isFavourite', movie.isFavourite);
        movie_card.innerHTML = movie.description;

        document.querySelector('#movies').append(movie_card);
    })

    let movie_card = document.createElement('movie-card');

    document.querySelector('#movies').append(movie_card)
}

prepareMovies(movies);
