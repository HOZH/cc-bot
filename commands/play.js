const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");

module.exports = {
  name: "play",
  description: "-",
  async execute(msg, args) {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel)
      return msg.channel.send(
        "You need to be in a channel to execute this command!"
      );

    const permissions = voiceChannel.permissionsFor(msg.client.user);

    if (!permissions.has("CONNECT"))
      return msg.channel.send("you dont have the correct permissions");
    if (!permissions.has("SPEAK"))
      return msg.channel.send("you dont have the correct permissions");

    if (!args.length)
      return msg.channel.send("You need to send the second arg");

    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);

      return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
    };
    console.log(args.join(" "))

    const video = await videoFinder(args.join(" "));


   

    if (video) {
      const stream = ytdl(video.url, { filter: "audioonly" });
      connection
        .play(stream, { seek: 0, volume: 1 })
        // .on("finish", () => [voiceChannel.leave()]);
        // .on("finish", () => [voiceChannel.leave()]);


      await msg.reply(`now playing:${video.title}`);
    } else {
      msg.channel.send(" no video results found");
    }
  },
};