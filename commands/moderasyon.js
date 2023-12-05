const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "moderasyon",
    description: "Moderasyon kategorisindeki komutalrı gösterir!",
    type: 1,
    options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Moderasyon Kategorisi")
    .setDescription(`<:cs_chat:1142129943568973824> \`-\` **/ceza**\n> İstediğiniz kişiye ceza veririsiniz (ban-kick-mute)\n<:cs_chat:1142129943568973824> \`-\` **/küfür-engel**\n> Küfür yazılınca sansürler bir kere daha yazarsınzı kapatır.\n<:cs_chat:1142129943568973824> \`-\` **/ban**\n> Kullanıcıyı yasaklarım.\n<:cs_chat:1142129943568973824> \`-\` **/forceban**\n> Sunucuda olmiyan birisini yasaklarım.\n<:cs_chat:1142129943568973824> \`-\` **/unban**\n> Kullanıcının yasağını kaldırırım.\n<:cs_chat:1142129943568973824> \`-\` **/ban-list**\n> Yasaklı olan kullanıcıları listelerim.\n<:cs_chat:1142129943568973824> \`-\` **/reklam-engel**\n> Reklam yazılmasını engelerim bir kere daha yazarsan kapatırım.\n<:cs_chat:1142129943568973824> \`-\` **/kick**\n> Kullanıcıyı sunucudan atarım.\n<:cs_chat:1142129943568973824> \`-\` **/nuke**\n> Kanaldaki mesajalrı sıfırlarım.\n<:cs_chat:1142129943568973824> \`-\` **/hg-bb**\n> Sunucuya yeni gelenleri ve çıkanları loga atarım.`)
    .setColor("Green")

     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
  }

};
