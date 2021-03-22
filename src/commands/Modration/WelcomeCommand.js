const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const fs = require("fs");


const bot = new Discord.Client({disableEveryone: true});

bot.on("guildMemberAdd", member => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome' || "Welcome")
  welcomeChannel.send (`Welcome ${member} To ${guild.name}`)
})

module.exports = class WelcomeCommand extends BaseCommand {
  constructor() {
    super('Welcome', 'Modration', []);
  }

  async run(client, message, args) {
    message.channel.send('Channel Set');
  }
}