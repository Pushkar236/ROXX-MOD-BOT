import type { Message, TextChannel } from "eris";
import { Command } from "../../classes/Command";

export class RemoveassignableCommand extends Command {
  description = "Sets one or more roles to be able to be self-assigned.";
  clientperms = ["manageRoles"];
  requiredperms = ["manageRoles"];
  args = "<role:role>";
  aliases = ["removeassign", "removeassignablerole", "rmassign", "rmassignable", "unsetassignable"];
  staff = true;

  async run(msg: Message<TextChannel>, _pargs: ParsedArgs[], args: string[]) {
    const roles: string[] = [];
    let guildconfig = await this.bot.db.getGuildConfig(msg.channel.guild.id);
    if (!guildconfig) {
      await this.bot.db.insertBlankGuildConfig(msg.channel.guild.id);
      guildconfig = { id: msg.channel.guild.id };
    }

    // Tries to remove each role
    args
      .join(" ")
      .split(/(?:\s{0,},\s{0,})|\s/)
      .forEach(async (arg: string) => {
        const role = this.bot.args.argtypes.role(arg, msg);
        if (!role) return;
        if (!guildconfig?.assignableRoles?.length) guildconfig.assignableRoles = [];
        if (!guildconfig?.assignableRoles?.includes?.(role.id)) return;

        // Removes the role from the config
        const index = guildconfig?.assignableRoles?.indexOf(role.id);
        guildconfig.assignableRoles?.splice?.(index, 1);
        roles.push(role.name);
      });

    // If no roles were added; finds failed roles
    if (!roles.length) return msg.createEmbed(msg.string("global.ERROR"), msg.string("general.ASSIGN_NOROLES"), "error");

    // Updates the guildconfig
    await this.bot.db.updateGuildConfig(msg.channel.guild.id, guildconfig);

    // Sends added roles
    msg.channel.createMessage({
      embed: {
        title: msg.string("global.SUCCESS"),
        description: msg.string("moderation.REMOVEASSIGNABLE_SET", {
          roles: roles.map((a) => `\`${a}\``).join(", "),
          amount: roles.length,
        }),
        color: msg.convertHex("success"),
        footer: {
          text: msg.string("global.RAN_BY", { author: msg.tagUser(msg.author) }),
          icon_url: msg.author.dynamicAvatarURL(),
        },
      },
    });
  }
}
