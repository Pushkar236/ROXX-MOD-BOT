const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class TicketCommand extends BaseCommand {
  constructor() {
    super('Ticket', 'ticket', []);
  }

  async run(client, message, args) {
    //embed
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
    .setDescription('You Have Already Opened a Ticket.')
    .setColor("RED")
    const Notin = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('Created a Ticket For You.')
    .setColor("RED")
    const nonick = new Discord.MessageEmbed()
    .setTitle("Success")
    .setDescription(`**Support** Will Be Here Shortly!`)
    .setColor("RED")
    const went = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('Something Went Wrong')
    .setColor("RED")


    const user = message.author.username;
    const name = "Ticket-" + user;
    if (message.guild.channels.cache.find(ch => ch.name == name)) {
      message.channel.send(embedd)
    } else {
      message.guild.channels.create(name).then((chan) => {
        chan.updateOverwrite(message.guild.roles.everyone, {
          SEND_MESSAGES: false,
          VIEW_CHANNEL: false
        })
        chan.updateOverwrite(user, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
        })
        message.channel.send(Notin);
        chan.send(nonick).then((m) => {
        
        })
      })

    }
  }
}