module.exports = {
    name: 'reg1',
    description: "Part 1 of Thunder Nation Romania rules!",
    execute(message, args){

        const updateEmbed = {
            color: 'bc0404',
            title: 'DISCORD TOS',
            //url: 'https://discord.js.org',
            author: {
              name: 'REGULAMENT',
              //icon_url: 'https://cdn.discordapp.com/icons/643026804730363904/a614246f14d01ae6203de4f797836fa0.png?size=4096'
              //icon_url: 'https://cdn.discordapp.com/avatars/942393721062846525/2736e5c73759954a7bb3645ba2dcd9db.png?size=4096'
              //url: 'https://discord.js.org',
            },
            description: 'Înainte de a continua pe server, te rugăm să citești __Termenii și Condițiile Discord__ și să le respecți cât de mult poți. Vârsta minimă pentru a folosi Discord este de __13 ani__.\n \u200b',
            url: 'https://discord.js.org',
            fields: [
                {
                    name: '**1** • **__SPAM-UL__:**',
                    value: '• Este strict interzis să trimiteți rânduri întregi de mesaje ce conțin cuvinte sau litere la întâmplare ce nu au legătură cu conversația. De asemenea, trimiterea prea rapidă sau excesivă a mesajelor este considerată o încălcare a regulamentului.\n • **__SANCȚIUNE__:** Mute 10-20 Min.\n \u200b',
                    inline: false,
                },
                {
                name: '**2** • **__NSFW__:**',
                value: '• Este strict interzisă distribuirea conținutului de tip **NSFW** (**N**ot **S**afe **F**or **W**ork, ce include materiale cu caracter pornografic sau materiale care ar putea afecta privitorul) pe canalele noastre sau în privat membriilor.\n • **__SANCȚIUNE__:** Ban Permanent.\n \u200b',
                },
                {
                name: '**3** • **__RECLAMA__:**',
                value: '• Acest Server nu este un loc unde să vă promovați Serverele de Discord, website-urile sau serviciile, fie că o faceți pe Server sau în privat, direct sau indirect.\n • **__SANCȚIUNE__:** Ban Permanent.\n \u200b',
                },
                {
                name: '**4** • **__LINK-URI__:**',
                value: '• Este strict interzis să postați link-uri către viruși / malware / keyloggere sau orice altceva ar putea afecta conturile, securitatea sau dipozitivele celorlalți.\n • **__SANCȚIUNE__:** Ban Permanent + Reclamație la Discord.\n \u200b',
                },
                {
                name: '**5** • **__DISCUȚII__:**',
                value: '• Este strict interzis să se vorbească despre subiecte religioase, politice, rasiste, discriminatorii, ș.a.m.d; De asemenea, jignirile sau discuțiile ce aduc comentarii negative la adresa altor comunități / servere nu sunt tolerate. Limba română este obligatorie.\n • **__SANCȚIUNE__:** Mute 10-30 Min.\n \u200b',
                },
                {
                name: '**6** • **__AFACERI__:**',
                value: '• Este strict interzis să comercializați pe bani reali iteme sau bunuri la noi pe server. De asemenea, cerșitul de iteme / grade / credite / alte bunuri nu este tolerat.\n • **__SANCȚIUNE__:** Mute 15-60 Min.\n \u200b',
                },
                {
                name: '**7** • **__COMPORTAMENTUL__:**',
                value: '• Este strict interzis să se promoveze acte precum terorismul, sinuciderea, hacking-ul sau alte acte asemănătoare. Indiferent că o faceți în glumă sau serios, direct sau indirect, nu este permis!\n • **__SANCȚIUNE__:** Ban Permanent.\n \u200b',
                },
                {
                name: '**8** • **__MENTION-UL__:**',
                value: '• Nu este tolerat ghost ping-ul sau mention Staff-ului sau celorlalti membrii aiurea sau fără vreun motiv bine întemeiat.\n • **__SANCȚIUNE__:** Mute 10-20 Min pentru mention la membrii și 20-30 min pentru mention la Staff.\n \u200b',
                },
                {
                name: '**9** • **__VOICE__:**',
                value: '• Țipatul pe canalele voice, earrape-ul, suflatul în microfon sau alte gesturi asemănătoare nu sunt tolerate.\n • **__SANCȚIUNE__:** Mute pe voice 2 ore.\n \u200b',
                },
                {
                name: '**10** • **__IDENTITATEA__:**',
                value: '• Este strict interzis să dezvăluiți identitatea unui membru, fie că o faceți direct sau indirect; această regulă include și menționarea numelui de familie, a locației, a rețelelor sociale, a numerelor de telefon și alte date legate de acesta fără acordul persoanei respective.\n • **__SANCȚIUNE__:** Ban Permanent.\n \u200b',
                },
                {
                name: '**11** • **__REGULAMENT__:**',
                value: '• La întrebarea "Ai citit regulamentul" din cererile pentru grade Staff, trebuie să răspundeți cu ID-ul contului dumneavostră de Discord.\n \u200b',
                },
                {
                name: '**12** • **__LIMBAJUL__:**',
                value: '• Limbajul vulgar este permis în limita bunului simț sau atunci când acel membru nu se simte atacat. Jignirile aduse Staff-ului / Administrației / Server-ului nu sunt tolerate.\n • **__SANCȚIUNE__:** Mute 20-60 de minute pentru jignire membrii; Mute 60-120 de minute pentru jignire Staff și Ban Permanent pentru jignirea server-ului sau a administrației.\n \u200b',
                },
                {
                    name: '__NE REZERVĂM DREPTUL DE A VĂ SANCȚIONA PE MOTIVE ȘI PE DURATE NEPRECIZATE ÎN REGULAMENT!__',
                    value: 'Staff-ul vă poate avertiza verbal sau vă poate da un warn și chiar time out dacă acesta consideră că este necesar. Dacă ați fost sancționat pe nedrept, vă rugăm să contactați administrația.',
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
