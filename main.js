const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");

const client = new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});

const prefix = ".";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("first bot is online...");
});

client.on("guildMemberAdd", (guildMember) => {
  let welcomeRole = guildMember.guild.roles.cache.find(
    (role) => role.name === "member"
  );

  guildMember.roles.add(welcomeRole);
//   guildMember.guild.channels.cache.get("718571890024906753/718571890448531527").send(`Welcome <@${guildMember.user.id}> `)
});


async function foo(tempClient,tempId,tempChannelId) {

 if(tempId==="534910818765111297"){
    const voiceChannel = tempClient.channels.cache.get(tempChannelId);


    if (!voiceChannel) return console.error("The channel does not exist!");
 


    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);

      return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
    };



    // const video = await videoFinder(args.join(" "));
    const video = await videoFinder("Dominating - Dota 2 Sound Effects Full HD");


    if (video) {
      const stream = ytdl(video.url, { filter: "audioonly" });
      connection
        .play(stream, { seek: 0, volume: 1 })


     
    } 
 }

 else{
    console.log(tempId)
 }
  }


client.on("voiceStateUpdate", function(oldMember, newMember){

    const tempId = newMember.id
    const tempChannelId = newMember.channelID



    console.log(client,tempId,tempChannelId)

    foo(client,tempId,tempChannelId)
    
 
    // console.log(newMember)
    // console.log(`a user changes voice state`);
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(msg, args);
  } else if (command === "cmd") {
    client.commands.get("cmd").execute(msg, args, Discord);
  } else if (command === "clear") {
    client.commands.get("clear").execute(msg, args);
  } else if (command === "mute") {
    client.commands.get("mute").execute(msg, args);
  } else if (command === "reactionrole") {
    client.commands.get("reactionrole").execute(msg, args, Discord, client);
  } else if (command === "play") {
    client.commands.get("play").execute(msg, args);
  } else if (command === "leave") {
    client.commands.get("leave").execute(msg, args);
  }
});

client.login("ODMxNjg1NjE0MzY5NjM2MzY0.YHY1lg.C4WuuiqwVww7HSnyB28j_4-OAFE");