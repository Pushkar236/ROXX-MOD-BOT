const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = class PollCommand extends BaseCommand {
  constructor() {
    super('Poll', 'Modration', []);
  }

 async run(client, message, args) {
  let pollChannel = message.mentions.channels.first();
 
  let pollDescription = args.slice(1).join(' ');
  if (!pollChannel) return message.channel.send('You need to mention a channel.')
  if (!pollDescription) return message.channel.send('You need something to put in your poll ')

  const embedPoll = new Discord.MessageEmbed()
      .setTitle('Poll')
      .setDescription(pollDescription)
  pollChannel.send(embedPoll).then(MessageReaction => {
      MessageReaction.react('👍');
      MessageReaction.react('👎');
  })



  }
}