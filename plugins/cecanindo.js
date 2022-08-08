let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), '© 𝕭𝖆𝖌𝖚𝖟𝖆𝖊 Nih Cecan Indo nya Jgn lupa subscribe Channel https://m.youtube.com/c/ranzstars', wm, 'NEXT', '.cecanindo', m)
}

handler.help = ['cecanindo']
handler.tags = ['asupan']
handler.command = /^(cecanindo)$/i
handler.limit = 3
module.exports = handler

