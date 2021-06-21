import type { Message, TextChannel } from "eris";
import type { WeebSHImage } from "../../typings/endpoints";
import { Command } from "../../classes/Command";
import axios from "axios";

export class SleepyCommand extends Command {
  description = "Posts a gif of you being sleepy.";
  cooldown = 3000;

  async run(msg: Message<TextChannel>) {
    const body = (await axios
      .get("https://api.weeb.sh/images/random?type=sleepy", {
        headers: {
          "Authorization": `Wolke ${this.bot.config.keys.weebsh}`,
          "User-Agent": "hibiki",
        },
      })
      .catch(() => {})) as WeebSHImage;

    let image = "";
    if (!body || !body?.data?.url) image = "https://cdn.weeb.sh/images/SJYxNJKDZ.gif";
    else image = body.data.url;

    msg.channel.createMessage({
      embed: {
        description: `💤 ${msg.string("roleplay.SLEEPY", { user: msg.author.username })}`,
        color: msg.convertHex("general"),
        image: {
          url: image,
        },
        footer: {
          text: msg.string("global.RAN_BY", {
            author: msg.tagUser(msg.author),
            poweredBy: "weeb.sh",
          }),
          icon_url: msg.author.dynamicAvatarURL(),
        },
      },
    });
  }
}
