
import { Facebook } from 'xfarr-api'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n*${usedPrefix + command}* https://fb.watch/aYv0jAffAO/`
  if (!args[0].match(/(https:\/\/.www.facebook.com || fb.watch)/gi)) throw `*Link salah! Perintah ini untuk mengunduh media facebook dengan link*\n\ncontoh:\n${usedPrefix + command} https://fb.watch/aYv0jAffAO/`
  await m.reply(wait)
  
      let b = await Facebook(args[0])
     let { title, thumbnail, duration, source, medias } = b
     let { url, quality, extension, size, formattedSize  } = medias[0]
     let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
     let sell = `🎬 *Facebook MP4*\n\n✨ *Quality:* ${quality}\n🎚 *Size:* ${formattedSize}\n🚀 *Link:* ${urlshort}`
  //   conn.sendMedia(m.chat, url, null, {caption: sell, mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer()})
     conn.sendFile(m.chat, url, 'fb.mp4', sell, m)
      
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((fb|facebook)(d(own)?l(oad)?(er)?)?(mp4)?)$/i

handler.limit = true


export default handler
