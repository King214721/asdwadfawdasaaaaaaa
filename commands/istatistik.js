const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");
const wait = require('node:timers/promises').setTimeout;
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
const { uptime } = require("process");
module.exports = {
  name: "istatistik",
  description: "Botun istatistiğini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

		const cpu = os.cpus().map(c => c.model)[0]
		var platform = os.platform()

		const up = os.uptime()
		const ver = os.version().slice(0, 12)

		if (platform === 'win32') { platform = 'Windows' } else if (platform === 'linux') { platform = 'Gnu/Linux' } else if (platform = 'darwin') { platform = 'macOS' }

    const embed = new EmbedBuilder()
    .addFields(
      { name: '<:Manager:1142897779040075988>  Sahip', value: `<@987973658163159050> - fmofficial`},
      { name: '<:mod:1141661450776100954>  Geliştrici', value: `<@937281246621491280> - flybuny  & <@1101854837567656017> - enis52534`},  
      { name: '<:icons_settings:1143615207046905916> İşlemci', value: `${cpu}`},  
      { name: '<:cs_windows:1174775788902563880> İşletim Sistemi', value: `${platform}`, inline: true},
      { name: '<:emoji_1:1142690841140416582> Versiyon', value: `${ver}`, inline: true},
      { name: '<:cs_home:1142007023333019678> Sunucu Sayısı', value: `${client.guilds.cache.size}`},
      { name: '<:yeler:1142134346879340554> Kullanıcı Sayısı', value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) + client.users.cache.size}`, inline: true},
      { name: '<:cs_chat:1142129943568973824> Kanal Sayısı', value: `${client.channels.cache.size}`, inline: true},
      { name: '<:emoji_1:1142690841140416582> Komut Sayısı', value: `${client.commands.size}`},
      { name: '<:emoji_1:1142690841140416582> Bot Versiyon', value: `**BETA**`, inline: true},
      { name: '<:emoji_1:1142690841140416582> Discord.JS Versiyon', value: `${Discord.version}`, inline: true},
      { name: '<:emoji_1:1142690841140416582> Ping', value: `${client.ws.ping}`, inline: true},
      { name: '<:emoji_1:1142690841140416582> Node Versiyon', value: `${process.version}`, inline: true},
      { name: '<:emoji_1:1142690841140416582> RAM Kullanımı', value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()}MB/1GB`},
  
      )
    interaction.reply({embeds: [embed]})

  }

};
