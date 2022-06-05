import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw 'El  sticker!'
  let stiker = false
  
  
  try {
  	
  let anu = args.join(" ").split("|");
       let a = anu[0] !== "" ? anu[0] : `🔮 DyLux ┃ ᴮᴼᵀ`;
       let b = typeof anu[1] !== "undefined" ? anu[1] : `💎 @fg98._`;    
    let [packname, ...author] = a.split`|`
    let author = b
  
  
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Responde a un sticker'
    let img = await m.quoted.download()
    if (!img) throw 'Responde a un sticker!'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw 'La conversión falló'
  }
}
handler.help = ['take <nombre>|<autor>']
handler.tags = ['sticker']
handler.command = ['tes'] 

export default handler
