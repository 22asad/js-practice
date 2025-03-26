async function getWeather(){
    let city = document.getElementById("cityInput").value;
    let apiKey = "1fba13040f1d4ba7e9ac43d64beaa08c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{
    const response = await fetch(url);
    if(!response.ok) throw new Error("City not Found");
    const data = await response.json();
    document.getElementById("weather").innerHTML=`
    <p> City: ${data.name}</p>
    <p> Temperature: ${data.main.temp}C </p>
    <p> Condition: ${data.weather[0].description}</p>
    `;
}catch(error){
    document.getElementById("weather").innerHTML=`<p style="color:red";> ${error.message} </p>`;
}
}