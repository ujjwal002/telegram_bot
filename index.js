const { Telegraf } = require('telegraf');
const bot = new Telegraf('5691955469:AAG7pXWNQReDSU3MLzg-b0XFsUxmZZHa1pw');
bot.start((ctx) => ctx.reply('Welcome to the code bot created by ujjwal kumar'));
bot.launch();