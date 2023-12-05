const { EmbedBuilder } = require("discord.js");

module.exports = {
    name:"rol-bilgi",
    description: 'Bir roldeki kişiler hakkında bilgi verir',
    options: [
        {
            name: "rol",
            description: "Bilgisi gösterilecek rol",
            type: 8,
            required: true
        }
    ],
  run: async(client, interaction) => {
        const role = interaction.options.getRole("rol");
        if (role.id == interaction.guild.id) return interaction.reply({ content: "> **Dostum bu rol zaten herkeste var!** <:cs_reddet:1142405174548254802>" });
        if (!role.members.size) return interaction.reply({ content: "> **Bu rolde gösterilecek üye yok!** <:cs_reddet:1142405174548254802>" });
        let i = 1
        const listEmbed = new EmbedBuilder()
            .setColor("Aqua")
            .setTitle("Roldeki Üyeler")
            .setDescription(role.members.map(x => `**${i++}** | <@${x.id}> == ${x.id}`).join("\n").slice(0, 4000));
        return interaction.reply({ embeds: [listEmbed] })
    },
};