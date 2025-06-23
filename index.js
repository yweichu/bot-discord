const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot attivo'));
app.listen(3000, () => console.log('Web server attivo'));

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.on('ready', () => {
  console.log(`✅ Il bot è online come ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (
    message.channel.id === '1380543486054633533' &&
    message.author.id === '1174332637322674186'
  ) {
    message.channel.send('<@&1379823108881645629> nuovo tweet!');
  }
});

client.login(process.env.TOKEN);
