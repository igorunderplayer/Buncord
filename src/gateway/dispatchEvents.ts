import { GatewayManager } from './GatewayManager'
import type * as GatewayEvents from './GatewayEvents'
import Application from '../entities/Application'
import User from '../entities/User'

export function READY(
  manager: GatewayManager,
  _data: GatewayEvents.ReadyEventDataRaw,
) {
  const data = {
    v: _data.v,
    user: new User(_data.user),
    guilds: _data.guilds,
    sessionId: _data.session_id,
    resumeGatewayUrl: _data.resume_gateway_url,
    shard: _data.shard,
    application: new Application(_data.application),
  }

  manager.events.emit('ready', data)
}

export function RECONNECT() {}

export function INVALID_SESSION() {}

export function CHANNEL_CREATE() {}

export function CHANNEL_UPDATE() {}

export function CHANNEL_DELETE() {}

export function CHANNEL_PINS_UPDATE() {}

export function THREAD_CREATE() {}

export function THREAD_UPDATE() {}

export function THREAD_DELETE() {}

export function THREAD_LIST_SYNC() {}

export function THREAD_MEMBER_UPDATE() {}

export function THREAD_MEMBERS_UPDATE() {}

export function GUILD_CREATE() {}

export function GUILD_DELETE() {}

export function GUILD_BAN_ADD() {}

export function GUILD_BAN_REMOVE() {}

export function GUILD_EMOJIS_UPDATE() {}

export function GUILD_STICKERS_UPDATE() {}

export function GUILD_INTEGRATIONS_UPDATE() {}

export function GUILD_MEMBER_ADD() {}

export function GUILD_MEMBER_REMOVE() {}

export function GUILD_MEMBER_UPDATE() {}

export function GUILD_MEMBERS_CHUNK() {}

export function GUILD_ROLE_CREATE() {}

export function GUILD_ROLE_UPDATE() {}

export function GUILD_ROLE_DELETE() {}

export function GUILD_SCHEDULED_EVENT_CREATE() {}

export function GUILD_SCHEDULED_EVENT_UPDATE() {}

export function GUILD_SCHEDULED_EVENT_DELETE() {}

export function GUILD_SCHEDULED_EVENT_USER_ADD() {}

export function GUILD_SCHEDULED_EVENT_USER_REMOVE() {}

export function INTEGRATION_CREATE() {}

export function INTEGRATION_UPDATE() {}

export function INTEGRATION_DELETE() {}

export function INTERACTION_CREATE() {}

export function INVITE_CREATE() {}

export function INVITE_DELETE() {}

export function MESSAGE_CREATE() {}

export function MESSAGE_UPDATE() {}

export function MESSAGE_DELETE() {}

export function MESSAGE_DELETE_BULK() {}

export function MESSAGE_REACTION_ADD() {}

export function MESSAGE_REACTION_REMOVE() {}

export function MESSAGE_REACTION_REMOVE_ALL() {}

export function MESSAGE_REACTION_REMOVE_EMOJI() {}

export function PRESENCE_UPDATE() {}

export function STAGE_INSTANCE_CREATE() {}

export function STAGE_INSTANCE_DELETE() {}

export function STAGE_INSTANCE_UPDATE() {}

export function TYPING_START() {}

export function USER_UPDATE() {}

export function VOICE_STATE_UPDATE() {}

export function VOICE_SERVER_UPDATE() {}

export function WEBHOOKS_UPDATE() {}
