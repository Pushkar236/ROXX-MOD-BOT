const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, version: djsversion } = require('discord.js');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');
module.exports = class BotinfoCommand extends BaseCommand {
  constructor() {
    super('Botinfo', 'Fun', []);
  }

  async run(client, message, args) {
    const core = os.cpus()[0];
		const embed = new MessageEmbed()
			.setColor(message.guild.me.displayHexColor || 'RED')
			.addField('General', [
				`**❯ • Client:** ${client.user.tag} (${client.user.id})`,
				`**❯ • Commands:** ${client.commands.size}`,
				`**❯ • __Servers__:** ${client.guilds.cache.size.toLocaleString()} `,
				`**❯ • Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**❯ • Channels:** ${client.channels.cache.size.toLocaleString()}`,
				`**❯ • Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**❯ • Discord.js:** v${djsversion}`,
				`**❯ • Made By: Fxy#0001**` ,
				'\u200b'
			])
			.addField('System', [
				`**❯ • Platform:** ${process.platform}`,
				`**❯ • Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
				`**❯ • CPU:**`,
				`\u3000 Cores: ${os.cpus().length}`,
				`\u3000 Model: ${core.model}`,
				`\u3000 Speed: ${core.speed}MHz`,
			])
			.setTimestamp();

		message.channel.send(embed);
	}

};