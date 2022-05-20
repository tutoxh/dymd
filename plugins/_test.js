import { Tiktok } from 'xfarr-api'
import { tiktok } from '../lib/scrape'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
  if (!text) throw `uhm.. url nya mana?\n\`
  if (!args[0].match(/tiktok/gi)) throw `link incorrecto`
   await m.reply(wait)
  
  //try {
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
  
 conn.sendFile(m.chat, medias[0].url, 'tk.mp4', sel, m) 
 /*} catch {
    try {
    var anuu = await tiktok(args[0])
    var { nowm, wm, audio } = anuu

    conn.sendFile(m.chat, wm, 'tk.mp4', `✅ Aquí `, m) 
  } catch {
    throw `❎ Error` 
   }
   
 }*/
 
 
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = ['tes'] 

handler.limit = true

export default handler
