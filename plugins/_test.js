import webp2mp4 from '../lib/webp2mp4'

let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `✳️ Responde a un sticker con :\n\n*${usedPrefix + command}*`
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw `✳️ Responde a un sticker con :\n\n*${usedPrefix + command}*`
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    }
    await conn.sendFile(m.chat, out, 'out.gif', '', m, false, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
}
handler.help = ['togif <sticker>']
handler.tags = ['sticker']
handler.command = ['togif']

export default handler
