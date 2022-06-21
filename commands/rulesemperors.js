module.exports = {
    name: 'rulesemperors',
    description: "Partner Applications for Thunder Nation Romania!",
    execute(message, args){

        const updateEmbed = {
            color: 'bc0404',
            //title: 'Help',
            //url: 'https://discord.js.org',
            author: {
              name: '◥◣◆◢◤ | REGULAMENT',
              //icon_url: 'https://cdn.discordapp.com/icons/643026804730363904/a614246f14d01ae6203de4f797836fa0.png?size=4096'
              //icon_url: 'https://cdn.discordapp.com/avatars/942393721062846525/2736e5c73759954a7bb3645ba2dcd9db.png?size=4096'
              //url: 'https://discord.js.org',
            },
            description: 'Bun venit pe **◥◣◆◢◤ | R O Y A L**. Înainte de a continua, te rugăm să citești și să respecți următorul regulament! \n \u200b \n**__DISCORD RULES__**:\n◆ | https://discord.com/terms \n◆ | https://discord.com/terms \n \u200b',
            fields: [
                {
                    name: '◥◣◆◢◤ | **__RECLAMA__:**',
                    value: '◆ Acest Server nu este un loc unde să vă promovați serviciile, serverele de Discord sau alte jocuri, paginile de Instagram, YT, Facebook, ș.a.m.d. Reclama este interzisă atât pe server, cât și în privat membrilor, fie ea directă sau indirectă. Promovați-vă doar pe canalele special dedicate.\n ◆ **__SANCȚIUNE__:** Ban Permanent\n \u200b',
                    inline: false,
                },
                {
                name: '◥◣◆◢◤ | **__NSFW__:**',
                value: '◆ Este strict interzis să postezi conținut NSFW (Not Safe For Work, ce include material cu caracter pornografic sau materiale care ar putea afecta privitorul) pe canalele noastre sau în privat membrilor.\n ◆ **__SANCȚIUNE__:** Ban Permanent.\n \u200b',
                },
                {
                name: '◥◣◆◢◤ | **__VOICE__:**',
                value: '◆ Fără ear rape, țipete sau comportament SĂLBATIC pe canalele de voice. De asemenea, streaming-ul de site-uri 18+ sau diverse profiluri de Facebook sau Instagram ale membrilor este strict interzis.\n ◆ **__SANCȚIUNE__:** Timeout.\n \u200b',
                },
                {
                name: '◥◣◆◢◤ | **__COMPORTAMENTUL__:**',
                value: '◆ Te rugăm să păstrezi un comportament cât mai civilizat pe chat, fără înjurături excesive, amenințări, jigniri sau atacuri la persoană, spam de mesaje, imagini sau emoji-uri, mention-uri aiurea. Fără subiecte precum sinuciderea, rasismul, politica, discriminarea, terorism, pornografie sau bullying.\n ◆ **__SANCȚIUNE__:** Warn / Timeout / Ban.\n \u200b',
                },
                {
                name: '◥◣◆◢◤ | **__LINK-URI__:**',
                value: '◆ Fără link-uri către token takers, keyloggers, malwares, viruși și inclusiv link-uri care fură datele celui care intră pe ele.\n ◆ **__SANCȚIUNE__:** Ban Permanent.\n \u200b',
                },
                {
                name: '◥◣◆◢◤ | **__IDENTITATE__:**',
                value: '◆ Dacă se întâmplă să cunoașteți adevărata identitate a unui membru de pe server, este strict interzis să i-o faceți publică, să-i spuneți numele real pe chat, conturile de social media, numerele de telefon, ș.a.m.d sau alte informații precum adresa, IP sau imagini cu acesta.\n ◆ **__SANCȚIUNE__:** Ban Permanent.\n \u200b',
                },
                {
                name: '◥◣◆◢◤ | **__REGULAMENT__:**',
                value: '◆ La întrebarea "Ai citit regulamentul" din cererile pentru grade Staff, trebuie să răspundeți cu ID-ul contului dumneavostră de Discord.\n \u200b',
                },
                {
                    name: '◥◣◆◢◤ | __NE REZERVĂM DREPTUL DE A MODIFICA ORICÂND ACEST REGULAMENT FĂRĂ A VĂ ANUNȚA. CITIREA REGULATĂ A ACESTUIA ESTE RECOMANDATĂ!__',
                    value: '◥◣◆◢◤ | Administrația și Staff-ul își rezervă dreptul de a vă sancționa pe motive, durate sau luând acțiuni neprecizate în regulament dacă se impune acest lucru!',
                }, 
                
            ],
            image: {
                url: 'https://cdn.discordapp.com/attachments/984706701066387470/988745190019837992/Screenshot_102.png',
              },
            footer: {
                text: '◥◣◆◢◤ | Developed by Cristi20#3364',
                icon_url: 'https://cdn.discordapp.com/avatars/246703784082931712/9aed971c73953c198684bf6cde7757e5.png?size=4096',
            },
    
            timestamp: new Date(),
          };
          
          message.channel.send({ embeds: [updateEmbed] });

    }
}
