let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/vietnam'), '© 𝕭𝖆𝖌𝖚𝖟𝖆𝖊 Nih Cecan Vietnam nya Jgn lupa subscribe Channel https://m.youtube.com/c/ranzstars', wm, 'NEXT', '.cecanvietnam', m)
}

handler.help = ['cecanvietnam']
handler.tags = ['asupan']
handler.command = /^(cecanvietnam)$/i
handler.limit = 3

module.exports = handler