import fg from "api-dylux"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from "@bochilteam/scraper"
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text)
    throw `*[❗𝐈𝐍𝐅𝐎❗] رابط tiktok مفقود ، يرجى إدخال رابط أي فيديو tiktok*\n\n*—◉ مثال:*\n*${
      usedPrefix + command
    }* https://vm.tiktok.com/ZMYYLtsdN/`
  if (
    !/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)
  )
    throw `*[❗𝐈𝐍𝐅𝐎❗] رابط tiktok مفقود ، يرجى إدخال رابط أي فيديو tiktok*\n\n*—◉ مثال:*\n*${
      usedPrefix + command
    }* https://vm.tiktok.com/ZMYYLtsdN/`
  let texto = `*[❗] @${
    m.sender.split`@`[0]
  } انتظر لحظة بينما أرسل فيديو تيكوتوك الخاص بك*`
  try {
    let aa = { quoted: m, userJid: conn.user.jid }
    let prep = generateWAMessageFromContent(
      m.chat,
      {
        extendedTextMessage: {
          text: texto,
          contextInfo: {
            externalAdReply: {
              title: "ᴛʜᴇ ᴅᴇʟᴛᴀ - ʙᴏᴛ",
              body: null,
              thumbnail: image1,
              sourceUrl: "https://i.ibb.co/k1mzvps/DeltaBot.jpg",
            },
            mentionedJid: [m.sender],
          },
        },
      },
      aa
    )
    conn.relayMessage(m.chat, prep.message, {
      messageId: prep.key.id,
      mentions: [m.sender],
    })
    let p = await fg.tiktok(args[0])
    let buttons = [
      {
        buttonText: { displayText: "♫ 𝙰𝚄𝙳𝙸𝙾 ♫" },
        buttonId: `${usedPrefix}tomp3`,
      },
    ]
    let te = `*𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴:* ${p.author || "غير معرف"}`
    await conn.sendMessage(
      m.chat,
      { video: { url: p.nowm }, caption: te, footer: wm, buttons },
      { quoted: m }
    )
  } catch {
    try {
      let aa2 = { quoted: m, userJid: conn.user.jid }
      let prep = generateWAMessageFromContent(
        m.chat,
        {
          extendedTextMessage: {
            text: texto,
            contextInfo: {
              externalAdReply: {
                title: "ᴛʜᴇ ᴅᴇʟᴛᴀ - ʙᴏᴛ",
                body: null,
                thumbnail: image1,
                sourceUrl: "https://i.ibb.co/k1mzvps/DeltaBot.jpg",
              },
              mentionedJid: [m.sender],
            },
          },
        },
        aa2
      )
      conn.relayMessage(m.chat, prep.message, {
        messageId: prep.key.id,
        mentions: [m.sender],
      })
      const {
        author: { nickname },
        video,
        description,
      } = await tiktokdl(args[0])
        .catch(async (_) => await tiktokdlv2(args[0]))
        .catch(async (_) => await tiktokdlv3(args[0]))
      const url =
        video.no_watermark2 ||
        video.no_watermark ||
        "https://tikcdn.net" + video.no_watermark_raw ||
        video.no_watermark_hd
      let buttons = [
        {
          buttonText: { displayText: "♫ 𝙰𝚄𝙳𝙸𝙾 ♫" },
          buttonId: `${usedPrefix}tomp3`,
        },
      ]
      let cap = `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname || "Undefined"}`
      await conn.sendMessage(
        m.chat,
        { video: { url: url }, caption: cap, footer: wm, buttons },
        { quoted: m }
      )
    } catch {
      throw `*[❗𝐈𝐍𝐅𝐎❗] أنا آسف ، حدث خطأ أثناء تنزيل الفيديو الخاص بك ، يرجى المحاولة مرة أخرى*`
    }
  }
}
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i
export default handler
