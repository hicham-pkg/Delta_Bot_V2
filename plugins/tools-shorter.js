import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] Enter a link / url which you want to shorten*'
let shortUrl1 = await (await fetch(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkeysapi}&url=${args[0]}`)).json()
if (!shortUrl1) throw `*[❗] Error, check that the text entered is a text and try again*`
let done = `*Link shortened correctly!!*\n\n*previous link:*\n${text}\n*shortened link:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','shorten'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|shorten|shorter)$/i
handler.fail = null
export default handler