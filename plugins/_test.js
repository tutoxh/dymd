
//let fs = require('fs')
import { fs } from 'fs'
let handler = async (m, { conn }) => {
	
     let vidg = fs.readFileSync(`./src/mp4/1.mp4`)
	//let vidg = './src/mp4/1.mp4'
	conn.sendFile(m.chat, vidg, 'ldn.gif', '', m, false, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
	m.reply(`_La leyenda dice que si le das_ *doble click* _al gif escucharas la voz del tipo en tu mente._`)
	}
	 
handler.customPrefix = /^linda noche?$/i
handler.command = new RegExp

export default handler
