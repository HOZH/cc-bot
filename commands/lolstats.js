const lolQuery = require("lol-query");
module.exports = {
  name: "lolstats",
  description: "this is a cmd command",
  execute(msg, args, Discord) {
    if (args.length === 0) {
      msg.channel.send("you need to specify a string for username");
    } else {
      let username = args.join(" ");
      console.log(username);

      lolQuery.getStats(username, "na", false).then((data) => {
        const newEmbed = new Discord.MessageEmbed()
          .setColor("#304281")
          .setTitle(username)
          .setURL(`https://na.op.gg/summoner/userName=${args.join("%20")}`)
          .setDescription("op.gg stats")
          .addFields(
            {
              name: "Name",
              value: data.Name,
              inline: true,
            },
            {
              name: "Level",
              value: data.Level,
              inline: true,
            },

            {
              name: "Recent wins",
              value: data.RecentWins,
              inline: true,
            },
            {
              name: "Recent loses",
              value: data.RecentLoses,
              inline: true,
            },
            {
              name: "Rank",
              value: data.Rank,
              inline: true,
            },
            {
              name: "LP",
              value: data.RankedLP,
              inline: true,
            },
            {
              name: "Recent KDA",
              value: data.KDARatio,
              inline: true,
            },
            {
              name: "Recent win rate", 
              value: data.WinRate,
              inline: true,
            },
            {
              name: "Main lane",
              value: data.MainLane,
              inline: true,
            },
            {
              name: "Main champion",
              value: data.MainChampion,
              inline: true,
            }
          )
          .setImage(
            "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"
          )
          .setFooter("Credit by HOZH");

        msg.channel.send(newEmbed);
      });
    }
  },
};
