const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");


module.exports = class MyppsizeCommand extends BaseCommand {
  constructor() {
    super('Myppsize', 'Fun', []);
  }

  async run(client, message, args) {
    const ppsizeembed = new Discord.MessageEmbed()
      .setAuthor("Ur PP Size Checker")
      .setDescription(`Your PP Is: ` + Math.floor(Math.random() * 10 + 1) + " inch")
      .setColor("#d900ff")
      .setTimestamp()
    try {
      message.channel.send(ppsizeembed);
    } catch (err) {
      console.log(err);
    }
  }
}