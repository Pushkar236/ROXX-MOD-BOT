import type { WeebSHImage } from "../../typings/endpoints";
import type { Message, TextChannel } from "eris";
import { Command } from "../../classes/Command";
import axios from "axios";

export class RemCommand extends Command {
  description = "Sends a random picture of Rem from Re:Zero.";
  cooldown = 3000;
  allowdms = true;

  async run(msg: Message<TextChannel>) {
    const body = (await axios
      .get("https://api.weeb.sh/images/random?type=rem", {
        headers: {
          "Authorization": `Wolke ${this.bot.config.keys.weebsh}`,
          "User-Agent": "hibiki",
        },
      })
      .catch(() => {})) as WeebSHImage;

    let image = "";
    if (!body || !body?.data?.url) image = "https://cdn.weeb.sh/images/SJOS-1YvW.jpeg";
    else image = body.data.url;

    msg.channel.createMessage({
      embed: {
        title: `🌸 ${msg.string("image.REM")}`,
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
