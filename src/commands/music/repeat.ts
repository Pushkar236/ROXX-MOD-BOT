import type { Message, TextChannel } from "eris";
import { Command } from "../../classes/Command";

export class RepeatCommand extends Command {
  args = "[queue:string]";
  aliases = ["queuerepeat", "repeatqueue", "stoprepeat", "unrepeat"];
  description = "Repeats the currently playing track or the entire queue.";
  clientperms = ["voiceConnect", "voiceSpeak"];
  cooldown = 5000;
  voice = true;

  async run(msg: Message<TextChannel>, _pargs: ParsedArgs[], args: string[]) {
    const player = this.bot.lavalink.manager.players.get(msg.channel.guild.id);
    if (!player?.queue) return msg.createEmbed(msg.string("global.ERROR"), msg.string("music.NOTHING_QUEUED"), "error");

    // Allows looping queues
    if (["queue", "all", msg.string("global.ALL"), msg.string("music.QUEUE")].includes(args?.[0]?.toLowerCase())) {
      msg.createEmbed(
        `🔁 ${msg.string("music.REPEATING")}`,
        msg.string("music.QUEUE_REPEAT", { option: player.queueRepeat ? "Disabled" : "Enabled" }),
      );

      return player.setQueueRepeat(!player.queueRepeat);
    }

    // Toggles repeat of a track
    msg.createEmbed(
      `🔁 ${msg.string("music.REPEATING")}`,
      msg.string("music.SONG_REPEAT", { option: player.trackRepeat ? "Disabled" : "Enabled" }),
    );

    return player.setTrackRepeat(!player.trackRepeat);
  }
}
