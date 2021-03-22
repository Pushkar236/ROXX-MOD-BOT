const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ShopCommand extends BaseCommand {
  constructor() {
    super('Shop', 'cash system', []);
  }

  async run(client, message, args) {
    
    const embed = new Discord.MessageEmbed()
    .setTitle('Shop')
    .setDescription(`Car - 500 coins \n Watch - 250 coins`)
    .setColor(`RANDOM`)
    .setTimestamp();

    message.channel.send(embed);
  }
}