import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] Tag a user with the @tag*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗] Enter the amount of experience (xp) you want to add*'
if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] Symbol not allowed, only numbers!*'
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] The minimum number of experience (xp) to add is 1*'
let users = global.db.data.users
users[who].exp += xp
  m.reply(`≡ *xp added*
┌──────────────
▢  *𝚃𝚘𝚝𝚊𝚕:* ${xp}
└──────────────`)
}
handler.command = ['addxp','addexp'] 
handler.rowner = true
export default handler