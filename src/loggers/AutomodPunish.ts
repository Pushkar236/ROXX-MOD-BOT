/**
 * @file AutomodPunish Logger
 * @description Logs when a member is punished through Automod
 * @module logger/AutomodPunish
 */

import type { Guild, Message, User } from "eris";
import { Logger } from "../classes/Logger";
const TYPE = "modLogging";

export class AutomodPunish extends Logger {
  events = ["automodMemberMute", "automodAntiInvite"];

  async run(event: string, guild: Guild, member: User, warning: string, messages: any) {
    const guildconfig = await this.bot.db.getGuildConfig(guild.id);
    const channel = await this.getChannel(guild, TYPE, event, guildconfig);
    if (!channel) return;

    switch (event) {
      /**
       * Logs when a member is muted by automod
       */

      case "automodMemberMute": {
        const string = this.bot.localeSystem.getLocaleFunction(
          guildconfig?.guildLocale ? guildconfig?.guildLocale : this.bot.config.defaultLocale,
        );

        this.bot.createMessage(channel, {
          embed: {
            color: this.convertHex("error"),
            author: {
              name: string("logger.AUTOMOD_MUTED", { member: this.tagUser(member) }),
              icon_url: member.dynamicAvatarURL(),
            },
            fields: [
              {
                name: string("logger.CAUSE_OF_MUTE"),
                value: `${
                  messages
                    ? messages.map((m: Message) => `**${member.username}:** ${m.content.substring(0, 128)}`).join("\n")
                    : string("logger.AUTO_PUNISH")
                }`,
                inline: false,
              },
            ],
          },
        });

        break;
      }

      /**
       * Logs when AntiInvite catches an invite
       */

      case "automodAntiInvite": {
        const string = this.bot.localeSystem.getLocaleFunction(
          guildconfig?.guildLocale ? guildconfig?.guildLocale : this.bot.config.defaultLocale,
        );

        this.bot.createMessage(channel, {
          embed: {
            color: this.convertHex("error"),
            author: {
              name: string("logger.AUTOMOD_INVITESENT", { member: this.tagUser(member) }),
              icon_url: member.dynamicAvatarURL(),
            },
            fields: [
              {
                name: string("global.CONTENT"),
                value: messages.length > 100 ? `${messages.substring(0, 100)}..` : messages || string("global.NO_CONTENT"),
                inline: false,
              },
              {
                name: string("global.ID"),
                value: warning ? warning : string("logger.NOT_WARNED"),
                inline: false,
              },
            ],
          },
        });

        break;
      }
    }
  }
}
