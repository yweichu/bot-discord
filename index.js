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
  const canaliTarget = ['1380543486054633533', '1380543627180376084'];
  const botTweetID = '1174332637322674186';

  if (
    canaliTarget.includes(message.channel.id) &&
    message.author.id === botTweetID
  ) {
    message.channel.send('<@&1379823108881645629> nuovo tweet! disabilita ping in <#1379151280240332830> <:kohane_sip:1389349346826260620>');
  }
});

require('dotenv').config();
client.login(process.env.token);

