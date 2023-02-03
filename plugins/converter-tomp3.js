import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] الرد على الفيديو أو الملاحظة الصوتية التي تريد تحويلها إلى صوت / mp3*`
let media = await q.download()
if (!media) throw '*[❗𝐈𝐍𝐅𝐎❗] أنا آسف ، حدث خطأ أثناء تنزيل الفيديو الخاص بك ، يرجى المحاولة مرة أخرى*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻عذرًا ، حدث خطأ أثناء تحويل ملاحظتك الصوتية إلى صوت / mp3 ، يرجى المحاولة مرة أخرى*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(mp3|audio)$/i
export default handler
