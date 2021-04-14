module.exports = {
    name: "clear",
    description: "clear message command",
   async execute(msg, args) {
      if (!args[0]) {
        return msg.reply("please enter the amount of messages you want to clear");
      }
      if (isNaN(args[0])) {
        msg.reply("please enter a number for...");
      }
  
      if (args[0] > 10) {
        msg.reply("you can't delete more than 10 msgs");
      }
      if (args[0] < 1) {
        msg.reply("you must delete at least one message");
      }
  
      await msg.channel.messages.fetch({limit:args[0]}).then(msgs=>{
          // console.log(msgs)
          // console.log(msgs)
          msg.channel.bulkDelete(msgs)
      })
  
    },
  };