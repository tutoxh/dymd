import { Tiktok } from 'xfarr-api'
import { tiktok } from '../lib/scrape'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZGJBtcsDq/`
  if (!args[0].match(/tiktok/gi)) throw `link incorrecto`
   await m.reply(wait)
  
  const tt = `https://telegra.ph/file/71642ff8811e2a2cdc79d.jpg`
  try {
  var anu = await Tiktok(args[0])
  var { url, title, thumbnail, duration, source, medias } = anu
  var { quality, extension, size, formattedSize, } = anu.medias[0]
  var sel = `📼 *Tiktok Downloader*
  
📌 *Title:* ${title}
⏱️ *Duration:* ${duration}
✨ *Quality:* ${quality}
🗃 *Extension:* ${extension}
🎚 *Size:* ${formattedSize}
`
  //conn.sendBV(m.chat, cap, global.wm, medias[0].url, [[`No WM`, `.tiktoknowm ${args[0]}`], [`Audio`, `.tiktokaudio ${args[0]}`]], null, {mentions: [m.sender]})
  await conn.sendFile(m.chat, medias[0].url, 'tk.mp4', sel, m) 
  } catch {
    try {
    var anuu = await tiktok(args[0])
    var { nowm, wm, audio } = anuu
    //conn.sendBV(m.chat, cap, global.wm, wm, [[`No WM`, `.tiktoknowm ${args[0]}`], [`Audio`, `.tiktokaudio ${args[0]}`]], 0, {mentions: [m.sender]})
    await conn.sendFile(m.chat, wm, 'tk.mp4', `✅ Aquí `, m) 
  } catch {
    throw `❎ Error` 
   }
 }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(wm)?(dl)?(down(load)?(er)?)?$/i

handler.limit = true

export default handler
