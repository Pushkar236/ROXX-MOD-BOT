const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
module.exports = class GetstickbuggedCommand extends BaseCommand {
  constructor() {
    super('Getstickbugged', 'Fun', []);
  }

  async run(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setImage(`https://media.giphy.com/media/Wrh8aL75aj4uZwuqta/giphy.gif`)
    await message.channel.send(embed);
  }
}