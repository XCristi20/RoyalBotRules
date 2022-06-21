module.exports = {
    name: 'embed2',
    description: "This is an embed message!",
    execute(message, args, Discord){
      const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://youtube.com')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'Be kind'},
            {name: 'Rule 3', value: 'Be respectul'}
        )

        message.channel.send({ embeds: [newEmbed] });
        }
    }