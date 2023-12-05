const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "yardım",
    description: "Kategorileri gösterir!",
    type: 1,
    options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Kategoriler")
    .setDescription(`> <:icons_wumpus:1143615281709731981> Botun tüm sistemlerinin stabil bir şekilde çalışması için botun **__rolünü__** üstte tutmaya özen gösterin.\n\n<:cs_home:1142007023333019678> \`-\` **/genel**\n> Genel ketegorisindeki komutları gösterir.\n<:cs_ban:1142094884216508519> \`-\` **/moderasyon**\n> Moderasyon ketegorisindeki komutları gösterir.\n<:cs_moderator:1142129677415223356> \`-\` **/güvenlik**\n> Güvenlik ketegorisindeki komutları gösterir.\n<:emoji_2:1142690857263304704> \`-\` **/eğlence**\n> Eğlence ketegorisindeki komutları gösterir.`)
    .setColor("Green")

     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
  }

};
