import fs from "fs"
import fetch from "node-fetch"
import { xpRange } from "../lib/levelling.js"
const { levelling } = "../lib/levelling.js"
import PhoneNumber from "awesome-phonenumber"
import { promises } from "fs"
import { join } from "path"
let handler = async (
  m,
  { conn, usedPrefix, usedPrefix: _p, __dirname, text }
) => {
  try {
    let vn = "./media/menu.mp3"
    let pp = image4
    let img = await (
      await fetch("https://i.ibb.co/k1mzvps/DeltaBot.jpg")
    ).buffer()
    let d = new Date(new Date() + 3600000)
    let locale = "en"
    let week = d.toLocaleDateString(locale, { weekday: "long" })
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let user = global.db.data.users[m.sender]
    let { money, joincount } = global.db.data.users[m.sender]
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let rtotalreg = Object.values(global.db.data.users).filter(
      (user) => user.registered == true
    ).length
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850)
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0]
    let str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *𝐓𝐡𝐞 𝐃𝐞𝐥𝐭𝐚 - 𝐁𝐨𝐭* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Hello, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Owner:* Stellar Alfa
║➤ *Number:* wa.me/212707400335
║➤ *Bot ofc:* wa.me/212707400335
║➤ *Date:* ${date}
║➤ *active time:* ${uptime}
║➤ *users:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< ᴜꜱᴇʀ ɪɴꜰᴏ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Level:* ${level}
┣ *🧰 Experience:* ${exp}
┣ *⚓ Range:* ${role}
┣ *💎 diamonds:* ${limit}
┣ *👾 DeltaCoins:* ${money}
┣ *🪙 Tokens:* ${joincount}
┣ *🎟️ Premium:* ${(user.premium = "true" ? "✅" : "❌")}
┗━━━━━━━━━━━━━━━━┛
${readMore}

*╭────────────────────*
  Ｄｏｗｎｌｏａｄ

*│*  ⸙ .*apk*  لتحميل تطبيقات

*│*  ⸙ .*insta*  التحميل من الانستغرام

*│*  ⸙ .*igs*  لتحميل ستوري الانستغرام

*│*  ⸙ .*gdrive*  التحميل من غوغل درايف

*│*  ⸙ .*facebook*  للتحميل من الفيسبوك

*│*  ⸙ .*tiktok*  للتحميل من Tiktok

*│*  ⸙ .*ytv*  mp4 التحميل من يوتوب

*│*  ⸙ .*yta*   mp3 التحميل من يوتوب

*│*  ⸙ .*mediafire*  للتحميل من ميديافاير
*╰────────────────────*
*╭────────────────────*
  Ｓｅａｒｃｈ

*│*  ⸙ .*wiki*  البحث في ويكيبيديا

*│*  ⸙ .*yts*  للبحث من اليوتوب   

*│*  ⸙ .*google*  للبحث في Google

*╰────────────────────*
*╭────────────────────*
  Ｃｏｎｖｅｒｔ

*│*  ⸙ .*tts*  تحويل اي نص لاديو

*│*  ⸙ .*tourl*  التحويل الى رابط

*│*  ⸙ .*tomp3* تحويل فيديو الى mp3

*│*  ⸙ .*toimg*  تحويل ملصق الى صورة

*│*  ⸙ .*togifaut*   تحويل فيديو لملصق
*╰────────────────────*
*╭────────────────────*
  Ｓｔｉｃｋｅｒ

*│*  ⸙ .*wm*  حقوق الملصق

*│*  ⸙ .*sfull*  صناعة ملصق كامل 

*│*  ⸙ .*scircle*  ملصق دائري
*╰────────────────────*
*╭────────────────────*
  Ｇｒｏｕｐ

*│*  ⸙ .*Tagall*  الاشارة للكل

*│*  ⸙ .*setwelcome*

*│*  ⸙ .*setbye*
*╰────────────────────*
*╭────────────────────*
  Ｔｏｏｌｓ

*│*  ⸙ .*ss*  لقطة شاشة لصفحة ويب

*│*  ⸙ .*translate*  الترجــــمة الفورية

*│*  ⸙ .*whatsong*  معرفة اسم اي موسيقى

*│*  ⸙ .*ai* Chatgpt ai
*╰────────────────────*
*╭────────────────────*
  Ｏｗｎｅｒ ｃｏｍｍａｎｄｓ

*│*  ⸙ .*infobot*

*│*  ⸙ .*update*

*│*  ⸙ .*cleartmp*

*│*  ⸙ .*addLimit*

*│*  ⸙ .*addprem*

*│*  ⸙ .*delprem*

*│*  ⸙ .*listprem*

*│*  ⸙ .*addxp*

*│*  ⸙ .*banchat-unbanchat*

*│*  ⸙ .*banuser-unbanuser*

*│*  ⸙ .*banlist*

*│*  ⸙ .*block-unblock*

*│*  ⸙ .*blocklist*

*│*  ⸙ .*delmsg*

*│*  ⸙ .*broadcastchats*
*╰────────────────────*
*╰────────────────────*



DeltaBot by Alfa(Stellar)
`.trim()
    let buttons = [
      {
        buttonId: "#donar",
        buttonText: { displayText: "📮 Hicham 📮" },
        type: 1,
      },
      { buttonId: "#owner", buttonText: { displayText: "🌹 ♥ 🌹" }, type: 1 },
    ]
    //{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
    let buttonMessage = {
      image: pp,
      caption: str.trim(),
      mentions: [m.sender],
      footer: `*${wm}*`,
      buttons: buttons,
      headerType: 4,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          mediaType: "VIDEO",
          mediaUrl: null,
          title: "DeltaBot",
          body: null,
          thumbnail: img,
          sourceUrl: `https://i.ibb.co/k1mzvps/DeltaBot.jpg`,
        },
      },
    }
    conn.sendMessage(m.chat, buttonMessage, { quoted: m })
    //await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
  } catch {
    conn.reply(
      m.chat,
      "*[❗معلومة❗] القائمة بها خطأ ولم يكن من الممكن إرسالها ، المرجو إبلاغ صاحب البوت بها*",
      m
    )
  }
}
handler.command =
  /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":")
}
