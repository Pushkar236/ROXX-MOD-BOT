const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");


module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('Avatar', 'Fun', []);
  }

  async run(client, message, args) {
    let mention = message.mentions.users.first();

    const useravEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`${message.author.username}'s Avatar`)
      .setImage(message.author.displayAvatarURL({
        dynamic: true
      }))

    if (!mention) {
      return message.channel.send(useravEmbed)
    } else {
      const avEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${mention.username}'s Avatar`)
        .setImage(mention.displayAvatarURL({
          dynamic: true
        }))
      message.channel.send(avEmbed);
    }
  }
}