const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class RoleCommand extends BaseCommand {
  constructor() {
    super('Role', 'Modration', []);
  }

  async run(client, message, args) {
    const wrong = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('You Did Not specify a Name For Your Role!')
      .setColor("RED")
    const colror = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('You Did Not specify a Color For Your Role!')
      .setColor("RED")
    const permisionembed = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('You Dont Have **Permission** To Do that')
      .setImage(`https://media.giphy.com/media/Wrh8aL75aj4uZwuqta/giphy.gif`)
      .setColor("RED")
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(permisionembed)
    if (args[1].toLowerCase() == "create" || "Create") {
      let rName = message.content.split(args[2]).join(" ")
      let rColor;
      args.forEach(arg => {
        if (arg.startsWith("#")) {
          rColor = arg
        }
      })
      if (!rName) {
        return message.channel.send(wrong);
      }
      if (!rColor) {
        return message.channel.send(colror)
      }
      if (rColor >= 16777215) return message.channel.send(`That Hex Color Is Wrong`)
      rName = rName.replace(`${rColor}`, ``)
      let rNew = await message.guild.roles.create({
        data: {
          name: rName,
          color: rColor,

        }
      })
      const roleembed = new Discord.MessageEmbed()
        .setTitle(`Success`)
        .setDescription(`${message.author.username} | Has Created A Role | ${rName} | Color | ${rColor} | RoleID | ${rNew.id}`)
        .setColor(rColor)
      message.channel.send(roleembed)
    } else  if (args[1].toLowerCase() == "delete" || "Delete") {
       const using = new Discord.MessageEmbed()
         .setTitle(`Something Went Wrong`)
         .setDescription(`You Did Not Specify The Name Of The Role To Delete!`)
         .setColor(`RED`)

        let roleDelete = message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => r.name == args[1])
        if (!roleDelete) return message.channel.send(using)
        roleDelete.delete();
       const ss = new Discord.MessageEmbed()
         .setTitle(`Success`)
         .setDescription(`${message.author.username} | Has Deleted A Role Name: | ${roleDelete.name}`)
         .setColor(`GREEN`)
       message.channel.send(ss)
    }
  }
}