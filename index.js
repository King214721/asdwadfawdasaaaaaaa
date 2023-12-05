const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const db = require("croxydb")
const config = require("./config.json")
const client = new Client({
    intents: INTENTS,
    allowedMentions: {
        parse: ["users"]
    },
    partials: PARTIALS,
    retryLimit: 3
});

global.client = client;
client.commands = (global.commands = []);

const { readdirSync } = require("fs")
const { token } = require("./config.json");
readdirSync('./commands').forEach(f => {
  if (!f.endsWith(".js")) return;

  const props = require(`./commands/${f}`);

  client.commands.push({
      name: props.name.toLowerCase(),
      description: props.description,
      options: props.options,
      dm_permission: props.dm_permission,
      type: 1
  });

  console.log(`[KOMUT] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

  const eve = require(`./events/${e}`);
  const name = e.split(".")[0];

  client.on(name, (...args) => {
            eve(client, ...args)
        });
console.log(`[EVENT] ${name} eventi yüklendi.`)
});

client.on("guildMemberAdd", member => {
  const kanal = db.get(`hgbb_${member.guild.id}`)
  if(!kanal) return;
  member.guild.channels.cache.get(kanal).send({content: `> <a:giris:1175122523692744744> ${member} sunucuya katıldı! Sunucumuz **${member.guild.memberCount}** kişi oldu.`})
})

client.on("messageCreate", async message => {
  const db = require("croxydb");

  if (await db.get(`afk_${message.author.id}`)) {
   
    db.delete(`afk_${message.author.id}`);

    message.reply(`<@${message.author.id}> geri geldi! Artık AFK değil.`);
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.get(`afk_${kullanıcı.id}`);

  if (sebep) {
    message.reply(`Şu anda \`${sebep}\` sebebinden AFK <:dnd:1175486541838172310> `);
  }
});

client.on("guildMemberRemove", member => {
  const kanal = db.get(`hgbb_${member.guild.id}`)
  if(!kanal) return;
  const channel = member.guild.channels.cache.get(kanal);
  if (!channel) return;
  channel.send({content: `> <a:cikis:1175122606685429850> ${member} sunucudan ayrıldı! Sunucumuz **${member.guild.memberCount}** kişi oldu.`}).catch(console.error);
})

client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let kufur = db.fetch(`kufurengel_${message.guild.id}`)
  if(!kufur) return;
  
  if(kufur) {
  const kufurler = [
    
    "amk",
    "piç",
    "yarrak",
    "çiş",
    "kaka",
    "amcık",
    "oç",
    "göt",
    "amq",
    "yavşak",
    "amcık",
    "amcı",
    "orospu",
    "sikim",
    "sikeyim",
    "yarak",
    "am",
    "aq",
    "amcik",
    "amck",
    "amısı",
    "amısını",
    "mk"
    
       
  ]
  
if(kufurler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`> **<@${message.author.id}> Bir daha küfür etme!** <:cs_moderator:1142129677415223356>`)
}
}
})
client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let reklamlar = db.fetch(`reklamengel_${message.guild.id}`)
  if(!reklamlar) return;
  
  if(reklamlar) {

  const linkler = [
    
    ".com.tr",
    ".net",
    ".org",
    ".tk",
    ".cf",
    ".gf",
    "https://",
    ".gq",
    "http://",
    ".com",
    "discord.gg/",
    ".gg",
    ".porn",
    ".edu",
    ".xyz"
       
  ]
  
if(linkler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`> **Hey! <@${message.author.id}>, Bu Sunucuda Reklam Engel Sistemi Aktif!** <:cs_moderator:1142129677415223356>`)
}
}
})

client.on("messageCreate", (message) => {
  
  let saas = db.fetch(`saas_${message.guild.id}`)
  if(!saas) return;
  
  if(saas) {
  
  let selaamlar = message.content.toLowerCase()  
if(selaamlar === 'sa' || selaamlar === 'slm' || selaamlar === 'sea' || selaamlar === ' selamünaleyküm' || selaamlar === 'Selamün Aleyküm' || selaamlar === 'selam'){

message.channel.send(`<@${message.author.id}> Aleykümselam, Hoşgeldin Canım ☺️`)
}
}
})

const { joinVoiceChannel } = require('@discordjs/voice')
client.on('ready', () => {
  let channel = client.channels.cache.get("1098153357111201836")
 

      const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
  });
})


client.on('ready', () => {
  console.log(`Giriş Başarılı ${client.user.tag}!`);
});
//////////////////////////////////////////////////////////////////////////

client.on("interactionCreate", async interaction => {
  if(interaction.customId != "role_menu") return;
  let roleIds = interaction.values;
  let message = await interaction.guild.channels.cache.get(interaction.channelId).messages.fetch(interaction.message.id);
  let data = message.components[0].components[0].data;
  if(data.max_values == 1) data.options.map(option => option.value).filter(roleId => interaction.member.roles.cache.has(roleId)).forEach(roleId => interaction.member.roles.remove(roleId).catch(e => {}));
  roleIds.forEach(roleId => interaction.member.roles.add(roleId).catch(e => {}));
  interaction.reply({ ephemeral: 1, content: `Başarıyla <@&${roleIds.join(">, <@&")}> rollerini aldın.` });
});

///////////////////////////////////////////////////////////////////////////


client.login(token)