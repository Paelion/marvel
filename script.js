function getApiData() {

    const xhr = new XMLHttpRequest();
    const comics = new XMLHttpRequest();
    const series = new XMLHttpRequest();
    const stories = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            info(data)
        }
    }

    comics.onreadystatechange = function () {
        if (comics.readyState === 4) {
            const dataComics = JSON.parse(comics.responseText);
            infoComics(dataComics)
        }
    }

    series.onreadystatechange = function () {
        if (series.readyState === 4) {
            const dataSeries = JSON.parse(series.responseText);
            infoSeries(dataSeries)
        }
    }

    stories.onreadystatechange = function () {
        if (stories.readyState === 4) {
            const dataStories = JSON.parse(stories.responseText);
            infoStories(dataStories)
        }
    }

    xhr.open('GET', 'https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=5397482515fbd8c77303a8c3294b9ffd');
    xhr.send()

    comics.open('GET', 'https://gateway.marvel.com:443/v1/public/characters/1009351/comics?apikey=5397482515fbd8c77303a8c3294b9ffd');
    comics.send()

    series.open('GET', 'https://gateway.marvel.com:443/v1/public/characters/1009351/series?apikey=5397482515fbd8c77303a8c3294b9ffd');
    series.send()

    stories.open('GET', 'https://gateway.marvel.com:443/v1/public/characters/1009351/stories?apikey=5397482515fbd8c77303a8c3294b9ffd');
    stories.send()


}

function info(data){
    console.log(data)
    let show = document.querySelector('.hulk');

    show.innerHTML = '<div>' + data.data.results[0].name + '<br>'+ data.data.results[0].description + '</div>';

}


function infoComics(dataComics){
    console.log(dataComics)
    let showComics = document.querySelector('.comics');
    for (let i = 0; i <  dataComics.data.results.length; i++) {
        showComics.innerHTML += '<div>' + dataComics.data.results[i].title + '</div>';
    }
}

function infoSeries(dataSeries){
    console.log(dataSeries)
    let showSeries = document.querySelector('.series');

    for (let i = 0; i <  dataSeries.data.results.length; i++) {
        showSeries.innerHTML +='<div>'+ dataSeries.data.results[i].title +'</div>';
    }
}

function infoStories(dataStories){
    console.log(dataStories)
    let showStories = document.querySelector('.stories');


    for (let i = 0; i <  dataStories.data.results.length; i++) {
        showStories.innerHTML +='<div>'+ dataStories.data.results[i].title +'</div>';
    }
}


getApiData();
