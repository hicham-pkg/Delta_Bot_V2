import fetch from "node-fetch";
import translate from "@vitalets/google-translate-api";

let handler = async (m, { conn, text, args }) => {
  if (!args[0]) {
    throw `*[❗] Enter the name of the APK file you want to search for*`;
  }

  try {
    let enc = encodeURIComponent(text);
    let json = await fetch(
      `https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`
    );
    let gPlay = await json.json();

    let delta = await translate(`${gPlay.descripcion}`, {
      to: "en",
      autoCorrect: true,
    });

    if (!gPlay.titulo) {
      return m.reply(`[ ! ] No results`);
    }

    conn.sendMessage(
      m.chat,
      {
        image: { url: gPlay.image },
        caption: `🔍 Result: ${gPlay.titulo}
🧬 ID: ${gPlay.id}
⛓️ Link: ${gPlay.link}
🖼️ Image: ${gPlay.image}
✍️ Developer: ${gPlay.desarrollador}
📜 Description: ${delta.text}
💲 Currency: ${gPlay.moneda}
🎭 Free?: ${gPlay.gratis}
💸 Price: ${gPlay.precio}
📈 Rating: ${gPlay.puntuacion}`,
      },
      { quoted: m }
    );
  } catch (error) {
    console.log(error);
    await m.reply("*[❗] Error, please try again*");
  }
};

handler.help = ["playstore <application>"];
handler.tags = ["internet"];
handler.command = /^(playstore)$/i;

export default handler;
