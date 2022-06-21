module.exports = {
    name: 'moderation',
    description: "Get a list of my moderation commands!",
    execute(message, args){

      //  message.channel.send('**Moderation Commands:**\n**th!ban** - Ban a user | Usage: **th!ban @Cristi20**\n**th!kick** - Kick a user | Usage: **th!kick @Cristi20**\n**th!clear** - Clear upon 100 messages | Usage: **th!clear 50**');

      const helpModerationEmbed = {
        color: 'bc0404',
        //title: 'Help',
        //url: 'https://discord.js.org',
        author: {
          name: 'See bot\'s moderation commands:',
          //icon_url: 'https://cdn.discordapp.com/icons/643026804730363904/a614246f14d01ae6203de4f797836fa0.png?size=4096'
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
            name: 'th!ban',
            value: 'Ban a member. Usage: th!ban @Cristi20#3364 Bye!',
          },
          {
            name: 'th!kick',
            value: 'Kick a member. Usage: th!kick @Cristi20#3364 Bye!',
            //value: '\u200b', PT SPATIU GOL
          },
          {
            name: 'th!clear',
            value: 'Clear a number of messages (upon 100). Usage: th!clear 50',
            //value: '\u200b', PT SPATIU GOL
          },
        ],
        footer: {
            text: 'Developed by Cristi20#3364',
            icon_url: 'https://cdn.discordapp.com/avatars/246703784082931712/4b69dbb20bab1032ac2c26b8c8a33efc.png?size=4096',
        },

        timestamp: new Date(),
      };
      
      message.channel.send({ embeds: [helpModerationEmbed] });

    }
}