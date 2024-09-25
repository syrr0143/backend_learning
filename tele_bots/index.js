import { Telegraf } from 'telegraf'
import { message } from "telegraf/filters";
// https://t.me/demosyrr0143bot

const token=  "7880061365:AAFcJyps6FTKD953JEKrbTc1TJyhf5C_Fdo"

const bot = new Telegraf(token);
const viratKohliInfo = `
🏏 **Virat Kohli**
- Full Name: Virat Kohli
- Date of Birth: 5 November 1988
- Nationality: Indian
- Role: Batsman
- Batting Style: Right-handed
- Bowling Style: Right-arm medium
- Major Teams: India, Royal Challengers Bangalore

**Career Highlights**:
- ODI Debut: August 18, 2008 vs Sri Lanka
- Test Debut: June 20, 2011 vs West Indies
- T20 Debut: June 12, 2010 vs Zimbabwe

**Key Achievements**:
- ICC Men's Cricketer of the Decade (2011-2020)
- Fastest player to reach 8,000, 9,000, 10,000, 11,000, and 12,000 ODI runs
- Led India to a series win in Australia, 2018-19

For more detailed stats, visit: [Virat Kohli Stats on ESPN](https://www.espncricinfo.com/player/virat-kohli-253802)
`;

// Command to get Virat Kohli's information
bot.command("virat", (ctx) => {
  ctx.replyWithMarkdown(viratKohliInfo);
});

// Respond to any text message related to Virat Kohli
bot.on("text", (ctx) => {
  const message = ctx.message.text.toLowerCase();
  if (message.includes("virat") || message.includes("kohli")) {
    ctx.replyWithMarkdown(viratKohliInfo);
  } else {
    ctx.reply(
      'I can provide information about Virat Kohli. Just type /virat or mention "Virat Kohli"!'
    );
  }
});

// Start command
bot.start((ctx) => {
  ctx.reply(
    `Welcome, ${ctx.from.first_name}! I can provide information about cricketer Virat Kohli. Type /virat to know more.`
  );
});

// Help command
bot.help((ctx) => {
  ctx.reply(
    "Here are some commands you can use:\n/virat - Get information about Virat Kohli\n/help - Get this message"
  );
});

// Launch the bot
bot.launch();
console.log("Bot is running...");

// Graceful exit
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
