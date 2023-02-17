import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] Enter a request or an order to use the Chatgpt function*\n\n*—◉ Examples of Petitions and Orders*\n*◉ ${usedPrefix + command} How do I make an HTTP request in Javascript?*\n*◉ ${usedPrefix + command} Got any creative ideas for a 10 year old’s birthday?*`
try {
m.reply('*[❗] Wait a moment and Ill send what you asked for*')
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] Error, try again*`
}}
handler.command = ['openai', 'chatgpt', 'ai', 'robot']
export default handler