import { Tiktok } from 'xfarr-api'
import { tiktok } from '../lib/scrape'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
  if (!text) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZGJBtcsDq/`
  if (!args[0].match(/tiktok/gi)) throw `link incorrecto`
   await m.reply(wait)
  
  var anuu = await tiktok(args[0])
    var { nowm, wm, audio } = anuu

    conn.sendFile(m.chat, wm, 'tk.mp4', `✅ Aquí `, m) 
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = ['tes'] 

handler.limit = true

export default handler
