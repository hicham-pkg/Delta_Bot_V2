import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*[โ๐๐๐๐โ] Write the name of your country or city*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "ยฐC"
const Minimum_Temperature = res.data.main.temp_min + "ยฐC"
const Maximum_Temperature = res.data.main.temp_max + "ยฐC"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `ใ ๐ ใPlace: ${name}\nใ ๐บ๏ธ ใCountry: ${Country}\nใ ๐ค๏ธ ใTime: ${Weather}\nใ ๐ก๏ธ ใTemperature: ${Temperature}\nใ ๐  ใ Minimum temperature: ${Minimum_Temperature}\nใ ๐ ใ Maximum temperature: ${Maximum_Temperature}\nใ ๐ฆ ใHumidity: ${Humidity}\nใ ๐ฌ๏ธ ใ Wind: ${Wind}`
m.reply(wea)
} catch {
return "*[โ๐๐๐๐โ] No results found, check that you have spelled your country or city correctly*"}}
handler.help = ['weather *<city/country>*']
handler.tags = ['tools']
handler.command = /^(climate|weather|temperature)$/i
export default handler