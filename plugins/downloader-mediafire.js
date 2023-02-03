import { mediafiredl } from '@bochilteam/scraper'
import axios from 'axios'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] أدخل رابط ميديافاير صالحًا ، مثال: ${usedPrefix + command} https://www.mediafire.com/file/89302/Delta-Bot_%25442529.zip/file*`
try {
let json = await mediafireDl2(args[0])
let caption = `
*📓 اسم:* ${json[0].nama.replace('+', ' ')}
*📁 حجم:* ${json[0].size}
*📄 𝚃𝙸𝙿𝙾:* ${json[0].mime.toUpperCase()}

*⏳ انتظر بينما أرسل ملفك ...* 
`.trim()   
conn.sendMessage(m.chat, { text: caption, footer: wm }, { quoted: m })
conn.sendMessage(m.chat, { document : { url: json[0].link }, fileName : json[0].nama.replace('+', ' '), mimetype: json[0].mime.toUpperCase() }, { quoted: m })
} catch {  
try {  
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = await res
let caption = `
*📓 اسم:* ${filename}
*📁 حجم:* ${filesizeH}
*📄 𝚃𝙸𝙿𝙾:* ${ext}

*⏳ انتظر بينما أرسل ملفك ...* 
`.trim()
let msg = m.reply(caption)
if (!msg || msg == '') return m.reply(global.wait)
let res2 = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkeysapi}&url=${args[0]}`)
let res3 = await res2.json()
let res4 = await res3.result.link  
if (!url || url == '') url = res4
await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch {  
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] خطأ ، يرجى المحاولة مرة أخرى*\n\n*- تحقق من أن الرابط مشابه*\n*◉ https://www.mediafire.com/file/89302/Delta-Bot_%25442529.zip/file*')
}}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
async function mediafireDl2(url) {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '')
const seplit = link.split('/')
const nama = seplit[5]
let mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil }     