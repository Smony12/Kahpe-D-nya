module.exports = member => {
  let guild = member.guild;
  member.send('nereye gidiyon orospu evladı?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
