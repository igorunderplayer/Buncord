import * as dispatchEvents from './dispatchEvents'

export type Opcodes = 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11

export interface Packet {
  op: Opcodes
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
