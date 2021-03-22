const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RerollCommand extends BaseCommand {
  constructor() {
    super('Reroll', 'giveaway', []);
  }

  run(client, message, args) {
    message.channel.send('Reroll command works');
  }
}