let handler = async (m, { conn, text}) => {
    if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] Enter the @tag of any user*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] Enter the @tag of any user*'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] The user was successfully unbanned*\n*—◉ The user can now use the bot*`, m)
    }
    handler.help = ['unbanuser']
    handler.tags = ['owner']
    handler.command = /^unbanuser$/i
    handler.rowner = true
    export default handler