const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let marah = global.API('https://some-random-api.ml', '/canvas/triggered', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'),
  })
  let stiker = await sticker(false, marah, global.packname, global.author)
  if (stiker) return await conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
  
  throw stiker.toString()
}


handler.help = ['trigger']
handler.tags = ['sticker']
handler.command = ['trigger', 'triggered', 'ger'] 

module.exports = handler
