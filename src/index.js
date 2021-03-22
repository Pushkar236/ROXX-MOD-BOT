
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();

(async () => {
  
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  client.prefix1 = config.prefix1;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();



