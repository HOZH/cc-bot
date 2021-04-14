const ms = require("ms");
module.exports = {
  name: "mute",
  description: "mute cmd",
  execute(msg, args) {
    const target = msg.mentions.users.first();
    if (target) {
      let mainRole = msg.guild.roles.cache.find(
        (role) => role.name === "member"
      );
      let muteRole = msg.guild.roles.cache.find((role) => role.name === "mute");

      let memberTarget = msg.guild.members.cache.get(target.id);

      if (!args[1]) {
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        msg.channel.send(`<@${memberTarget.user.id}> has been muted`);
        return;
      } else {

        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        msg.channel.send(`<@${memberTarget.user.id}> has been muted`);

        if(args[1].endsWith('s')){
        setTimeout(() => {
          memberTarget.roles.remove(muteRole.id);
          memberTarget.roles.add(mainRole.id);
          msg.channel.send(
            `<@${memberTarget.user.id}> has been muted for ${args[1]}`
          );
        }, ms(args[1]));
    }
      }
    } else {
      msg.channel.send("can't find that member");
    }
  },
};