const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&units=imperial&appid={4fc3489696a2985442c614386e25746d}';
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat={49.75}&lon={6.64}&units=imperial&appid={4fc3489696a2985442c614386e25746d}';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data._________}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data._______}.______`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('_____', ________);
    weatherIcon.setAttribute('____________', _______);
    captionDesc.textContent = `${desc}`;
}

apiFetch();