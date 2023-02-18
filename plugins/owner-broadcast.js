import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*╔══❰ release ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, 'This is an official statement\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 Owner 🤖', '.owner'],['💎 Donate 💎', '.donate']], false, { 
contextInfo: { externalAdReply: {
title: 'official statement to all chats',
body: 'ʙʏ The Delta - Bot', 
sourceUrl: `https://i.ibb.co/k1mzvps/DeltaBot.jpg`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] Message sent to all chats*\n\n*Note: It is possible that this command has errors and is not sent to all chats, sorry for the moment*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler