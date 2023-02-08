let handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true
  m.reply(
    "*[❗𝐈𝐍𝐅𝐎❗] this chat was successfully banned*\n\n*—◉ the bot will not react to any command until you unban this chat*"
  )
}
handler.help = ["banchat"]
handler.tags = ["owner"]
handler.command = /^banchat$/i
handler.rowner = true
export default handler
