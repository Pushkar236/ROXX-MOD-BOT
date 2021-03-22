const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('Purge', 'modration', []);
  }

  async run(client, message, args) {
    const permisionembed = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('You Dont Have **Permission** To Do that')
      .setImage(`https://media.giphy.com/media/Wrh8aL75aj4uZwuqta/giphy.gif`)
      .setColor("RED")
    const embedwrong = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('I Dont Have **Permission** To Do that')
      .setColor("RED")
    const embedd = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription("The Number Stated Must be 2-5x 00.")
      .setColor("RED")
    const Notin = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('Number Stated Must be a Whole Number , No . -')
      .setColor("RED")
    const nonick = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('You Need To **State** Number To Purge.')
      .setColor("RED")
    const Deletedsize = new Discord.MessageEmbed()
      .setTitle(`Success`)
      .setDescription(`.`)
      .setColor("GREEN")
      .setTimestamp();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(permisionembed);
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embedwrong);
    if (!args[0]) return message.channel.send(nonick);


    const ammount = Number(args[0], 10);


    if (isNaN(ammount)) return message.channel.send(nonick);
    if (!Number.isInteger(ammount)) return message.channel.send(Notin);
    if (!ammount || ammount < 2 || ammount > 500) return message.channel.send(embedd);
    const fetched = await message.channel.messages.fetch({
      Limit: ammount
    });
    try {
      await message.channel.bulkDelete(fetched)
        .then(messages => message.channel.send(Deletedsize) + message.channel.send(`Deleted ${messages.size} Messages.`))

    } catch (err) {
      console.log(err);
      message.channel.send("Something Went Wrong.");
    }
    setTimeout(function () {
      message.delete()
    }, 5000);
  }
}