import EventEmitter from 'events'
import { Packet } from "./GatewayEvents"
import { Opcodes } from './Opcodes'
import * as dispatchEvents from './dispatchEvents'

export interface GatewayManagerOptions {
  apiVersion: string
}

export class GatewayManager {
  connection?: WebSocket

  gatewayUrl: string

  events: EventEmitter

  options: GatewayManagerOptions = {
    apiVersion: '10'
  }

  constructor(_options: GatewayManagerOptions) {
    Object.assign(this.options, _options)

    this.gatewayUrl = `wss://gateway.discord.gg/?encoding=json&v=${this.options.apiVersion}`
    this.events = new EventEmitter()
  }


  async connect() {
    return new Promise((resolve, reject) => {
      if (!this.connection) {
        this.connection = new WebSocket(this.gatewayUrl)

        this.connection.addEventListener('message', (e) => this._onWSMessage.call(this, e.data))

        this.events.once('ready', resolve)
      } else {
        reject()
      }
    })
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

  _onWSMessage(d: string | Buffer) {
    if (Buffer.isBuffer(d)) {
      this._onPacket(JSON.parse(d.toString()))
    } else {
      this._onPacket(JSON.parse(d))
    }
  }
}