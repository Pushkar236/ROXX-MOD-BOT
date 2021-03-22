const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const ms = require("ms");




module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('Ping', 'Fun', []);
  }



  async run(client, message, args) {
    const msg = await message.channel.send('Pinging...');

    const latency = msg.createdTimestamp - message.createdTimestamp;
    const choices = ['Is this okay? I can\'t look!', 'I hope it isn\'t bad!'];
    const response = choices[Math.floor(Math.random() * choices.length)];

    
    const permisionembed = new Discord.MessageEmbed()
    .setTitle("🏓Pong")
    .setDescription(`${response} - Bot Latency: \`${latency}ms\`, API Latency: \`${Math.round(client.ws.ping)}ms\``)
    .setColor("RED")
    .setTimestamp()
    .setFooter(`Fnex Bot | Ping`)
    msg.delete()
    message.channel.send(permisionembed);
  
  }


}