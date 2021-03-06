module.exports = {
    name: 'appstaffroyal',
    description: "Staff Applications for Thunder Nation Romania!",
    execute(message, args){

        const updateEmbed = {
            color: 'bc0404',
            //title: 'Help',
            //url: 'https://discord.js.org',
            author: {
                name: '◥◣◆◢◤ | APLICAȚII STAFF',
                //icon_url: 'https://cdn.discordapp.com/icons/643026804730363904/a614246f14d01ae6203de4f797836fa0.png?size=4096'
                //icon_url: 'https://cdn.discordapp.com/avatars/942393721062846525/2736e5c73759954a7bb3645ba2dcd9db.png?size=4096'
                //url: 'https://discord.js.org',
              },
              description: 'Înainte de a aplica pentru a intra în staff, trebuie să iei în considerare că avem câteva cerințe pe care dorim să le respecți cu strictețe în momentul în care aplici. De asemenea, recomandăm să arunci un ochi peste <#984810031629336648>.\n \u200b',
              fields: [
                  {
                      name: '◥◣◆◢◤ | **__CERINȚE__:**',
                      value: '◆ | Minim 14 ani;\n◆ | Minim lvl 15;\n◆ | Minim o oră petrecută pe voice;\n◆ | Un istoric cât mai favorabil, fără prea multe abateri de la regulament;\n◆ | Vechimea este destul de importantă, dorim persoane familiaritate cu serverul, minim 5 zile petrecute pe server;\n\u200b',
                      inline: false,
                  },
                {
                    name: '`◥◣◆◢◤` | **__INFORMAȚII__:**',
                    value: '◆ | Doar persoanele din administrația serverului pot da verdict cererilor. Ceilalți membrii staff pot doar vota;\n◆ | Dorim o persoană calmă care să își controleze nervii și comportamentul, deoarece o astfel de funcție poate să fie stresantă;\n◆ | Stăpânirea limbii române e obligatorie, nu dorim prea multe greșeli gramaticale;\n◆ | Dacă ai fost respins, poți face altă cerere peste 3 zile de la verdict;\n◆ | Dacă ai grad pe unul dintre serverele afiliate, asta nu înseamă că ești apt(ă) să te alături staff-ului de aici;\n ◆ | Cererile făcute în bătaie de joc vor fi automat respinse.\n\u200b\n◥◣◆◢◤ | **PENTRU A APLICA FOLOSEȘTE __/APPLY STAFF__!**\n◥◣◆◢◤ | __NE REZERVĂM DREPTUL DE A NE ALEGE STAFF-UL!__',
                }, 

                
            ],
            image: {
                url: 'https://cdn.discordapp.com/attachments/984706701066387470/988758379960860722/Screenshot_104.png',
              },
            footer: {
                text: 'Developed by Cristi20#3364',
                icon_url: 'https://cdn.discordapp.com/attachments/984706701066387470/986167634359877642/ROYAL.png',
            },
    
            timestamp: new Date(),
          };
          
          message.channel.send({ embeds: [updateEmbed] });

    }
}
