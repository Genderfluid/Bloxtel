const Discord = require("discord.js"),
    client = new Discord.Client({ disableEveryone: true }),
      prefix = ";",
    token = "";

const config = require("./config.json");



  switch (currentActivity) {
    case 0:
      return { text: 'https://RoVer.link' }
    case 1: {
      let totalGuilds = (await shardingManager.fetchClientValues('guilds.size')).reduce((prev, val) => prev + val, 0)
      totalGuilds = Util.toHumanReadableNumber(totalGuilds)
      return { text: `${totalGuilds} servers`, type: 'WATCHING' }
    } case 2:
      return { text: `${totalUsers} users`, type: 'LISTENING' }
    case 3:
      return { text: '!rover', type: 'LISTENING' }
  }
}

client.on("ready", () => {
  console.log("ready to rumble!");
});


var bannedwords = "buster".split(",");

client.on("message", msg => {
  if (msg.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (msg.content.toLowerCase().includes(bannedwords[i])) {
      msg.delete();
      msg.reply("Please don't swear!");
      return;
    }
  }

  if (msg.author.bot) return;
  if (!msg.member.hasPermission("KICK_MEMBERS")) return;

  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("An error occured! Please make sure that I have the Kick Members permission and that you have the Kick Members permission.");
    });
  }
    if (!msg.member.hasPermission("BAN_MEMBERS")) return; 
    if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send("An error occured! Please make sure that I have the Ban Members permission and that you have the Ban Members permission.");
    });
  }
  if (!msg.member.hasPermission("MANAGE_ROLES")) return;
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been muted!");
      }).catch(e => {
        msg.channel.send("An error occured! Please make sure that both you and I have the Manage Roles permission.");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been unmuted!");
      }).catch(e => {
        msg.channel.send("An error occured! Please make sure that I have the manage roles permission, that the Muted role is already created, and that YOU have the Manage Roles permission.");
        console.log(e);
      });

    }
  }
   if (!msg.member.hasPermission("MANAGE_MESSAGES")) return; 
   if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
   var mc = msg.content.split(" ")[1];
   msg.channel.bulkDelete(mc);
  }
});


client.on('message', message => {
  if (message.content === ';avatar') {
    message.reply(message.author.avatarURL);
  }
});





client.on('message', message => {
  if (message.content === ';version') {
    message.channel.send('Bloxtel is currently running Version 22.0.');
  }
});

client.on('message', message => {
  if (message.content === ';help') {
    message.channel.send('My prefix is ;. Commands: ban, mute, unmute, kick, avatar, purge, help, version, ping, and invite.');
  }
});

client.on('message', message => {
  if (message.content === ';invite') {
    message.channel.send('Bloxtel V2 is coming out soon. When that happens, this bot will be deleted! Go to https://bit.ly/bloxtel_v2_invite to make sure you don\'t lose service!');
  }
});




client.login(config.token);
