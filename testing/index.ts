import { Discord } from '../src'

const discord = new Discord({
  token:
    'OTE4NjY0NjQwMjc0MjYwMDM4.GuIdjg.Z-LnWu2cFiS8Ka5r4MxG9RsXuBXGqd0C4mXhQ0',
  intents: 0,
})

discord.ws.events.on('ready', () => {
  console.log('Bot connected!!!')
})

discord.connect()
