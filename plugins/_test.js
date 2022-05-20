
import { Facebook } from 'xfarr-api'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
  if (!text) throw `✳️ Ingrese un link de Facebook\n\n📌 Ejemplo :\n*${usedPrefix + command}* https://fb.watch/d7m6-k23cR/`
  if (!args[0].match(/(https:\/\/.www.facebook.com || fb.watch)/gi)) throw `❎ *Link incorrecto*`
  await m.reply(wait)
   try {
      let b = await Facebook(text)
     let { title, thumbnail, duration, source, medias } = b
     let { url, quality, extension, size, formattedSize  } = medias[0]
     let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
     let fbt = `
┌─⊷ *Facebook MP4*
▢ *🎥 Calidad:* ${quality}
▢ *🎚 Tamaño:* ${formattedSize}
▢ *🔗 Link:* ${urlshort}
└──────────`
    conn.sendFile(m.chat, url, 'fb.mp4', fbt, m)
      } catch { 
     throw `❎ Ocurrió un error `
        }
}
handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = ['fb', 'facebook', 'fbdl'] 

handler.limit = true

export default handler
