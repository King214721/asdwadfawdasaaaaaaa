const { PermissionsBitField } = require("discord.js");
module.exports = {
    name:"kick",
    description: 'Kullanıcıyı Sunucudan Atarsın.',
    type:1,
    options: [
        {
            name:"user",
            description:"Atılacak Kullanıcıyı Seçin.",
            type:6,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({content: "> **Üyeleri At Yetkin Yok!** <:cs_reddet:1142405174548254802>", ephemeral: true})
    const user = interaction.options.getMember('user')
    if(user.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({content:"> **Bu Kullanıcının Kullanıcıları Atma Yetkisi Olduğu İçin Onu Yasaklayamadım.** <:cs_reddet:1142405174548254802>",ephemeral:true})
    user.kick();
    interaction.reply({content: "> **Başarıyla Üyeyi Attım!** <:cs_ban:1142094884216508519>"})
}

};
