let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] أدخل اسم مستخدم instagram*\n\n*مثال:*\n*${usedPrefix + command} cristiano
  *`
  await m.reply(global.wait)    
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`)
  var anu = await res.json()
  var anuku = anu.result
  if (anuku == '') return m.reply('*[❗] Invalid user or no stories*')  
  for (var i of anuku) {
  let res = await axios.head(i)
  let mime = res.headers['content-type']
  if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply('*[❗] Invalid user or no stories*')})
  if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply('*[❗] Invalid user or no stories*')})
  }}
  handler.help = ['igstory <username>']
  handler.tags = ['downloader']
  handler.command = ['igstory', 'instastory' ]
  export default handler