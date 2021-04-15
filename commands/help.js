module.exports = {
    name: "help",
    description: "show commands available",
    execute(msg, Discord) {

        const newEmbed = new Discord.MessageEmbed()
            .setColor("#304281")
            .setTitle("Help Page")
            .addFields(

                {
                    name: ".play <keyword of music>",
                    value: "play music that found on youtube by keyword"
                },
                {
                    name: ".leave",
                    value: "makes bot to leave current voice channel immedately"
                },
                {
                    name: ".clear <number of messages>",
                    value: `admin only, delete messages on current text channel up to the parameater assigned to it,
             this commands can only delete up to 100 messages and messages sent within 2 weeks due to limitation of discord api`
                },
                {
                    name: ".lolstats <username>",
                    value: `"grab your lol stats from op.gg with a cute catty"`
                },
                {
                    name: ".lollivegame <username>",
                    value: `grab you current live game's stats from op.gg,
            Due to the constraint on discord embed, I cannot find a way to arrange these data properly within a couple of discord embed, thus the current layout of output sucks,
            this will be updated after I quit gaming on ranked this season`
                },


                {
                    name: "Temp",
                    value: `let ME KNOW if YoU see any fun potential I could add to this bot XD`
                },



            )

            .setFooter("Credit by HOZH");

        msg.channel.send(newEmbed);

    },
};