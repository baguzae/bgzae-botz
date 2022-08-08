let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/japan'), '© 𝕭𝖆𝖌𝖚𝖟𝖆𝖊 Nih JAV Jgn lupa subscribe Channel https://m.youtube.com/c/ranzstars', wm, 'NEXT', '.cevanjapan', m)
}

handler.help = ['cecanjapan']
handler.tags = ['asupan']
handler.command = /^(cecanjapan)$/i
handler.limit = 3

module.exports = handler