let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/cecan'), '© 𝕭𝖆𝖌𝖚𝖟𝖆𝖊 Nih Cecan Santuy nya Jgn lupa subscribe Channel https://m.youtube.com/c/ranzstars', wm, 'NEXT', '.cevanvietnam', m)
}

handler.help = ['cecansantuy']
handler.tags = ['asupan']
handler.command = /^(cecansantuy)$/i
handler.limit = 3

module.exports = handler