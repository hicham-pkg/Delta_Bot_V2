let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
    const sections = [
    {
    title: `Ｏｐｔｉｏｎ ｌｉｓｔ`,
    rows: [
    {title: "✨ | Welcome", description: "Turn group welcome on or off", rowId: `${usedPrefix + command} welcome`},
    {title: "🌎 | Mode Public", description: "becomes public and/or private", rowId: `${usedPrefix + command} public`},
    {title: "🔗 | Antilink", description: "activate or deactivate the anti links of whatsapp groups", rowId: `${usedPrefix + command} antilink`},   
    {title: "🔗 | Antilink 2", description: "activate or deactivate the anti links that start in https", rowId: `${usedPrefix + command} antilink2`},    
    {title: "🔎 | Detect", description: "activate or deactivate notifications of new modifications in a group", rowId: `${usedPrefix + command} detect`},      
    {title: "❗ | Restrict", description: "turn restrictions on removing people from groups on or off", rowId: `${usedPrefix + command} restrict`},    
    {title: "☑️ | Autoread", description: "Automatically marks conversations as read", rowId: `${usedPrefix + command} autoread`},
    {title: "🔊 | Audio", description: "enable or disable audio commands without prefix", rowId: `${usedPrefix + command} audio`},
    {title: "👾 | Autosteaker", description: "all images, videos or links sent become stickers", rowId: `${usedPrefix + command} autosticker`},
    {title: "💬 | Pconly", description: "the bot will only respond to commands if it is a private chat", rowId: `${usedPrefix + command} pconly`},
    {title: "🏢 | Gconly", description: "the bot will only respond to commands if it is in group", rowId: `${usedPrefix + command} gconly`},
    {title: "❌ | Antiviewonce", description: "activate or deactivate the anti see only once", rowId: `${usedPrefix + command} antiviewonce`},
    {title: "📵 | Anti-Call", description: "activate or deactivate the anti call", rowId: `${usedPrefix + command} anticall`},
    {title: "💬 | Anti-private", description: "the bot will block users who speak to the private", rowId: `${usedPrefix + command} antiprivate`},
    {title: "🤬 | Antitoxic", description: "activate or deactivate the anti bad word", rowId: `${usedPrefix + command} antitoxic`},
    {title: "🕸️ | Antilock", description: "Activates or deactivates the anti-lock", rowId: `${usedPrefix + command} antilock`}, 
    {title: "🤖 | ModeJadibot", description: "enable or disable command for sub bots (#𝚂𝙴𝚁𝙱𝙾𝚃 / #𝙹𝙰𝙳𝙸𝙱𝙾𝚃)", rowId: `${usedPrefix + command} modejadibot`}, 
    {title: "👑 | Modeadmin", description: "the bot will only respond to group admins", rowId: `${usedPrefix + command} modoadmin`}, 
    {title: "😃 | simsimi", description: "enable or disable the bot to speak in chat using simsimi ai", rowId: `${usedPrefix + command} simsimi`},
    ]}, ]
    //let name = await conn.getName(m.sender)
    const listMessage = {
    text: ' ',
    footer: `┏━━━━━━━━━━━━━┓
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *welcome*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *welcome*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *public*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *public*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink2*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink2*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *detect*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *detect*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *restrict*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *restrict*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *pconly*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *pconly*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *gconly*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *gconly*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *autoread*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *autoread*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *audio*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *audio*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiviewonce*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiviewonce*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *autosticker*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *autosticker*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *anticall*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *anticall*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiprivate*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiprivate*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitoxic*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitoxic*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilock*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilock*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *modejadibot*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *modejadibot*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *modoadmin*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *modoadmin*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}enable *simsimi*_
    ┣ ඬ⃟ℹ️ _${usedPrefix}disable *simsimi*_
    ┗━━━━━━━━━━━━━┛`,
    title: null,
    buttonText: "Ｓｅｌｅｃｔ ｈｅｒｅ",
    sections }
    
    let isEnable = /true|enable|(turn)?on|1/i.test(command)
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[conn.user.jid] || {}
    let type = (args[0] || '').toLowerCase()
    let isAll = false, isUser = false
    switch (type) {
    case 'welcome':
    if (!m.isGroup) {
    if (!isOwner) {
    global.dfail('group', m, conn)
    throw false
    }
    } else if (!(isAdmin || isOwner || isROwner)) {
    global.dfail('admin', m, conn)
    throw false
    }
    chat.welcome = isEnable
    break
    case 'detect':
    if (!m.isGroup) {
    if (!isOwner) {
    global.dfail('group', m, conn)
    throw false
    }
    } else if (!isAdmin) {
    global.dfail('admin', m, conn)
    throw false
    }
    chat.detect = isEnable
    break
    case 'simsimi':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.simi = isEnable
    break    
    case 'delete':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.delete = isEnable
    break
    case 'antidelete':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.delete = !isEnable
    break
    case 'public':
    isAll = true
    if (!isROwner) {
    global.dfail('rowner', m, conn)
    throw false
    }
    global.opts['self'] = !isEnable
    break
    case 'antilink':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.antiLink = isEnable
    break
    case 'antilink2':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.antiLink2 = isEnable 
    break
    case 'antiviewonce':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.antiviewonce = isEnable 
    break
    case 'modoadmin':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.modoadmin = isEnable          
    break    
    case 'autosticker':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.autosticker = isEnable          
    break
    case 'audio':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.audio = isEnable          
    break
    case 'restrict':
    isAll = true
    if (!isOwner) {
    global.dfail('owner', m, conn)
    throw false
    }
    bot.restrict = isEnable
    break
    case 'nyimak':
    isAll = true
    if (!isROwner) {
    global.dfail('rowner', m, conn)
    throw false
    }
    global.opts['nyimak'] = isEnable
    break
    case 'autoread':
    isAll = true
    if (!isROwner) {
    global.dfail('rowner', m, conn)
    throw false
    }
    global.opts['autoread'] = isEnable
    break
    case 'pconly':
    case 'privateonly':
    isAll = true
    if (!isROwner) {
    global.dfail('rowner', m, conn)
    throw false
    }
    global.opts['pconly'] = isEnable
    break
    case 'gconly':
    case 'grouponly':
    isAll = true
    if (!isROwner) {
    global.dfail('rowner', m, conn)
    throw false
    }
    global.opts['gconly'] = isEnable
    break
    case 'swonly':
    case 'statusonly':
    isAll = true
    if (!isROwner) {
    global.dfail('rowner', m, conn)
    throw false
    }
    global.opts['swonly'] = isEnable
    break
    case 'anticall':
    isAll = true
    if (!isROwner) {
    global.dfail('rowner', m, conn)
    throw false
    }
    bot.antiCall = isEnable
    break
    case 'antiprivate':
    isAll = true
    if (!isROwner) {
    global.dfail('rowner', m, conn)
    throw false
    }
    bot.antiPrivate = isEnable
    break
    case 'modejadibot':
    isAll = true
    if (!isROwner) {
    global.dfail('rowner', m, conn)
    throw false
    }
    bot.modejadibot = isEnable
    break        
    case 'antitoxic':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.antiToxic = isEnable
    break
    case 'antilock':
    if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }}
    chat.antilock = isEnable
    break
    default:
    if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
    throw false
    }
    conn.sendButton(m.chat, `🗂️ ᴏᴘᴛɪᴏɴ: ${type} 
    🎚️ 𝐬𝐭𝐚𝐭𝐞: ${isEnable ? 'ａｃｔｉｖａｔｅｄ' : 'Ｄｅａｃｔｉｖａｔｅｄ'}
    📣 𝗳𝗼𝗿: ${isAll ? 'ᴛʜɪꜱ ʙᴏᴛ' : isUser ? '' : '𝘁𝗵𝗶𝘀 𝗰𝗵𝗮𝘁'}`, wm2, null, [[`${isEnable ? '✖️ 𝗗𝗲𝗮𝗰𝘁𝗶𝘃𝗮𝘁𝗲 ✖️' : '✔️ 𝗔𝗰𝘁𝗶𝘃𝗮𝘁𝗲 ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`]], m)}
    handler.help = ['en', 'dis'].map(v => v + 'able <option>')
    handler.tags = ['group', 'owner']
    handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
    export default handler