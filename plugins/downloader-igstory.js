import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `[❗𝐈𝐍𝐅𝐎❗] enter the name of an instagram user*\n\n*Exemple:*\n*${usedPrefix + command} joe_hattab`
  await m.reply(global.wait)
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=your_lolhuman_api_key`)
  var anu = await res.json()
  var anuku = anu.result
  if (anuku == '') return m.reply('*[❗] invalid user or no stories*')
  for (var i of anuku) {
    let res = await axios.head(i)
    let mime = res.headers['content-type']
    if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply('*[❗] invalid user or no stories*')})
    if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply('*[❗] invalid user or no stories*')})
  }
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['instastory', 'igs']
export default handler
