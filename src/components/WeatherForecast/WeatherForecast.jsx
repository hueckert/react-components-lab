import "./WeatherForecast.css"

const WeatherForecastItem = (props) => {
    const { weatherForecast } = props
    return (
        <section>
            <section className="weather">
                <h2>{weatherForecast.day}</h2>
                <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
                <p><span>Conditions: </span>{weatherForecast.conditions}</p>
                <p><span>Time: </span>{weatherForecast.time}</p>
            </section>
        </section>
    )
}

export default WeatherForecastItem