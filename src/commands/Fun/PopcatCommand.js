const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class PopcatCommand extends BaseCommand {
  constructor() {
    super('Popcat', 'Fun', []);
  }

  async run(client, message, args) {
    const popcat = new Discord.MessageEmbed()
     .setImage(`https://cdn.discordapp.com/attachments/804273494451814404/804723424823345162/2e4.gif`)
    await message.channel.send(popcat);
  }
}