/*module.exports = {
    name: 'update',
    description: "Announce a new version of the bot.",
    execute(message, args){

        let role = message.guild.roles.cache.find(r => r.name === "Developer");

        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('You have the permission to announce a new update!');
        } else {
            message.channel.send('You don\'t have the permission to announce an update!');
        }


/*
        if(message.member.roles.cache.has('913905507671109662')){
                    message.channel.send('A new version of Thunder Bot is now avalabile!');
                    //message.member.roles.remove('913905507671109662'); SCOATE ROLUL

        } else {
            message.channel.send('You cant send this command because you dont have the right permissions.');
            //message.member.roles.add('913905507671109662').catch(console.error); DACA VEDE CA UN ARE ROLUL CAND SCRIE COMANDA I-L OFERA
            }
*/



    /*}
}*/

module.exports = {
    name: 'update',
    description: "See what\'s new!",
    execute(message, args){

      //  message.channel.send('**Moderation Commands:**\n**th!ban** - Ban a user | Usage: **th!ban @Cristi20**\n**th!kick** - Kick a user | Usage: **th!kick @Cristi20**\n**th!clear** - Clear upon 100 messages | Usage: **th!clear 50**');

      const updateEmbed = {
        color: 'bc0404',
        //title: 'Help',
        //url: 'https://discord.js.org',
        author: {
          name: 'What\'s new:',
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
            value: 'Ban a member. Usage: th!ban @Cristi20#3364 Bye!',
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
      
      message.channel.send({ embeds: [updateEmbed] });

    }
}