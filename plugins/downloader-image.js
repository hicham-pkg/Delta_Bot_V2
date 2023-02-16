import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Command Usage Example ${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
let captionn = `🔎 *Result of:* ${text}\n🔗 *Link* ${link}\n🌎 *Seeker:* Google`
conn.sendButton(m.chat, captionn, author, link, [['🔄 Following 🔄', `#image ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|images)$/i
export default handler