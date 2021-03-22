const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const pagination = require('discord.js-pagination');


module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('Help', 'Fun', []);
  }

  async run(client, message, args) {

    const moderation = new Discord.MessageEmbed()
      .setTitle('Moderation')
      .addField('`F!Kick`', 'Kicks a member from your server via mention or ID', true)
      .addField('`F!Ban`', 'Bans a member from your server via mention or ID', true)
      .addField('`F!Mute`', 'Mutes a member from your server via mention', true)
      .addField('`F!Nickname`', 'Adds A Nickname To A Mentioned Member', true)
      .addField('`F!Unban`', 'UnBans a member from your server via ID', true)
      .addField('`F!UnMute`', 'UnMutes a member from your server via mention', true)
      .addField('`F!Warn`', 'Warns Mentioned Member', true)
      .addField('`F!Purge`', 'Purges messages', true)
      .addField('`F!Poll`', 'Makes A Poll Message', true)
      .setTimestamp()
      .setFooter(`Fnex Bot | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)

    const fun = new Discord.MessageEmbed()
      .setTitle('Fun')
      .addField('`F!Anouce`', 'Anouce A Message' , true)
      .addField('`F!Avatar`', 'Shows Mentioned User Avatar')
      .addField('`F!BotInfo`', 'Shows Bot Info')
      .addField('`F!Coinflip`', 'flips Coin')
      .addField('`F!GetStickBugged`', 'Meme')
      .addField('`F!Help`', 'Shows All Of The Commands')
      .addField('`F!Nou`', 'Meme')
      .addField('`F!Popcat`', 'Meme')
      .addField('`F!Howgay`', 'Meme', true)
      .addField('`F!Myppsize`', 'Meme', true)
      .addField('`F!Ping`', 'Shows Ping', true)
      .addField('`F!Say`', 'Says The Message', true)
      .addField('`F!Serverinfo`', 'Shows The Server Info', true)
      .addField('`F!Whois`', 'Shows User Info', true)
      .setTimestamp()
      .setFooter(`Fnex Bot | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)

      const ticket = new Discord.MessageEmbed()
      .setTitle('Ticket')
      .addField('`F!Ticket`', 'To Open A Ticket' , true)
      .addField('`F!Close`', 'To Close A Ticket', true)
      .setTimestamp()
      .setFooter(`Fnex Bot | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)

      const verify = new Discord.MessageEmbed()
      .setTitle('Verify')
      .addField('`F!Verify`', 'To Verify')
      .setTimestamp()
      .setFooter(`Fnex Bot | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)

      const Economy = new Discord.MessageEmbed()
      .setTitle('Economy')
      .addField('`F!Cash`', 'Shows Your Current Cash!')
      .addField('`F!Daily`', 'Claim Your Daily Cash!')
      .addField('`F!Work`', 'You Can Work To Gain Cash!')
      .setTimestamp()
      .setFooter(`Fnex Bot | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)


    const pages = [
      moderation,
      fun,
      ticket,
      verify,
      Economy,
    ]

    const emojiList = ["⏪", "⏩"];

    const timeout = '1200000';

    pagination(message, pages, emojiList, timeout)
  }
}