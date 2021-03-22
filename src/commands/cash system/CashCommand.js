const BaseCommand = require('../../utils/structures/BaseCommand');
const db = require("quick.db")
const ms = require("parse-ms")

module.exports = class CashCommand extends BaseCommand {
  constructor() {
    super('Cash', 'cash system', []);
  }

  async run(client, message, args) {
    let user = message.mentions.users.first() || message.author
    let money = db.fetch(`money_${user.id}`)

    if (money === null) money = 0

    message.channel.send(`:moneybag: | **${message.author.username}**, You currently have **__${money}__** **Cash!** `)

    
  }
}