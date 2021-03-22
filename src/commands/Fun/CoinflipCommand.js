const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")

module.exports = class CoinflipCommand extends BaseCommand {
  constructor() {
    super('Coinflip', 'Fun', []);
  }

  async run(client, message, args) {
    var num = (Math.random() * 100) + 1

    const newEmbed = new Discord.MessageEmbed()
      .setColor('#000000')
      .setTitle('The Coin Landed on:')
      .setImage('https://media.discordapp.net/attachments/719130456301502517/796060246132785182/Untitled_design_3.gif')
      .setTimestamp()
    if (num >= 0 && num <= 45) {
      newEmbed.setDescription('Heads')
    } else if (num > 46 && num <= 91) {
      newEmbed.setDescription('Tails')
    } else {
      newEmbed.setDescription('Its SIDE?!')
    }

    message.channel.send(`**${message.author.username} Flipped a Coin!**, **Choose a Side Now, you have 5 Seconds!**`)
    setTimeout(function () {
      message.channel.send(newEmbed);
    }, 5000);
  }
}   