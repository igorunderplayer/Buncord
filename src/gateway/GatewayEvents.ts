import { Opcode } from './Opcodes'
import * as dispatchEvents from './dispatchEvents'

export interface Packet {
  op: Opcode
  d?: any
  s?: number
  t?: DispatchEvent
}

export type DispatchEvent = keyof typeof dispatchEvents

export interface ReadyEventDataRaw {
  v: number
  user: any
  guilds: any[]
  shard?: number[]
  session_id: string
  private_channels: any[]
  application: any
  resume_gateway_url: string
}
