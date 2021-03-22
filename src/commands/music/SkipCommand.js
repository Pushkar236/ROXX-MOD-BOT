const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const DisTube = require("distube");
const client = new Discord.Client({
  disableMentions: "everone"
});

let stateswitch = false;

module.exports = class StopCommand extends BaseCommand {
  constructor() {
    super('Skip', 'music', []);
  }



  async run(client, message, args) {
    const permisionembed = new Discord.MessageEmbed()
    .setTitle("Success!")
    .setDescription(`Skipped The Music!`)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`Fnex Bot | Music`)
     

    return distube.play(message, args.join(" "));
  }
}