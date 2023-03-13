import fetch from "node-fetch"
import yts from "yt-search"

async function search(query, options = {}) {
  const search = await yts.search({ query, hl: "en", gl: "US", ...options })
  return search.videos
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g
  const rep = "$1."
  let arr = number.toString().split(".")
  arr[0] = arr[0].replace(exp, rep)
  return arr[1] ? arr.join(".") : arr[0]
}

function secondString(seconds) {
  seconds = Number(seconds)
  var d = Math.floor(seconds / (3600 * 24))
  var h = Math.floor((seconds % (3600 * 24)) / 3600)
  var m = Math.floor((seconds % 3600) / 60)
  var s = Math.floor(seconds % 60)
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : ""
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : ""
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : ""
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : ""
  return dDisplay + hDisplay + mDisplay + sDisplay
}

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text)
    throw `*[❗𝐈𝐍𝐅𝐎❗] Missing song name, please enter the command plus a song name/title*\n\n*—◉ Exemple:*\n*${
      usedPrefix + command
    } Good Feeling - Flo Rida*`
  try {
    const yt_play = await search(args.join(" "))
    let texto1 = `*◉—⌈🔊 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 🔊⌋—◉*\n
❏ 📌 *Title:* ${yt_play[0].title}
❏ 📆 *Published:* ${yt_play[0].ago}
❏ ⌚ *Duration:* ${secondString(yt_play[0].duration.seconds)}
❏ 👀 *Views:* ${`${MilesNumber(yt_play[0].views)}`}
❏ 👤 *Author:* ${yt_play[0].author.name}
❏ ⏯️ *Channel:* ${yt_play[0].author.url}
❏ 🆔 *ID:* ${yt_play[0].videoId}
❏ 🪬 *Tyoe:* ${yt_play[0].type}
❏ 🔗 *Link:* ${yt_play[0].url}`.trim()
    const buttons = [
      {
        buttonId: `#ytmp3 ${yt_play[0].url}`,
        buttonText: { displayText: "🎵 𝐀𝐔𝐃𝐈𝐎 🎵" },
        type: 1,
      },
      {
        buttonId: `#ytmp4 ${yt_play[0].url}`,
        buttonText: { displayText: "🎥 𝐕𝐈𝐃𝐄𝐎 🎥" },
        type: 1,
      },
      {
        buttonId: `#playlist ${text}`,
        buttonText: { displayText: "📋 More results 📋" },
        type: 1,
      },
    ]
    let buttonMessage = {
      document: { url: "https://wa.me/212707400335" },
      fileName: "❏ 🌿 Youtube player",
      mimetype: "application/vnd.ms-excel",
      fileLength: "99999999999999",
      mentions: [m.sender],
      footer: wm,
      buttons: buttons,
      headerType: 4,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true,
      title: `${yt_play[0].title}`,
      mediaType: 2,
      previewType: "VIDEO",
      thumbnailUrl: yt_play[0].image,
      mediaUrl: `${yt_play[0].url}`,
      sourceUrl: `https://i.ibb.co/PG25cp2/Screenshot-20220304-214048.jpg`,
        },
      },
    }
    conn.sendMessage(m.chat, buttonMessage, { quoted: m })
  } catch {
    try {
      let vid2 = await (
        await fetch(
          `https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`
        )
      ).json()
      let { videoId, title, views, published, thumbnail } = await vid2.result[0]
      const url = "https://www.youtube.com/watch?v=" + videoId
      let ytLink = await fetch(
        `https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${text}`
      )
      let jsonn = await ytLink.json()
      let aud = await jsonn.result.audio
      let capt = `❏ 📌 *Title:* ${title}\n❏ 📆 *Published:* ${published}\n❏ 👀 *Views:* ${views}\n❏ 🔗 *Link:* ${url}`
      const buttons = [
        {
          buttonId: `#playlist ${title}`,
          buttonText: { displayText: "📋 More results 📋" },
          type: 1,
        },
      ]
      const buttonMessage = {
        image: { url: thumbnail },
        caption: capt,
        footer: "*Sent audio, wait a moment...*",
        buttons: buttons,
        headerType: 4,
      }
      let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })

      conn.sendMessage(
        m.chat,
        {
          audio: { url: aud },
          mimetype: "audio/mp4",
          fileName: `${title}.mp3`,
        },
        { quoted: msg }
      )
    } catch {
      throw "*[❗𝐈𝐍𝐅𝐎❗] Error, please try again*"
    }
  }
}
handler.help = ["play", "play2"].map((v) => v + " < search >")
handler.tags = ["downloader"]
handler.command = /^play?$/i
export default handler
