const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class EndCommand extends BaseCommand {
  constructor() {
    super('End', 'giveaway', []);
  }

  run(client, message, args) {
    message.channel.send('End command works');
  }
}