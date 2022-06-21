const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] });


//PREFIX
const prefix = 'th!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


//APARE IN CONSOLA CAND BOT-UL E ONLINE
client.once('ready', () => {
    console.log('Thunder e online!')
});

//WELCOME MESSAGE & ROLES
/*client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Urmaritor');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('912401642270392350').send(`<@${guildMember.user.id}> tocmai a intrat pe server! Asigura-te ca e cine trebuie!`)
});*/

//FILTREAZA MESAJELE
client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //COMENZI
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args); //PING
    } else if (command == 'invite') {
        client.commands.get('invite').execute(message, args); //INVITE
    } else if (command == 'update') {
        client.commands.get('update').execute(message, args); //UPDATE
    } else if (command == 'embed') {
        client.commands.get('embed').execute(message, args, Discord); //EMBED
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args); //CLEAR
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args); //KICK
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args); //BAN
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args); //MUTE
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args); //HELP
    } else if (command == 'moderation') {
        client.commands.get('moderation').execute(message, args); //MODERATION
    } else if (command == 'embed2') {
        client.commands.get('embed2').execute(message, args, Discord); //EMBED 2
    } else if (command == 'button1') {
        client.commands.get('button1').execute(message, args, Discord);
    } else if (command == 'comingsoon') {
        client.commands.get('comingsoon').execute(message, args, Discord); //COMING SOON

        ///////DE AICI INCEP LUCRURILE PT SV-UL THUNDER ÎN ROMÂNĂ/////////


    } else if (command == 'reg1') {
        client.commands.get('reg1').execute(message, args, Discord); // REGULAMENT P1
    } else if (command == 'infostaff') {
        client.commands.get('infostaff').execute(message, args, Discord); // INFORMAȚII STAFF
    } else if (command == 'infopartener') {
        client.commands.get('infopartener').execute(message, args, Discord); // INFORMAȚII PARTENERI
    } else if (command == 'infoboost') {
        client.commands.get('infoboost').execute(message, args, Discord); // INFORMAȚII BOOST
    } else if (command == 'rulesemperors') {
        client.commands.get('rulesemperors').execute(message, args, Discord); // INFORMAȚII BOOST
    }
});

//AICI E SECURIZATA TREABA
client.login(process.env.DISCORD_TOKEN);


    //AICI E SECURIZATA TREABA
//client.login('OTU0NzIyMzk1Mjk2NTA1ODk2.YjXQhA.n1oJQs8t7FJb9Y5GJMpribG6bRE'); TOKEN BOOKZONE
//client.login('OTU0NzIyMzk1Mjk2NTA1ODk2.YjXQhA.Nv7xcNaNi9S9JXD2CkTKncydW0M');  //TOKEN BOOKZONE