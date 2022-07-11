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
            description: 'Informațiile și cerințele pentru a aplica:\n\u200b',
            fields: [
              {
                name: '**__CERINȚE__:**',
                value: '◆ | Fondatorii trebuie să aibă minim 14 ani;\n◆ | Server-ul trebuie să aibă minim 100 de membrii;\nO medie decentă de oameni online;\n◆ | Server-ul trebuie să aibă minim o săptămână vechime;\n◆ | Server-ul trebuie să fie __SFW__ și să respecte ToS-ul Discord-ului;\n◆ | Server-ul trebuie să fie bine configurat, fără membrii care au accese la canale pe care nu ar trebui să le vadă sau să poată spama everyone / link-uri, ș.a.m.d;\n◆ | Dacă sunteți acceptați, fondatorii trebuie să intre pe server-ul nostru, și de asemenea, trebuie să acordați persoanei cu care ați încheiat parteneriatul gradul de Partener / VIP sau grade echivalente;\n\u200b',
                },
                {
                    name: '**__INFORMAȚII__:**',
                    value: '◆ | Dacă ai fost respins, poți face altă cerere după cel puțin 3 zile de la verdict;\n◆ | Cererile făcute în bătaie de joc vor fi automat respinse;\n◆ | Doar persoanele din administrația server-ului pot da verdict cererilor;\nDacă staff-ul sau administrația server-ului dvs. a încălcat în mod repetat regulamentul serverului, cererea va fi automat respinsă;\n \u200b\n◥◣◆◢◤ | **PENTRU A APLICA FOLOSEȘTE __/APPLY PARTENERIAT__**\n◥◣◆◢◤ | __NE REZERVĂM DREPTUL DE A NE ALEGE PARTENERII ȘI DE A ȘTERGE ORICÂND PARTENERIATUL FĂRĂ A VĂ ANUNȚA, ÎN CAZUL ÎN CARE STAFF-UL DUMNEAVOASTRĂ ESTE PRINS CĂ NE ÎNCALCĂ REGULAMENTUL!__',
                }, 
            ],
            image: {
                url: 'https://media.discordapp.net/attachments/984706701066387470/988758379960860722/Screenshot_104.png',
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
