import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[āššššā] Command Usage Example ${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
let captionn = `š *Result of:* ${text}\nš *Link* ${link}\nš *Seeker:* Google`
conn.sendButton(m.chat, captionn, author, link, [['š Following š', `#image ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|images)$/i
export default handler