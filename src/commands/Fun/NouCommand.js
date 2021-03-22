const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class NouCommand extends BaseCommand {
  constructor() {
    super('Nou', 'Fun', []);
  }

  async run(client, message, args) {
    const nouembed = new Discord.MessageEmbed()
     .setImage('https://media4.giphy.com/media/VF5ZXlzQ8VcMpgJr1G/giphy.gif')
     
     
   await message.channel.send(nouembed);
  }
}