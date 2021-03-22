const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class AnouceCommand extends BaseCommand {
  constructor() {
    super('Anouce', 'Fun', []);
  }

 async run(client, message, args) {
    const permisionembed = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('You Dont Have **Permission** To Do that')
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
    .setTitle("Something Went Wrong")
    .setColor("RED")
    const went = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('Something Went Wrong')
    .setColor("RED")
    if (!message.member.hasPermission("MANAGE_MESSAGES","ADMINISTRATOR")) return message.channel.send(permisionembed)
    const messagetosay = args.join(" ");
    const sayembed = new Discord.MessageEmbed()
      .setTitle(`ANOUCEMENT`)
      .setDescription(` ${messagetosay}`)
      .setTimestamp()
      .setColor(`PURPLE`)
    message.delete()
    try {
      await message.channel.send(sayembed)
      message.delete();
    } catch (err){
      console.log(err);
      message.channel.send(went);
    }
  }
}