const BaseCommand = require('../../utils/structures/BaseCommand');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = class WorkCommand extends BaseCommand {
  constructor() {
    super('Work', 'cash system', []);
  }

  async run(client, message, args) {
    let user = message.author.username;
    let timeout = 200000;
    let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

    if(author !== null && timeout - (Date.now() - author) > 0){
        let time = ms(timeout - (Date.now() - author));
        return message.channel.send(`NO! **${message.author.username}**, You cannot work again for **${time.minutes}m and ${time.seconds}s** ;c`)
    } else {
        let amount = Math.floor(Math.random() * 80) + 50;
        db.add(`money_${message.author.id}`, amount)
        db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

        message.channel.send(`**${user}**, You worked and earned **__${amount}__** **Cash!**`)
    }
  }
}