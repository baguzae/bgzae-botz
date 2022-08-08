let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zacros.my.id/asupan/random', 'asupan.mp4', '© 𝕭𝖆𝖌𝖚𝖟𝖆𝖊 nih asupannya kak jangan lupa subscribe channel https://m.youtube.com/c/ranzstars', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']

handler.command = /^(asupan)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler
