const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "genel",
    description: "Genel kategorisindeki komutalrı gösterir!",
    type: 1,
    options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Genel Kategorisi")
    .setDescription(`<:cs_chat:1142129943568973824>\`-\` **/afk**\n> Sizi afk moduna alırım.\n<:cs_chat:1142129943568973824>\`-\` **/davet**\n> Linklerimi size atarım.\n<:cs_chat:1142129943568973824>\`-\` **/ping**\n> Gecikme süremi gçsterir.\n<:cs_chat:1142129943568973824>\`-\` **/oylama**\n> Sunucunuzda oylama başlatırım.\n<:cs_chat:1142129943568973824>\`-\` **/rol-bilgi**\n> İstediğiniz rol hakında bilgi veririm.\n<:cs_chat:1142129943568973824>\`-\` **/sa-as**\n> Selam verme sistemini açarım.\n<:cs_chat:1142129943568973824>\`-\` **/sil**\n> İstediğiniz kadaar mesajı silerim.\n<:cs_chat:1142129943568973824>\`-\` **/menu_rol**\n> İstediğiniz roleri kullanıcıya menü ile veririm.\n<:cs_chat:1142129943568973824>\`-\` **/istatistik**\n> Bilgilerimi atarım.`)
    .setColor("Green")

     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
  }

};
