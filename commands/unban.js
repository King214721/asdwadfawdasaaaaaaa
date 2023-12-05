const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"unban",
    description: 'Kullanıcının Yasağını Kaldırırsın!',
    type:1,
    options: [
        {
            name:"id",
            description:"Kullanıcı ID Girin!",
            type:3,
            required:true
        },
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "> **Üyeleri Yasakla Yetkin Yok!** <:cs_reddet:1142405174548254802>", ephemeral: true})
    const user = interaction.options.getString('id')
    
    interaction.guild.members.unban(user)
    interaction.reply({content: "> **Başarıyla Üyenin Yasağını Kaldırdım.** <:cs_ban:1142094884216508519>"})
}

};
