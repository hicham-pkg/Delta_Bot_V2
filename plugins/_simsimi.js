import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
let chat = global.db.data.chats[m.chat]
if (chat.simi) {
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
let ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(m.text)}&lc=en`)
let data = await ressimi.json();
//if (data.success == 'I don't know what you're saying. Please teach me.') await m.reply("😵‍💫")                                                                                                 
await m.reply(data.success)
return !0
}
return true
}
export default handler