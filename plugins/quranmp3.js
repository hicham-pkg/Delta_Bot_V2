import { quranapi } from '@bochilteam/scraper';
import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] يرجى إدخال اسم السورة باللغة العربية*';
  await m.reply(`*_⏳المرجو الانتظار...⏳_*`);
  try {
    let surahName = args[0];
    let quran = await quranapi.getSurah(surahName);
    let audioUrl = quran.audio;
    let title = quran.title;
    let duration = quran.duration;
    let reciter = quran.reciter.name;
    let thumbnail = quran.thumbnail;
    let filename = `${title}.mp3`;
    let filesize = await fetch(audioUrl).then(res => res.headers.get('content-length'));

    await conn.sendMessage(m.chat, {
      audio: {
        url: audioUrl,
        mimetype: 'audio/mpeg',
        filename,
        duration,
        title,
        performer: reciter
      },
      thumbnail: await fetch(thumbnail).then(res => res.buffer()),
      caption: `▢ السورة: ${title}\n▢ الحجم: ${filesize} bytes\n▢ المدة: ${duration} seconds\n▢ المقرئ: ${reciter}`
    }, { quoted: m });
  } catch (err) {
    console.log(err);
    await conn.reply(m.chat, '*[❗] خطأ لا يمكن تحميل الصوت*', m);
  }
};

handler.command = /^quranmp3?$/i;
export default handler;
