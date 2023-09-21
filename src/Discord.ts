import { GatewayManager } from './gateway/GatewayManager'

interface DiscordOptions {
  token: string
  intents: number
}

export default class Discord {
  ws: GatewayManager

  #options: DiscordOptions = {} as DiscordOptions

  constructor(options: DiscordOptions) {
    Object.assign(this.#options, options)

    this.ws = new GatewayManager({
      apiVersion: '10',
      token: this.#options.token,
      intents: this.#options.intents,
    })
  }

  connect() {
    return this.ws.connect()
  }
}
