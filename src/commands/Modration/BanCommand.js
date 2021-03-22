const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('Ban', 'Modration', []);
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
    .setDescription('You Need To **State** a User To Ban.')
    .setColor("RED")
    const Notin = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('The User Stated Is **Not** In The Server.')
    .setColor("RED")
    const nonick = new Discord.MessageEmbed()
    .setTitle("Success")
    .setDescription(`**Successfully** Banned The User`)
    .setColor("RED")
    const went = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('Something Went Wrong')
    .setColor("RED")
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(permisionembed);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(embedwrong);

    //ver
    let reason = args.slice(1).join(" ");
    const MentionedMember = message.mentions.members.first();

    //input
    if (!reason) reason = "No Reason Given";
    if (!args[0]) return message.channel.send(embedd);
    if (!MentionedMember) return message.channel.send(Notin);
    if (!MentionedMember.bannable) return message.channel.send(permisionembed);

    //execute
    const banembed = new Discord.MessageEmbed()
     .setTitle(`You Have Been Banned From ${message.guild.name}`)
     .setDescription(`Reason: ${reason}`)
     .setTimestamp();
    await MentionedMember.send(banembed).catch(err => console.log(err));
    await MentionedMember.ban({
      days: 7,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send(nonick));
  }
}