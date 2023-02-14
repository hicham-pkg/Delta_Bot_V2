

let handler = async (m, { conn, isAdmin }) => {  
    if (m.fromMe) return
    if (isAdmin) throw '*[❗] Hello creator, how are you? you are already admin of this group*'
    try {  
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
    } catch {
    await m.reply('*[❗] error, it was not possible to give admin*')}}
    handler.command = /^autoadmin$/i
    handler.rowner = true
    handler.group = true
    handler.botAdmin = true
    export default handler