let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "sticker by", author: "𝕭𝖆𝖌𝖚𝖟𝖆𝖊 - ϐׁׅ֒ᧁׁzׁׅ֬ ϐׁׅ֒ᨵׁׅtׁׅ ᥎꫶ׁׅ2" })
}

handler.customPrefix = /^(ok|sip)$/i
handler.command = new RegExp

module.exports = handler
