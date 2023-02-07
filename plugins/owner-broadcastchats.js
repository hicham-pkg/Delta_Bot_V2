import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chats) { 
conn.sendButton(id, `*╔══❰ announcement ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, 'this is an official statement\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 Owner 🤖', '.owner'],['💎 to give 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'official announcement to private chats',
body: 'ʙʏ The Delta - Bot', 
sourceUrl: `https://github.com/hicham-pkg/Delta_Bot_V1`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] message sent to ${chats.length} private chats*\n\n*NOTE: It is possible that this command has errors and it is not sent to all the chats, sorry for the moment*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.rowner = true
export default handler