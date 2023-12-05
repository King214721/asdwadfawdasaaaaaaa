const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "reklam-engel",
  description: "Reklam Engel Sistemini Açıp Kapatırsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Rolleri Yönet Yetkin Yok!", ephemeral: true})
    const embed = new EmbedBuilder()
    .setColor("Red")
    .setDescription("**Sistem Kapatıldı** <:icons_colorserververified:1143614978591567892>\n> <:cs_warn2:1142138650314952795> Reklam yapıldığında onu **sansürlemeyeceğim.**")
    const embed2 = new EmbedBuilder()
    .setColor("Red")
   .setDescription("**Sistem Açıldı** <:icons_colorserververified:1143614978591567892>\n> <:cs_moderator:1142129677415223356> Reklam yapıldığı zaman onu **sansürleyeceğim**")
 
 let reklam = db.fetch(`reklamengel_${interaction.guild.id}`);
 
 if (reklam)  {
 
     db.delete(`reklamengel_${interaction.guild.id}`);
     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 if (!reklam)  {
 
     db.set(`reklamengel_${interaction.guild.id}`, true);
    interaction.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 

  }

};
