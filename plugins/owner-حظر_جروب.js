
const handler = async (m) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/es.json`))
  const tradutor = _translate.plugins.owner_banchat

  global.db.data.chats[m.chat].isBanned = true;
  m.reply(tradutor.texto1);
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^حظر-جروب$/i;
handler.rowner = true;
export default handler;
