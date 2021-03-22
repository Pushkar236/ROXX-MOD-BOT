const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const distube = require("distube");
const client = new Discord.Client({
  disableMentions: "everone"
});

let stateswitch = false;

module.exports = class StopCommand extends BaseCommand {
  constructor() {
    super('Stop', 'music', []);
  }



  async run(client, message, args) {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');


    distube.stop(message)

    message.channel.send('DONE!')

    return
  };
}