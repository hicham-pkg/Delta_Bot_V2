import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
try {  
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
conn.reply(m.chat, stdout.toString(), m)}
} catch {
var update = execSync('git remote set-url origin https://github.com/hicham-pkg/Delta_Bot_V1.git && git pull')
await m.reply(update.toString())
}}
handler.help = ['update']
handler.tags = ['owner']
handler.command = /^update|actualizar$/i
handler.rowner = true
<<<<<<< HEAD
export default handler
=======
export default handler
>>>>>>> 8caf0c40cce19f5259c7e8aae096b236ce698bfc
