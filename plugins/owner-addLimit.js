import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] tag a user with the @tag*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗] Enter the amount of diamonds you want to add*'
if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] Symbol not allowed, only numbers!*'
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] The minimum number of diamonds to add is 1*'
let users = global.db.data.users
users[who].limit += dmt
m.reply(`≡ *💎 added*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
}
handler.command = ['adddiamonds','addd','give','givediamonds'] 
handler.rowner = true
export default handler
