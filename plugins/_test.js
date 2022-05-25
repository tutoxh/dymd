let limit = 50
import fetch from 'node-fetch'
import { servers, ytv } from '../lib/y2mate'
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command}) => {
   if (!args || !args[0]) throw `✳️ Ejemplo :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  //m.reply('*⌛ _Cargando..._ ▬▬▬▭*')
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  
  try {
  let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 350 : limit) * 3074 < filesize
  
m.reply(isLimit ? ` ≡  *FG MUSIC*

▢ *📌Título* : ${title}
▢ *⚖️Peso* : ${filesizeF}

▢ *El archivo supera el límite de descarga*

*Gratis :*
${limit} mb
▬▬▬▭▭ *300 MB*

*Premium :*
300 mb
▬▬▬▬▬ *300 MB*`: global.wait)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
 ≡  *FG MUSIC*
  
▢ *📌Título* : ${title}
▢ *📟 Ext* : mp4
▢ *⚖️Peso* : ${filesizeF}
`.trim(), m, false, {
  ..._thumb,
  asDocument: chat.useDocument
})
} catch (e) {
    m.reply(`Ocurrió un Error`)
  }
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['downloader']
handler.command = ['goo'] 

handler.limit = true

export default handler

