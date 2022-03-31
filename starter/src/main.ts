import 'reflect-metadata'
import { Client } from 'discordx'
import { token } from './configs/configs'

const client = new Client({ intents: 3 })

client.once('ready', () => {
  console.log(`Beep Boop i'am online 🤖`)
})

client.login(token)
