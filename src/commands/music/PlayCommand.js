const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const DisTube = require("distube");
const client = new Discord.Client({
  disableMentions: "everone"
});

const distube = new DisTube(client, {
  searchSongs: true,
  emitNewSongOnly: true,
  highWaterMark: 1 << 50,
  leaveOnEmpty: true,
  leaveOnFinish: true,
  leaveOnStop: true,
  searchSongs: false,
  customFilters: {
    "bassboost": "bass=g=20,dynaudnorm=f=200",
    "8d": "apulsator=hz=0.08",
    "vaporwave": "aresample=48000,asetrate=48000*0.8",
    "nightcore": "aresample=48000,asetrate=48000*1.25",
    "phaser": "aphaser=in_gain=0.4",
    "subboost": "asubboost",
    "bassboost": "bass=g=20,dynaudnorm=f=200",
  }
})


const filters = ["3d", "bassboost", "echo", "karaoke", "nightcore", "vaporwave", "flanger", "subboost"];

let stateswitch = false;

module.exports = class PlayCommand extends BaseCommand {
  constructor() {
    super('Play', 'music', []);
  }

  async run(client, message, args) {
    message.channel.send( "Searching!", args.join(" "))
    return distube.play(message, args.join(" "));
  }
}