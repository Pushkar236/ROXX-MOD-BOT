const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require("node-fetch")
const Discord = require("discord.js")
module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('Verify', 'verify', []);
  }

  async run(client, message, args) {
    fetch("https://api.no-api-key.com/api/v2/captcha")
      .then(res => res.json())
      .then(json => {
        
        var role = message.guild.roles.cache.find(r => r.name === 'Verified' || "verified" || "Member" || "member");
        if(!role) return message.author.send("Could not find a role called user!")
        

        const ques = new Discord.MessageEmbed()
          .setTitle("Answer this captcha!")
          .setImage(json.captcha)
          .setFooter("Note: There is a time limit of 1 minute!")
          .setColor("BLUE")
        
        const wrong = new Discord.MessageEmbed()
        .setTitle("Wrong!")
        .setDescription("Do the command again!")
        .setFooter("Hint: It is case sensetive!")
        .setColor("RED")

        const correct = new Discord.MessageEmbed()
        .setTitle("Correct!")
        .setDescription(`**You Have Now Been Verified In** ${message.guild.name}.`)
        .setColor("GREEN")
        .setFooter(`Fnex Bot | Verify`)

        const time = new Discord.MessageEmbed()
        .setTitle("Time Has Ran Out!")
        .setDescription("Please do the command again to be verified!")
        .setFooter("Make sure to do it within the time limit.")
        .setColor("RED")

        let filter = m => m.author.id === message.author.id

        message.author.send(ques)
          .then(() => {
            message.author.dmChannel.awaitMessages(filter, { max: 1, time: 80000, errors: ["time"] })
              .then(collected => {
                if (![json.captcha_text].includes(collected.first().content)) {
                  return message.author.send(wrong)
                }

                if ([json.captcha_text].includes(collected.first().content)) {
                  message.author.send(correct)
                  message.member.roles.add(role)
                }
              }).catch(() => {
                message.channel.send(time)
              })
          })

      })


  }
}