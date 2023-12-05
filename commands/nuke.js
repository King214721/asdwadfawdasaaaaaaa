const Discord = require('discord.js');

module.exports = {
  name: "nuke",
  description: "Bir kanalı çoğaltma ve eski kanalı silme komutu",
  type: 1,
  options: [],

  run: async(client, interaction ) => {
  if(!interaction.member.permissions.has("BanMembers")) return interaction.reply("> **Bu işlem için üyeleri banla yetkisine ihtiyacın var!** <:cs_reddet:1142405174548254802>");

    const originalChannel = interaction.channel;
    originalChannel.clone({ reason: `Cloned from ${originalChannel.name}` })
      .then(newChannel => {
        originalChannel.delete();
        interaction.reply(`> Kanal: ${newChannel.name} oluşturuldu ve eski kanal **silindi!** <:icons_colorserververified:1143614978591567892>`);
      })
      .catch(err => {
        console.error(err);
        interaction.reply('> <:cs_warn2:1142138650314952795> **Kanal oluşturma veya silme sırasında bir hata oluştu.**');
      });
  },
};