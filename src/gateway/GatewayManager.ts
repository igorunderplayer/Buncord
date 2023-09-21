import EventEmitter from 'events'
import { Packet } from './GatewayEvents'
import { Opcode, Opcodes } from './Opcodes'
import * as dispatchEvents from './dispatchEvents'
import { SocketCloseCode, SocketCloseCodes } from './CloseCodes'

export interface GatewayManagerOptions {
  apiVersion: string
  intents: number
  token: string
}

export class GatewayManager {
  connection?: WebSocket

  gatewayUrl: string

  events: EventEmitter

  options = {
    apiVersion: '10',
    intents: 0,
    token: undefined,
  } as Partial<GatewayManagerOptions>

  constructor(_options: GatewayManagerOptions) {
    Object.assign(this.options, _options)

    this.gatewayUrl = `wss://gateway.discord.gg/?encoding=json&v=${this.options.apiVersion}`
    this.events = new EventEmitter()
  }

  async connect() {
    return new Promise((resolve, reject) => {
      if (!this.connection) {
        this.connection = new WebSocket(this.gatewayUrl)

        this.connection.addEventListener('message', (e) =>
          this._onWSMessage.call(this, e.data),
        )

        this.events.once('ready', resolve)
      } else {
        reject()
      }
    })
  }

  disconnect() {
    // TODO: better disconnect :+1:
    if (this.connection) {
      this.connection.close()
      this.connection = undefined
    }
  }

  heartbeat() {
    this.sendWS(Opcodes.HEARTBEAT, {})
  }

  identify() {
    return this.sendWS(Opcodes.IDENTIFY, {
      token: this.options.token,
      intents: this.options.intents,
      properties: {
        $os: process.platform.toLowerCase(),
        $browser: 'buncord',
        $device: 'buncord',
      },
    })
  }

  sendWS(op: Opcode, data: any) {
    if (this.connection) {
      const packet = JSON.stringify({
        op,
        d: data,
      })

      this.connection.send(packet)
    }
  }

  _onDispatch(packet: Packet) {
    if (packet.t) {
      const dispatch = dispatchEvents[packet.t]
      dispatch(this, packet.d)
    }
  }

  _onPacket(packet: Packet) {
    this.events.emit('packet', packet)

    switch (packet.op) {
      case Opcodes.DISPATCH: {
        this._onDispatch(packet)
      }
    }
  }

  _onWSClose(code: SocketCloseCode) {
    switch (code) {
      case SocketCloseCodes.DISALLOWED_INTENTS: {
        throw new Error('Disallowed intents provided')
      }

      case SocketCloseCodes.INVALID_INTENTS: {
        throw new Error('Invalid intents provided')
      }

      default: {
        throw new Error('Socket closed by unknown reason')
      }
    }
  }

  _onWSMessage(d: string | Buffer) {
    if (Buffer.isBuffer(d)) {
      this._onPacket(JSON.parse(d.toString()))
    } else {
      this._onPacket(JSON.parse(d))
    }
  }
}
