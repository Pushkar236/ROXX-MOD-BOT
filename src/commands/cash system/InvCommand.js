const BaseCommand = require('../../utils/structures/BaseCommand');
const db = require('quick.db');
const Discord = require('discord.js');

module.exports = class InvCommand extends BaseCommand {
  constructor() {
    super('Inv', 'cash system', []);
  }

  async run(client, message, args) {
    let items = await db.fetch(message.author.id);
    if(items === null) items = "You Dont Have Any Item ;c"

    const Embed = new Discord.MessageEmbed()
    .addField('Inventory', items)

    message.channel.send(Embed);
  }
}