module.exports = {
    name: 'ban',
    description: 'The ban command.',
    execute(message, args) {
        const member = message.mentions.users.first();
        if (member && message.member.permissions.has("KICK_MEMBERS")) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned!");
        } /*else if (member && message.member.permissions.has(!"BAN_MEMBERS")) {
            message.channel.send("You do not have permission to ban members!");
        }*/ else {
            message.channel.send("You cannot ban that member or you do not have the right permissions.");
        }
    }
}