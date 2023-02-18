let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*[❗] Enter text to create an image, thus using the Dall-E function*\n\n*—◉ Examples of petitions*\n*◉ ${usedPrefix + command} crying kittens*\n*◉ ${usedPrefix + command} Big dogs*`
    try {
    m.reply('*[❗] Wait a moment while I send what you asked for*')
    let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
    await conn.sendFile(m.chat, tiores.data, null, null, m)
    } catch {
    throw `*[❗] Error, try again*`
    }}
    handler.command = ['dall-e', 'dalle', 'ai2', 'cimg', 'openai2']
    export default handler