const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "davet",
    description: "Davet linklerimi atar!",
    type: 1,
    options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Linklerim!")
    .setDescription(`> <:icons_wumpus:1143615281709731981>  **Hey! Bana eklenmesini istediğin bir komut varsa destek sunucuma gelerek bunu bildir!** \n\n <:Rozet:1141661968428716132>  **Linklerim**\n> <:cs_link:1142129214749949962> [Beni Sunucuna Ekle](https://discord.com/api/oauth2/authorize?client_id=1174728288418140200&permissions=8&scope=bot)\n>  <:cs_link:1142129214749949962> [Destek Sunucuma Gel!](https://discord.gg/VbEbSx8RyS) `)
    .setColor("Green")

     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
  }

};
