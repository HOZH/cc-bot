module.exports = {
    name: "ping",
    description: "this is a ping command",
    execute(msg, args) {
      let role = msg.guild.roles.cache.find((r) => r.name === "Mod");
  
      // if (msg.member.roles.cache.has("831290686103486486"))
      if (msg.member.roles.cache.some((r) => r.name === "Mod")) {
        msg.channel.send("pong");
      } else {
        msg.channel.send("you don't have the permissions to ...");
        //   msg.member.roles.add("831290686103486486").catch (console.error);
  
        msg.member.roles.add(role).catch(console.error);
  
        //   msg.member.roles.remove("831290686103486486").catch(console.error);;
  
        //   msg.channel.send("pong");
  
  
        if(msg.member.permissions.has('KICK_MEMBERS')){
            msg.channel.send('you have the permission to kick members')
        }
      }
    },
  };