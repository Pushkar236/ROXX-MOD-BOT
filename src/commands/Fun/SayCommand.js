const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('Say', 'Fun', []);
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
    const messagetosay = args.join(" ");
    try {
      await message.channel.send(messagetosay)
      message.delete();
    } catch (err){
      console.log(err);
      message.channel.send(went);
    }
  }
}