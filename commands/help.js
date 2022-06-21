module.exports = {
    name: 'help',
    description: "Get a list of my commands!",
    execute(message, args){

        //message.channel.send('**Moderation Commands:**\n**th!ban** - Ban a user | Usage: **th!ban @Cristi20**\n**th!kick** - Kick a user | Usage: **th!kick @Cristi20**\n**th!clear** - Clear upon 100 messages | Usage: **th!clear 50**');
        //message.channel.send('See my list of:\n**th!moderation** - **Moderation Commands**;\n**th!invite** - Join our **Support Server**;');

        const helpEmbed = {
            color: 'bc0404',
            //title: 'Help',
            //url: 'https://discord.js.org',
            author: {
              name: 'See bot\'s commands:',
              //icon_url: 'https://cdn.discordapp.com/icons/643026804730363904/a614246f14d01ae6203de4f797836fa0.png?size=4096' Old Logo
              icon_url: 'https://cdn.discordapp.com/avatars/942393721062846525/2736e5c73759954a7bb3645ba2dcd9db.png?size=4096'
              //url: 'https://discord.js.org',
            },
            //description: 'See bot\'s commands.',
            thumbnail: {
              //url: 'https://cdn.discordapp.com/icons/643026804730363904/a614246f14d01ae6203de4f797836fa0.png?size=4096', Old Logo
              url: 'https://cdn.discordapp.com/avatars/942393721062846525/2736e5c73759954a7bb3645ba2dcd9db.png?size=4096',
            },
            fields: [
              {
                name: 'th!moderation',
                value: 'Get help using moderation commands.',
              },
              {
                name: 'th!fun',
                value: 'Get help using fun commands.',
              },
              {
                name: 'th!ro',
                value: 'Get help using my romanian commands. :)',
              },
              {
                name: 'th!invite',
                value: 'Join my Support Server!',
                //value: '\u200b', PT SPATIU GOL
              },
            ],
            footer: {
                text: 'Developed by Cristi20#3364',
                icon_url: 'https://cdn.discordapp.com/avatars/246703784082931712/4b69dbb20bab1032ac2c26b8c8a33efc.png?size=4096',
            },
            timestamp: new Date(),
          };
          
          message.channel.send({ embeds: [helpEmbed] });

    }
}