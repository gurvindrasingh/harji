const button = document.getElementById('Search-button')

const input = document.getElementById('City-input')

const cityname = document.getElementById("City-name")
const citytime = document.getElementById("city-time")
const citytemp = document.getElementById("city-temp")

async function getdata(Cityname) {
   const promise = await fetch (`http://api.weatherapi.com/v1/current.json?key=dd0d566965744a29810153318253005&q=${Cityname}&aqi=yes`)
   return await promise.json()
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getdata(value);
    cityname.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    citytime.innerText = result.location.localtime;
    citytemp.innerText = result.current.temp_c;
})


//http://api.weatherapi.com/v1/current.json?key=dd0d566965744a29810153318253005&q=London&aqi=yes


const LOCbutton = document.getElementById('get-location-button')

   async function getdata(lat, long) {
   const promise = await fetch (`http://api.weatherapi.com/v1/current.json?key=dd0d566965744a29810153318253005&q=${lat},${long}&aqi=yes`)
   return await promise.json()
}
    

   async function gotcurrunt  (position) {
        const result = await getdata(position.coords.latitude, position.coords.longitude);
        console.log(result);
    }

    function didnotgot () {
       alert("not getting")
    }

    LOCbutton.addEventListener('click', async () => {
        navigator.geolocation.getCurrentPosition(gotcurrunt,didnotgot)
    })