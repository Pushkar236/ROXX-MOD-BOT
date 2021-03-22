const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const { Server } = require('mongodb');



module.exports = class ReactionCommand extends BaseCommand {
  constructor() {
    super('Reaction', 'Fun', []);
  }


  async run(client, message, args) {
    let react = message.channel.args[1]
    if (!react) return message.channel.send(`You Need To Add A Emoji Press Windows + > To Open The Emoji List!`)
    let embed = new Discord.MessageEmbed()
      .setTitle(`Roles!`)
      .setDescription(`React To Gain The Role!`)
      .setColor(`GREEN`)
      let msgembed = await message.channel.send(embed)
      msgembed.react(react)

  }

}