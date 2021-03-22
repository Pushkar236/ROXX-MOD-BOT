const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('Unban', 'Modration', []);
  }

  async run(client, message, args) {
    const permisionembed = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('You Dont Have **Permission** To Do that')
    .setColor("RED")
  const embedwrong = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('I Dont Have **Permission** To Do that')
    .setColor("RED")
    const wrong = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('Something Went Wrong')
    .setColor("RED")
  const embedd = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription("This Server Does Not Have Anyone Banned.")
    .setColor("RED")
  const Notin = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('The ID Stated Is Not A Number.\`F!Unban UserID Reason(Optional)\``')
    .setColor("RED")
  const nonick = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('You Need To **State** A UserID To Unban. \`F!Unban UserID Reason(Optional)\`')
    .setColor("RED")
  const Noin = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription("The User ID Stated Is Not Banned From The Server.")
    .setColor("RED")
  const Deletedsize = new Discord.MessageEmbed()
    .setTitle(`Success`)
    .setDescription(`Successfully Unbanned The User ${args[0]}`)
    .setColor("GREEN")
    .setTimestamp();
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(permisionembed);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(embedwrong);

    //ver
    let reason = args.slice(1).join(" ");
    let userID = args[0];

    //input
    if (!reason) reason = "No Reason Given";
    if (!args[0]) return message.channel.send(nonick);
    if (!isNaN(args[0])) return message.channel.send(Notin);


    //execute
   message.guild.fetchBans().then(async bans => {
     if (bans.size == 0) return message.channel.send(embedd);
     let bUser = bans.find(b => b.user.id == userID);
     if (!bUser) return message.channel.send(Noin);
     await message.guild.members.unban(bUser.user, reason).catch(err => {
       console.log(err);
       return message.channel.send(wrong);
     }).then(() => {
       message.channel.send(Deletedsize);
     })
   })
  }
}