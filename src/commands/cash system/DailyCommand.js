const BaseCommand = require('../../utils/structures/BaseCommand');
const db = require("quick.db");
const ms = require("parse-ms");


module.exports = class DailyCommand extends BaseCommand {
  constructor() {
    super('Daily', 'cash system', []);
  }

  async run(client, message, args) {
    let daily = await db.fetch(`daily_${message.author.id}`);

    let timeout = 864000000
    let amount = 500
    let rand = Math.floor(Math.random() * (1000 - 500) + 500)

    if (daily != null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      message.channel.send(`NO! **${message.author.username}**, You need to wait **${time.hours}h ${time.minutes}m ${time.seconds}s** :timer: ;c`)

    } else {

      message.channel.send(`**${message.author.username}**, Here is Your Daily, **${rand}**`)
      message.channel.send(`:timer: | Your next daily, **${daily}**`)

      db.add(`money_${message.author.id}`, rand)
      db.add(`daily_${message.author.id}`, Date.now())

    }



  }
}