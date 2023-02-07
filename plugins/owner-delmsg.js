let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/eliminar/i, '')
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] USE ${usedPrefix}list${which} to see the list*`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' not registered in the message list*`
    delete msgs[text]
    m.reply(`*[❗𝐈𝐍𝐅𝐎❗] I successfully deleted in the message list the message with the name '${text}'*`)
    }
    handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
    handler.tags = ['database']
    handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
    handler.rowner = true
    export default handler