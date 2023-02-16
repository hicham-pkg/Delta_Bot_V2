import fetch from "node-fetch"
import translate from "@vitalets/google-translate-api"
let handler = async (m, { conn, text, args }) => {
  if (!args[0]) throw `*[❗] أدخل اسم ملف APK الذي تريد البحث عنه*`
  try {
    let enc = encodeURIComponent(text)
    let json = await fetch(
      `https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`
    )
    let gPlay = await json.json()

    let mystic = await translate(`${gPlay.descripcion}`, {
      to: "en",
      autoCorrect: true,
    })
    if (!gPlay.titulo) return m.reply(`[ ! ] بدون نتائج`)
    conn.sendMessage(
      m.chat,
      {
        image: { url: gPlay.image },
        caption: `🔍 نتيجة: ${gPlay.titulo}
🧬 ID: ${gPlay.id}
⛓️ Link: ${gPlay.link}
🖼️ Image: ${gPlay.image}
✍️ developer: ${gPlay.desarrollador}
📜 Description: ${mystic.text}
💲 Currency: ${gPlay.moneda}
🎭 Free?: ${gPlay.gratis}
💸 Price: ${gPlay.precio}
📈 Punctuation: ${gPlay.puntuacion}`,
      },
      { quoted: m }
    )
  } catch {
    await m.reply("*[❗𝐈𝐍𝐅𝐎❗] Error, please try again*")
  }
}
handler.help = ["playstore <aplicacion>"]
handler.tags = ["internet"]
handler.command = /^(playstore)$/i
export default handler
