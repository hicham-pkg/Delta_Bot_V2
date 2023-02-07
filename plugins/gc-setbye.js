let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*لقد غادرنا هذا الشخص من المجموعة*')
} else throw `* غادرنا هذا الشخص من المجموعة , استخدم:*\n*- @user (menction)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
export default handler
