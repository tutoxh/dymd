import { Tiktok } from 'xfarr-api'
import { tiktok } from '../lib/scrape'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
  if (!text) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZGJBtcsDq/`
  if (!args[0].match(/tiktok/gi)) throw `link incorrecto`
   await m.reply(wait)
  
  let anu = await Tiktok(args[0])
  let { url, title, thumbnail, duration, source, medias } = anu
  let { quality, extension, size, formattedSize, } = anu.medias[0]
  let sel = `📼 *Tiktok Downloader*
  
📌 *Title:* ${title}
⏱️ *Duration:* ${duration}
✨ *Quality:* ${quality}
🗃 *Extension:* ${extension}
🎚 *Size:* ${formattedSize}
`
 conn.sendFile(m.chat, medias[0].url, 'tk.mp4', sel, m) 

}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = ['tes'] 

handler.limit = true

export default handler
