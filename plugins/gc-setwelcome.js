let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗]  مرحبا بك  البوت يرحب بك في المجموعة *')
} else throw `*[❗] مرحبا بك في مجموعتنا , 𝚄𝚂𝙴:*\n*- @user (mention)*\n*- @group (group name)*\n*- @desc (group description)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
