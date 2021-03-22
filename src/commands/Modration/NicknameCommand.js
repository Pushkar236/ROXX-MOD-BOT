const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");


module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('Nickname', 'Modration', []);
  }

  async run(client, message, args) {
    const permisionembed = new Discord.MessageEmbed()
     .setTitle("Something Went Wrong")
     .setDescription('You Dont Have **Permission** To Do that')
     .setImage(`https://media.giphy.com/media/Wrh8aL75aj4uZwuqta/giphy.gif`)
     .setColor("RED")
    const embedwrong = new Discord.MessageEmbed()
     .setTitle("Something Went Wrong")
     .setDescription('I Dont Have **Permission** To Do that')
     .setColor("RED")
     const embedd = new Discord.MessageEmbed()
     .setTitle("Something Went Wrong")
     .setDescription('You Need To **State** a User To Change The Nickname.')
     .setColor("RED")
     const Notin = new Discord.MessageEmbed()
     .setTitle("Something Went Wrong")
     .setDescription('The User Stated Is **Not** In The Server.')
     .setColor("RED")
     const nonick = new Discord.MessageEmbed()
     .setTitle("Something Went Wrong")
     .setDescription('You Need To **State** A Nickname.')
     .setColor("RED")
     const went = new Discord.MessageEmbed()
     .setTitle("Something Went Wrong")
     .setDescription('Something Went Wrong')
     .setColor("RED")
    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send(permisionembed);
    if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(embedwrong);

    const mentionedmember = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
    const Nickname = args.slice(1).join(" ");

    if (!args[0]) return message.channel.send(embedd);
    if (!mentionedmember) return message.channel.send(Notin);
    if (!Nickname) return message.channel.send(Notin);

    await mentionedmember.setNickname(Nickname).then(message.channel.send(`Changed Nickname To ${Nickname} For User ${mentionedmember}`));
  }
}