module.exports = {
    name: 'infostaff',
    description: "Staff Applications for Thunder Nation Romania!",
    execute(message, args){

        const updateEmbed = {
            color: 'bc0404',
            //title: 'Help',
            //url: 'https://discord.js.org',
            author: {
              name: 'APLICAȚII STAFF:',
              //icon_url: 'https://cdn.discordapp.com/icons/643026804730363904/a614246f14d01ae6203de4f797836fa0.png?size=4096'
              //icon_url: 'https://cdn.discordapp.com/avatars/942393721062846525/2736e5c73759954a7bb3645ba2dcd9db.png?size=4096'
              //url: 'https://discord.js.org',
            },
            description: 'Informațiile și cerințele pentru a aplica:',
            fields: [
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
              {
                name: '**__CERINȚE__:**',
                value: ' • Trebuie să ai minim 14 ani; \n • Trebuie să ai minim lvl 15; \n • Minim o oră petrecută pe voice; \n • Un istoric cât mai favorabil fără prea multe abateri de la regulament; \n • Vechimea este destul de importantă, vrem persoane familiarizate cu server-ul, minim 3 zile vechime pe server; \n • Doar persoanele din administrația server-ului pot da verdict cererilor; \n • Stăpânirea limbii române, fără greșeli gramaticale și o cerere cât mai bine scrisă; \n • Dorim o persoană calmă care să își controleze nervii, deoarece o astfel de funcție poate să vă streseze;',
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: '**__INFORMAȚII__:**',
                    value: ' • Dacă ai fost respins, poți face altă cerere după cel puțin 3 zile de la verdict; \n • Ca membru Staff, vei fi intr-o perioadă de testare nedeterminată în care trebuie să demonstrezi ce poți;\n • Cererile făcute în bătaie de joc vor fi automat respinse;',
                }, 
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                }, 
                {
                    name: '__NE REZERVĂM DREPTUL DE A NE ALEGE STAFF-UL!__',
                    value: 'Ne rezervăm toate drepturile pentru model.',
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
