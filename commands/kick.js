module.exports = {
    name: 'kick',
    description: 'The kick command.',
    execute(message, args) {
        const member = message.mentions.users.first();
        if (member && message.member.permissions.has("KICK_MEMBERS")) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked!");
        } /*else if (member && message.member.permissions.has(!"KICK_MEMBERERS")) {
            message.channel.send("You do not have permission to kick members!");
        }*/ else {
            message.channel.send("You cannot kick that member or you do not have the right permissions.");
        }
    }
}