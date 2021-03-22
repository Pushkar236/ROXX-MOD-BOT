const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class CloseCommand extends BaseCommand {
  constructor() {
    super('Close', 'ticket', []);
  }

  async run(client, message, args) {
    const permisionembed = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('You Dont Have **Permission** To Do that')
    .setImage(`https://media.giphy.com/media/Wrh8aL75aj4uZwuqta/giphy.gif`)
    .setColor("RED")
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(permisionembed)

    if (message.member.hasPermission("ADMINISTRATOR")) message.channel.delete()
  }
}