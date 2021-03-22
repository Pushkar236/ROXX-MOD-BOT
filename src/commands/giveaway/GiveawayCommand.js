const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const {
  Client,
  Attachment,
  MessageEmbed
} = ('discord.js');
const bot = new Discord.Client();
const ms = require("ms");
const {
  GiveawaysManager
} = require("discord-giveaways");




module.exports = class GiveawayCommand extends BaseCommand {
  constructor() {
    super('Giveaway', 'giveaway', []);
  }



  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command')

    let channel = message.mentions.channels.first();

    if (!channel) return message.channel.send('Please provide a channel |  Usage: F!Giveaway {channel} {duration} {winners} {prize} ex: F!Giveaway #giveaways 1d 1 Awsome Prize');

    let giveawayDuration = args[2];

    if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Pleae provide a valid duration | Usage: F!Giveaway {channel} {duration} {winners} {prize} ex: F!Giveaway #giveaways 1d 1 Awsome Prize');

    let giveawayWinners = args[3];

    if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners! |  Usage: !gcreate {channel} {duration} {winners} {prize} ex: !gcreate #giveaways 1d 1 Awsome Prize');


    let giveawayPrize = args.slice(4).join(" ");

    if (!giveawayPrize) return message.channel.send('What prize do you wanna give? |  Usage: !gcreate {channel} {duration} {winners} {prize} ex: !gcreate #giveaways 1d 1 Awsome Prize');

    bot.giveawaysManager.start(channel, {
      time: ms(giveawayDuration),
      prize: giveawayPrize,
      winnerCount: giveawayWinners,
      hostedBy: message.author,
      messages: {
        giveaway: "🎉🎉**GIVEAWAY**🎉🎉",
        giveawayEnded: "🎉🎉**GIVEAWAY ENDED**🎉🎉",
        timeRemaining: "Time remaining: **{duration}**",
        inviteToParticipate: "React with 🎉 to enter",
        winMessage: "Congrats {winners}, you won **{prize}**",
        embedFooter: "Giveaway time!",
        noWinner: "Couldn't determine a winner",
        hostedBy: "Hosted by {user}",
        winners: "winner(s)",
        endedAt: "Ends at",
        units: {
          seconds: "seconds",
          minutes: "minutes",
          hours: "hours",
          days: "days",
          pluralS: false
        }
      }
    });
    message.channel.send(`Giveaway starting in ${channel}`);



  }
}