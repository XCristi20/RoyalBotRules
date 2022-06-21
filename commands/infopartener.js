module.exports = {
    name: 'infopartener',
    description: "Partner Applications for Thunder Nation Romania!",
    execute(message, args){

        const updateEmbed = {
            color: 'bc0404',
            //title: 'Help',
            //url: 'https://discord.js.org',
            author: {
              name: 'CERERE PARTENERIAT:',
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
                value: ' • Fondatorii trebuie să aibă minim 14 ani; \n • Server-ul trebuie să aibă minim 100 de membrii; \n • O medie decentă de oameni online; \n • Server-ul trebuie să aibă minim o săptămână vechime; \n • Server-ul trebuie să fie __SFW__ și să respecte ToS-ul Discord-ului; \n • Server-ul trebuie să fie bine configurat, fără membrii care au accese la canale pe care nu ar trebui să le vadă sau să poată spama everyone / link-uri, ș.a.m.d; \n • Dacă sunteți acceptați, fondatorii trebuie să intre pe server-ul nostru, și de asemenea, trebuie să acordați persoanei cu care ați încheiat parteneriatul gradul de Partener / VIP sau grade echivalente;',
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: '**__INFORMAȚII__:**',
                    value: ' • Dacă ai fost respins, poți face altă cerere după cel puțin 3 zile de la verdict; \n • Cererile făcute în bătaie de joc vor fi automat respinse; \n • Doar persoanele din administrația server-ului pot da verdict cererilor; \n • Dacă staff-ul sau administrația server-ului dvs. a încălcat în mod repetat regulamentul Thunder-ului, cererea va fi automat respinsă;',
                }, 
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                }, 
                {
                    name: '__NE REZERVĂM DREPTUL DE A NE ALEGE PARTENERII ȘI DE A ȘTERGE ORICÂND PARTENERIATUL FĂRĂ A VĂ ANUNȚA, ÎN CAZUL ÎN CARE STAFF-UL DUMNEAVOASTRĂ ESTE PRINS CĂ NE ÎNCALCĂ REGULAMENTUL!__',
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
