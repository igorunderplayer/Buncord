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
    user: new User(_data.user), //TODO
    guilds: _data.guilds,
    sessionId: _data.session_id,
    resumeGatewayUrl: _data.resume_gateway_url,
    shard: _data.shard,
    application: new Application(_data.application),
  }

  manager.events.emit('ready', data)
}
