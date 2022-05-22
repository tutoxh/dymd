import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'


let handler = async (m, { conn, usedPrefix, command}) => {


let pp = 'https://i.ibb.co/V2nDN32/avatar-contact.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {


let { name, exp, limit, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
let username = conn.getName(who)

let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `
┌───「 *PERFIL* 」
▢ *🔖 Nombres:* 
   • ${username} ${registered ? '\n   • ' + name + ' ': ''}
▢ *📱Numero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
▢ *🔗Link:* wa.me/${who.split`@`[0]}${registered ? '\n▢ *🎈Edad*: ' + age + ' años' : ''}
▢ *💎 Diamantes :* ${limit}
▢ *🆙 Nivel* : ${level}
▢ *🥇Rango:* ${role}
▢ *📇 Registrado :* ${registered ? 'Si': 'No'}
▢ *⭐ Premium* : ${prem ? 'Si' : 'No'}
└──────────────`
conn.sendButton(m.chat, str, igfg, await(await fetch(pp)).buffer(), [['👍🏻', ' '], ['🖤', ' ']], m)
/*
  let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { contextInfo: { mentionedJid }})
    */
}}
handler.help = ['perfil @user']
handler.tags = ['group']
handler.command = ['profile', 'perfil'] 
export default handler
