const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"hg-bb",
    description: 'Giriş Çıkış Sistemini Ayarlarsın!',
    type:1,
    options: [
        {
            name:"ayarla",
            description:"Ayarlama İşlemleri",
            type:1,
            options:[{name:"kanal",description:"Giriş Çıkış Kanalını Ayarlar!",type:7,required:true,channel_types:[0]}]            
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "> **Kanalları Yönet Yetkin Yok!** <:cs_reddet:1142405174548254802>", ephemeral: true})
    const kanal2 = interaction.options.getChannel('kanal')
   db.set(`hgbb_${interaction.guild.id}`, kanal2.id)
   interaction.reply("> **Hoşgeldin Güle Güle Kanalı Başarıyla <#"+kanal2+"> Olarak Ayarlandı!** <:cs_onay:1142405258409156708>")
}

};
