let handler = async (m, { conn }) => {
  if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
  let vn = "./media/a.mp3"
  conn.sendPresenceUpdate("recording", m.chat)
  conn.sendMessage(
    m.chat,
    {
      audio: { url: vn },
      seconds: "1934.4",
      ptt: true,
      mimetype: "audio/mpeg",
      fileName: `a.mp3`,
    },
    { quoted: m }
  )
}
handler.customPrefix = /ª|a|salam|A/
handler.command = /^(a|salam|ª|A?$)/
export default handler

/*
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/a.mp3'
conn.sendPresenceUpdate('recording', m.chat)  
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": `👑 The Delta - Bot 👑`, "body": `=> ᴀᴜᴅɪᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴏ`, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": image1, "sourceUrl": `https://github.com/hicham-pkg/Delta_Bot_V2`, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/
export default handler
*/
