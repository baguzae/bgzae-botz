let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("ulzhang boy","cowok keren","cowok ganteng","cogan","cowok korea").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Â© ð­ðððððð Nih Idaman para ciwiÂ² ð¥¶",m))
   }
    
handler.help = ['cogan']
handler.tags = ['internet']
handler.command = /^(cogan)$/i
handler.limit = true

module.exports = handler