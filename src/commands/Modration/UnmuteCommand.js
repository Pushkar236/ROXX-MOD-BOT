const BaseCommand = require('../../utils/structures/BaseCommand');
var Discord = require('discord.js');
var ms = require('ms');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('Unmute', 'Modration', []);
  }

 async run(client, message, args) {
   //embeds
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
   .setDescription('You Need To **State** a User To UnMute.')
   .setColor("RED")
   const Notin = new Discord.MessageEmbed()
   .setTitle("Something Went Wrong")
   .setDescription('The User Stated Is **Not** In The Server.')
   .setColor("RED")
   const nonick = new Discord.MessageEmbed()
   .setTitle("Something Went Wrong")
   .setDescription('You Need To **specify** A Time To UnMute.')
   .setColor("RED")
   const went = new Discord.MessageEmbed()
   .setTitle("Something Went Wrong")
   .setDescription('Something Went Wrong')
   .setColor("RED")
   const You = new Discord.MessageEmbed()
   .setTitle("Something Went Wrong")
   .setDescription('You Need To State a Reason')
   .setColor("RED")
   if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(permisionembed);

   var user = message.mentions.users.first();
   if (!user) return message.reply(embedd);

   var member;

   try {
     member = await message.guild.members.fetch(user);
   } catch (err) {
     member = null;
   }

   if (!member) return message.reply(Notin);
   if (!member.hasPermission('MANAGE_MESSAGES')) return message.reply(permisionembed);


   

   var log = new Discord.MessageEmbed()
     .setTitle('User Unmuted')
     .addField('User:', user, true)
     .addField('By:', message.author, true)
     .setTimestamp()
     .setFooter(`Fnex Bot | UnMute Command`)
   message.channel.send(log);

   var embed = new Discord.MessageEmbed()
     .setTitle('You were Unmuted!')
     

   try {
     user.send(embed);
   } catch (err) {
     console.warn(err);
   }

   var role = message.guild.roles.cache.find(r => r.name === 'Muted');

   member.roles.remove(role);

   message.channel.send(`**${user}** has been muted by **${message.author}**`);
 }
}