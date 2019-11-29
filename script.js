function getApiData() {

    const xhr = new XMLHttpRequest();
    const comics = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            console.log(data)
        }
    }

    comics.onreadystatechange = function () {
        if (comics.readyState === 4) {
            const data2 = JSON.parse(comics.responseText);
            console.log(data2)
        }
    }

    xhr.open('GET', 'https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=5397482515fbd8c77303a8c3294b9ffd');
    xhr.send()

    comics.open('GET', 'https://gateway.marvel.com:443/v1/public/characters/1009351/comics?apikey=5397482515fbd8c77303a8c3294b9ffd');
    comics.send()


}

    let show = document.querySelector('.hulk');
    show.innerHTML = '<div></div>';


getApiData();
