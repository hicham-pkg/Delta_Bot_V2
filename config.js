import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"

global.owner = [
  ["212707400335", "DeltaBOT 𝖡𝖸 Stellar", true],
  ["212707400335", "DeltaBOT 𝖡𝖸 Stellar", true],
  ["212707400335", "DeltaBOT 𝖡𝖸 Stellar", true],
  ["212707400335", "DeltaBOT 𝖡𝖸 Stellar", true],
  ["212707400335", "DeltaBOT 𝖡𝖸 Stellar", true],
  ["212707400335", "DeltaBOT 𝖡𝖸 Stellar", true],
  ["212707400335", "DeltaBOT 𝖡𝖸 Stellar", true],
  ["212707400335", "DeltaBOT 𝖡𝖸 Stellar", true],
  ["212707400335"],
  ["212707400335"],
  //['212707400335'],
  ["212707400335"],
]


global.suittag = ["212707400335"]
global.prems = ["212707400335"]

global.packname = "DELTABOT 𝖡𝖸 ALFA"
global.author = "DELTABOT 𝖡𝖸 ALFA"
global.wm = "DELTABOT 𝖡𝖸 ALFA"
global.igfg = "DELTABOT 𝖡𝖸 ALFA"
global.wait = "*[❗] سوف يتم تلبية طلبكم بعد قليلا المرجو الانتظار قليلا ...*"

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']

global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  "29d4b59a4aa687ca",
  "5LTV57azwaid7dXfz5fzJu",
  "cb15ed422c71a2fb",
  "5bd33b276d41d6b4",
  "HIRO",
  "kurrxd09",
  "ebb6251cc00f9c63",
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ["BrunoSobrino"]

;(global.APIs = {
  xteam: "https://api.xteam.xyz",
  dzx: "https://api.dhamzxploit.my.id",
  lol: "https://api.lolhuman.xyz",
  violetics: "https://violetics.pw",
  neoxr: "https://api.neoxr.my.id",
  zenzapis: "https://zenzapis.xyz",
  akuari: "https://api.akuari.my.id",
  akuari2: "https://apimu.my.id",
  fgmods: "https://api-fgmods.ddns.net",
}),
  (global.APIKeys = {
    "https://api.xteam.xyz": `${keysxteam}`,
    "https://api.lolhuman.xyz": "85faf717d0545d14074659ad",
    "https://api.neoxr.my.id": `${keysneoxr}`,
    "https://violetics.pw": "beta",
    "https://zenzapis.xyz": `${keysxxx}`,
    "https://api-fgmods.ddns.net": "fg-dylux",
  })

global.image1 = fs.readFileSync("./Menu2.jpg")
global.image2 = fs.readFileSync("./src/nuevobot.jpg")
global.image3 = fs.readFileSync("./src/Pre Bot Publi.png")
global.image4 = fs.readFileSync("./Menu.png")

global.mods = []

/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: "🧬 Level",
      limit: "💎 Diamond",
      exp: "⚡ Experience",
      bank: "🏦 Bank",
      diamond: "💎 Diamond",
      health: "❤️ Health",
      kyubi: "🌀 Magic",
      joincount: "🪙 Token",
      emerald: "💚 Emerald",
      stamina: "✨ Energy",
      role: "💪 Range",
      premium: "🎟️ Premium",
      pointxp: "📧 Exp Points",
      gold: "👑 Gold",
      trash: "🗑 Trash",
      crystal: "🔮 crystal",
      intelligence: "🧠 intelligence",
      string: "🕸️ Rope",
      keygold: "🔑 golden key",
      keyiron: "🗝️ iron key",
      emas: "🪅 pinata",
      fishingrod: "🎣 Rod",
      gems: "🍀 gems",
      magicwand: "⚕️ Magic wand",
      mana: "🪄 Spell",
      agility: "🤸‍♂️ Agility",
      darkcrystal: "♠️ Cristal Crystal",
      iron: "⛓️ Iron",
      rock: "🪨 Rock",
      potion: "🥤 Potion",
      superior: "💼 Superior",
      robo: "🚔 Heist",
      upgrader: "🧰 increase improvement",
      wood: "🪵 Wood",
      strength: "🦹‍ ♀️ Force",
      arc: "🏹 Bow",
      armor: "🥼 Armor",
      bow: "🏹 super arc",
      pickaxe: "⛏️ Pickaxe",
      sword: "⚔️ Sword",
      common: "📦 common box",
      uncoommon: "🥡 Uncommon Box",
      mythic: "🗳️ Mythical Box",
      legendary: "🎁 Legendary Box",
      petFood: "🍖 Pet Food",
      pet: "🍱 Pet Box",
      bibitanggur: "🍇 Grapeseed",
      bibitapel: "🍎 apple seed",
      bibitjeruk: "🍊 Semillas de naranja",
      bibitmangga: "🥭 Semilla de Mango",
      bibitpisang: "🍌 Semillas de Plátano",
      ayam: "🐓 Chicken",
      babi: "🐖 Pig",
      Jabali: "🐗 Wild pig",
      bull: "🐃 Bull",
      buaya: "🐊 Crocodile",
      cat: "🐈 Cat",
      centaur: "🐐 Centaur",
      chicken: "🐓 Chicken",
      cow: "🐄 Cow",
      dog: "🐕 Dog",
      dragon: "🐉 Dragon",
      elephant: "🐘 Elephant",
      fox: "🦊 Fox",
      giraffe: "🦒 Giraffe",
      griffin: "🦅 Bird",
      horse: "🐎 Horse",
      kambing: "🐐 Goat",
      kerbau: "🐃 Buffalo",
      lion: "🦁 Lion",
      money: "👾 DeltaCoins",
      monyet: "🐒 Bun",
      panda: "🐼 Panda",
      snake: "🐍 Snake",
      phonix: "🕊️ Phoenix",
      rhinoceros: "🦏 Rhinoceros",
      wolf: "🐺 Wolf",
      tiger: "🐅 Tiger",
      cumi: "🦑 Squid",
      udang: "🦐 Shrimp",
      ikan: "🐟 Fish",
      fideos: "🍝 Noodles",
      ramuan: "🧪 NOVA ingredient",
      knife: "🔪 Knife",
    }
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string))
    if (!results.length) return ""
    else return emot[results[0][0]]
  },
}
global.rpgg = {
  //emoji only
  emoticon(string) {
    string = string.toLowerCase()
    let emott = {
      level: "🧬",
      limit: "💎",
      exp: "⚡",
      bank: "🏦",
      diamond: "💎+",
      health: "❤️",
      kyubi: "🌀",
      joincount: "🪙",
      emerald: "💚",
      stamina: "✨",
      role: "💪",
      premium: "🎟️",
      pointxp: "📧",
      gold: "👑",
      trash: "🗑",
      crystal: "🔮",
      intelligence: "🧠",
      string: "🕸️",
      keygold: "🔑",
      keyiron: "🗝️",
      emas: "🪅",
      fishingrod: "🎣",
      gems: "🍀",
      magicwand: "⚕️",
      mana: "🪄",
      agility: "🤸‍♂️",
      darkcrystal: "♠️",
      iron: "⛓️",
      rock: "🪨",
      potion: "🥤",
      superior: "💼",
      robo: "🚔",
      upgrader: "🧰",
      wood: "🪵",
      strength: "🦹‍ ♀️",
      arc: "🏹",
      armor: "🥼",
      bow: "🏹",
      pickaxe: "⛏️",
      sword: "⚔️",
      common: "📦",
      uncoommon: "🥡",
      mythic: "🗳️",
      legendary: "🎁",
      petFood: "🍖",
      pet: "🍱",
      bibitanggur: "🍇",
      bibitapel: "🍎",
      bibitjeruk: "🍊",
      bibitmangga: "🥭",
      bibitpisang: "🍌",
      ayam: "🐓",
      babi: "🐖",
      Jabali: "🐗",
      bull: "🐃",
      buaya: "🐊",
      cat: "🐈",
      centaur: "🐐",
      chicken: "🐓",
      cow: "🐄",
      dog: "🐕",
      dragon: "🐉",
      elephant: "🐘",
      fox: "🦊",
      giraffe: "🦒",
      griffin: "🦅",
      horse: "🐎",
      kambing: "🐐",
      kerbau: "🐃",
      lion: "🦁",
      money: "👾",
      monyet: "🐒",
      panda: "🐼",
      snake: "🐍",
      phonix: "🕊️",
      rhinoceros: "🦏",
      wolf: "🐺",
      tiger: "🐅",
      cumi: "🦑",
      udang: "🦐",
      ikan: "🐟",
      fideos: "🍝",
      ramuan: "🧪",
      knife: "🔪",
    }
    let results = Object.keys(emott)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string))
    if (!results.length) return ""
    else return emott[results[0][0]]
  },
}
global.rpgshop = {
  //Store
  emoticon(string) {
    string = string.toLowerCase()
    let emottt = {
      exp: "⚡ Experience",
      limit: "💎 Diamond",
      diamond: "💎 Diamond",
      joincount: "🪙Token",
      emerald: "💚 Emerald",
      berlian: "♦️ Jewel",
      kyubi: "🌀 Magic",
      gold: "👑 Gold",
      money: "👾 DeltaCoins",
      tiketcoin: "🎫 Delta Tickers",
      stamina: "✨ Energy",
      potion: "🥤 Potion",
      aqua: "💧 Water",
      trash: "🗑 Trash",
      wood: "🪵 Wood",
      rock: "🪨Rock",
      batu: "🥌 Stone",
      string: "🕸️ String",
      iron: "⛓️ Iron",
      coal: "⚱️ Coal",
      botol: "🍶 Bottle",
      kaleng: "🥫 Can",
      kardus: "🪧 Cardboard",
      eleksirb: "💡 Electricity",
      emasbatang: "〽️ Gold Bar",
      emasbiasa: "🧭 Common Gold",
      rubah: "🦊🌫️ Big Fox",
      sampah: "🗑🌫️ Super Trash",
      serigala: "🐺🌫️ Super Wolf",
      kayu: "🛷 Super Wood",
      sword: "⚔️ Sword",
      umpan: "🪱 Bait",
      healtmonster: "💵 Bills",
      emas: "🪅 Piñata",
      pancingan: "🪝 Hook",
      pancing: "🎣 Fishing Rod",
      common: "📦 Common Box",
      uncoommon: "🥡 Uncommon Box",
      mythic: "🗳️ Mythic Box",
      pet: "📫 Pet Box", //?
      gardenboxs: "💐 Garden Box", //?
      legendary: "🎁 Legendary Box",
      anggur: "🍇 Grape",
      apel: "🍎 Apple",
      jeruk: "🍊 Orange",
      mangga: "🥭 Mango",
      pisang: "🍌 Banana",
      bibitanggur: "🌾🍇 Grape seeds",
      bibitapel: "🌾🍎 Apple seeds",
      bibitjeruk: "🌾🍊 Orange Seeds",
      bibitmangga: "🌾🥭 Mango Seeds",
      bibitpisang: "🌾🍌 Banana seeds",
      centaur: "🐐 Centaur",
      griffin: "🦅 Hail",
      kucing: "🐈 Cat",
      naga: "🐉 Dragon",
      fox: "🦊 Fox",
      kuda: "🐎 Horse",
      phonix: "🕊️ Phoenix",
      wolf: "🐺 Wolf",
      anjing: "🐶 Dog",
      petFood: "🍖 Pet Food", //?
      makanancentaur: "🐐🥩 Centaur food",
      makanangriffin: "🦅🥩 Bird Food",
      makanankyubi: "🌀🥩 Magic Food",
      makanannaga: "🐉🥩 Dragon Food",
      makananpet: "🍱🥩 Pet food",
      makananphonix: "🕊️🥩 Phoenix Food",
    }
    let results = Object.keys(emottt)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string))
    if (!results.length) return ""
    else return emottt[results[0][0]]
  },
}
global.rpgshopp = {
  //Store
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: "⚡",
      limit: "💎",
      diamond: "💎+",
      joincount: "🪙",
      emerald: "💚",
      berlian: "♦️",
      kyubi: "🌀",
      gold: "👑",
      money: "👾",
      tiketcoin: "🎫",
      stamina: "✨",
      potion: "🥤",
      aqua: "💧",
      trash: "🗑",
      wood: "🪵",
      rock: "🪨",
      batu: "🥌",
      string: "🕸️",
      iron: "⛓️",
      coal: "⚱️",
      botol: "🍶",
      kaleng: "🥫",
      kardus: "🪧",
      eleksirb: "💡",
      emasbatang: "〽️",
      emasbiasa: "🧭",
      rubah: "🦊🌫️",
      sampah: "🗑🌫️",
      serigala: "🐺🌫️",
      kayu: "🛷",
      sword: "⚔️",
      umpan: "🪱",
      healtmonster: "💵",
      emas: "🪅",
      pancingan: "🪝",
      pancing: "🎣",
      common: "📦",
      uncoommon: "🥡",
      mythic: "🗳️",
      pet: "📫", //?
      gardenboxs: "💐", //?
      legendary: "🎁",
      anggur: "🍇",
      apel: "🍎",
      jeruk: "🍊",
      mangga: "🥭",
      pisang: "🍌",
      bibitanggur: "🌾🍇",
      bibitapel: "🌾🍎",
      bibitjeruk: "🌾🍊",
      bibitmangga: "🌾🥭",
      bibitpisang: "🌾🍌",
      centaur: "🐐",
      griffin: "🦅",
      kucing: "🐈",
      naga: "🐉",
      fox: "🦊",
      kuda: "🐎",
      phonix: "🕊️",
      wolf: "🐺",
      anjing: "🐶",
      petFood: "🍖", //?
      makanancentaur: "🐐🥩",
      makanangriffin: "🦅🥩",
      makanankyubi: "🌀🥩",
      makanannaga: "🐉🥩",
      makananpet: "🍱🥩",
      makananphonix: "🕊️🥩",
    }
    let results = Object.keys(emotttt)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string))
    if (!results.length) return ""
    else return emotttt[results[0][0]]
  },
}

global.flaaa = [
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
]
//********Time***************
global.d = new Date(new Date() + 3600000)
global.locale = "en"
global.days = d.toLocaleDateString(locale, { weekday: "long" })
global.date = d.toLocaleDateString(locale, {
  day: "numeric",
  month: "numeric",
  year: "numeric",
})
global.month = d.toLocaleDateString(locale, { month: "long" })
global.year = d.toLocaleDateString(locale, { year: "numeric" })
global.time = d.toLocaleString(locale, {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
})

//*****************************
global.wm2 = `▸ ${days} ${date}\n▸ ᴛʜᴇ ᴅᴇʟᴛᴀ - ʙᴏᴛ`
global.gt = "DELTABOT 𝖡𝖸 ALFA"
global.deltabot = "DELTABOT 𝖡𝖸 ALFA"
global.md = "https://github.com/hicham-pkg/Delta_Bot_V1"
global.deltabot = "https://github.com/hicham-pkg/Delta_Bot_V1"
global.waitt = "*[❗]  المرجو الانتظار ...*"
global.waittt = "*[❗] المرجو الانتظار ...*"
global.waitttt = "*[❗] المرجو الانتظار قليلا...*"
global.nomorown = "212707400335"
global.pdoc = [
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/msword",
  "application/pdf",
  "text/rtf",
]
global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"
global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"
global.comienzo = "• • ◕◕════"
global.fin = "════◕◕ • •"
global.botdate = `⫹⫺ Date :  ${moment
  .tz("America/Los_Angeles")
  .format("DD/MM/YY")}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment
  .tz("America/Los_Angeles")
  .format("HH:mm:ss")}` //America/Los_Angeles
global.fgif = {
  key: { participant: "0@s.whatsapp.net" },
  message: {
    videoMessage: {
      title: wm,
      h: `Hmm`,
      seconds: "999999999",
      gifPlayback: "true",
      caption: bottime,
      jpegThumbnail: fs.readFileSync("./Menu.png"),
    },
  },
}
global.multiplier = 99
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
