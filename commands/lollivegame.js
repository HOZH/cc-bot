const lolQuery = require("lol-query");
module.exports = {
  name: "lollivegame",
  description: "this is a cmd command",
  execute(msg, args, Discord) {
    console.log("live game");

    if (args.length === 0) {
      msg.channel.send("you need to specify a string for username");
    } else {
      let username = args.join(" ");

      lolQuery.getLiveMatch(username, "na").then((data) => {
        console.log(data);

        console.log(data.error);

        if (data.error === 1) {
          msg.channel.send(
            `player ${username} don't have a active game right now`
          );
          return;
        } else {
          console.log(data);

          msg.channel.send(JSON.stringify(data.teamA, null, "\t"));
          msg.channel.send(
            "\n\n\n------------------------------------------------------------------------------------------------------------\n\n\n"
          );
          msg.channel.send(JSON.stringify(data.teamB, null, "\t"));
        }
      });
    }
  },
};
