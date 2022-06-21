module.exports = {
    name: 'infoboost',
    description: "Booster Info for Thunder Nation Romania!",
    execute(message, args){

        const updateEmbed = {
            color: 'bc0404',
            //title: 'Help',
            //url: 'https://discord.js.org',
            author: {
              name: 'DESPRE BOOST:',
              //icon_url: 'https://cdn.discordapp.com/icons/643026804730363904/a614246f14d01ae6203de4f797836fa0.png?size=4096'
              //icon_url: 'https://cdn.discordapp.com/avatars/942393721062846525/2736e5c73759954a7bb3645ba2dcd9db.png?size=4096'
              //url: 'https://discord.js.org',
            },
            description: 'Dorești să susții server-ul cu un boost? Dacă da, iată ce îți oferim:',
            fields: [
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
              {
                name: '**__BENEFICII__:**',
                value: ' • Primești un grad exclusiv de **__MVP__**;  \n • Parteneriat instant cu server-ul tău; \n • Îți poți promova rețelele sociale (Instagram, Facebook, YouTube, ș.a.m.d) la noi; \n • Șansă ridicată de a intra în Staff;',
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: '**__GRAD MVP__:**',
                    value: ' • Vă puteți schimba numele; \n • Aveți Priority Speak; \n • Poți pune imagini pe chat; \n • Poți intra pe voice-uri atunci când sunt pline;',
                }, 
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                }, 
                {
                    name: '__VĂ MULȚUMIM DIN SUFLET PENTRU BOOST!__',
                    value: 'Pentru mai multe informații contactați Staff-ul sau faceți un ticket.',
                }, 
                
            ],
            image: {
                url: 'https://cdn.discordapp.com/attachments/643117740869156864/969315746549231656/mrUZGe9-1.png',
              },
            footer: {
                text: 'Developed by Cristi20#3364',
                icon_url: 'https://cdn.discordapp.com/avatars/246703784082931712/2f38de8c01a82aa1ae2636278158009c.png?size=4096',
            },
    
            timestamp: new Date(),
          };
          
          message.channel.send({ embeds: [updateEmbed] });

    }
}
