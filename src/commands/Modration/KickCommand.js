const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");


module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('Kick', 'Modration', []);
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
    .setDescription('You Need To **State** a User To Kick.')
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
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(permisionembed);
   const MentionMember = message.mentions.members.first();
   let reason = args.slice(1).join(" ");
   if (!reason) reason = " No Reason Given.";
   const KickEmbed = new Discord.MessageEmbed()
     .setTitle(`You Were Kicked From ${message.guild.name}`)
     .setDescription(`For: ${reason}`)
     .setColor("#fc030b")
     .setTimestamp()
     .setAuthor(client.user.tag, client.user.displayAvatarURL());
    //starts
    if (!args[0]) return message.channel.send(embedd);
    if (!MentionMember) return message.channel.send(nonick);
    if (!MentionMember.kickable) return message.channel.send(permisionembed);
    try {
      await MentionMember.send(KickEmbed);
      
    } catch (err) {
      console.log("Unable To Message");
    }
    try {
      await MentionMember.kick(reason)
    } catch (err) {
      console.log(err);
      message.channel.send("I Was Unable To Kick The User Mentioned.");
    }
  }
}