let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `[❗] tag a person or reply to a message sent by the user you want to ban\n\n*—◉ Exemple:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*[❗𝐈𝐍𝐅𝐎❗] The user was successfully banned*\n*—◉ The user will not be able to use the bot until it is unbanned*')    }
handler.command = /^banuser$/i
handler.rowner = true
export default handler
