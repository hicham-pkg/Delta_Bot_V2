let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] enter the @tag of the person you want to remove from premium users*`
    if (!global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] the user entered is not a premium user*'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    let textdelprem = `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} now no longer part of the premium users*`
    m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })
    }
    handler.help = ['delprem <@user>']
    handler.tags = ['owner']
    handler.command = /^(remove|-|del)prem$/i
    handler.group = true
    handler.rowner = true
    export default handler