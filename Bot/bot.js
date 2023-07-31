import TelegramApi from 'node-telegram-bot-api';

const token = '6436007073:AAGx5Aw_FKLcxrK3eXBEIk_UEza7BXwhtqI'
const bot = new TelegramApi(token,{poling:true})

bot.on('message', msq => {
    const text = msq.text;
    const chatId = msq.chat.id;
    if (text === '/start')
    bot.sendMessage(chatId, `Вы написали мне ${text}`)
console.log(msq)
})