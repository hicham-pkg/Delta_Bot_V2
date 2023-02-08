let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] أدخل علامة @ الخاصة بالشخص الذي تريد إضافته إلى المستخدمين المميزين*`
    if (global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] المستخدم الذي قام بتسجيل الدخول هو بالفعل مستخدم متميز*'
    global.prems.push(`${who.split`@`[0]}`)
    let textprem = `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} أنت الآن مستخدم متميز ، ولن يكون لديك حدود عند استخدام الروبوت*`
    m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
    }
    handler.help = ['addprem <@user>']
    handler.tags = ['owner']
    handler.command = /^(add|\+)prem$/i
    handler.group = true
    handler.rowner = true
    export default handler