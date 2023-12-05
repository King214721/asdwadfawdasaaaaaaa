const { PermissionsBitField } = require('discord.js');
const ms = require('ms')

module.exports = {
  name: "ceza",
  description: "Kullanıcı banlamanızı sağlar.",
  options: [
        {
            name: 'üye',
            description: 'Ceza alacak üye',
            type: 6,
            require: true
        },
        {
            name: 'işlem',
            description: 'Ceza türü.',
            type: 3,
            require: true,
            choices: [
                { name:'ban', value:'ban' },
                { name:'kick', value:'kick' },
                { name:'timeout', value:'timeout' }
            ]
        },
        {  
            name: 'sebep',
            description: 'Yetkili notu.',
            type: 3,
            require: false
        },
        {  
            name: 'süre',
            description: 'Timeout için süre eğer işlem olarak timeout seçmediyseniz burayı boş bırakın.',
            type: 3,
            require: false
        },
   ],
   run: async(client, interaction) => {

    let process = interaction.options.getString("işlem");
    let member = interaction.options.getUser("üye");
    let reason = interaction.options.getString("sebep");
    let time = interaction.options.getString("süre");

    if(process === "ban") {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await interaction.reply("> **Bu işlem için yetkin yetersiz!** <:cs_reddet:1142405174548254802>").catch(err => {});
        await interaction.guild.members.cache.get(member.id).ban({ deleteMessageDays: 1, reason: reason ? reason : "wraiths"}).catch(async err => { return await interaction.reply("> **Bu işlem için yetkim yetersiz!** <:cs_reddet:1142405174548254802>")});
        interaction.reply(member.username + " **adlı kullanıcı başarıyla sunucudan yasaklandı!** <:cs_ban:1142094884216508519>").catch(err => {});
    } else if(process === "kick") {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await interaction.reply("> **Bu işlem için yetkin yetersiz!** <:cs_reddet:1142405174548254802>").catch(err => {});
        await interaction.guild.members.cache.get(member.id).kick({ reason: reason ? reason : "wraiths"}).catch(async err => { return await interaction.reply("> **Bu işlem için yetkim yetersiz!** <:cs_reddet:1142405174548254802>")});
        interaction.reply(member.username + " **adlı kullanıcı başarıyla sunucudan atıldı!** <:cs_ban:1142094884216508519>").catch(err => {});
    } else if(process === "timeout") {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.MuteMembers)) return await interaction.reply("> **Bu işlem için yetkin yetersiz!** <:cs_reddet:1142405174548254802>").catch(err => {});
        if(!time || !ms(time)) return interaction.reply("> **Timeout için geçerli bir süre girin!** <:cs_reddet:1142405174548254802>");
        await interaction.guild.members.cache.get(member.id).timeout(ms(time)).catch(async err => { return await interaction.reply("> **Bu işlem için yetkim yetersiz!** <:cs_reddet:1142405174548254802>")});
        interaction.reply(member.username + " **adlı kullanıcı başarıyla susturuldu!** <:icons_clock:1143614816762732675> ").catch(err => {});
    }
    setTimeout(() => interaction.deleteReply(), 5000)

 }
}