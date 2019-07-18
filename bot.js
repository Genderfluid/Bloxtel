const Discord = require("discord.js"),
    client = new Discord.Client({ disableEveryone: true }),
    prefix = ";",
    token = "";


client.on("ready",async() =>{
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity (`Bloxtel Support Server | ;help`, {type:3}) 
});

client.on("message",async(message) => {
    if(message.author.bot || message.content.indexOf(prefix) !== 0) return; 


    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
    switch(command) { 
        case "game": 
            return message.reply(`I am currently playing ${client.user.presence.game.name}!`);
            break;
    }
});

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
  if (!msg.member.hasPermission("ADMINISTRATOR")) return;

  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  msg.delete();
  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("An error occured!Please check that I have the Kick Members permission and you have the Administrator permission!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send("An error occured! Please check that I have the Ban Members permission and you have the Administrator permission!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been muted!");
      }).catch(e => {
        msg.channel.send("An error occured!Please check that the Muted role has already been created and that I have the Manage Roles permission and that you have the ADMINISTRATOR permission!");
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
        msg.channel.send("An error occured!Please check that I have the Manage Roles Permission and you have the Administrator permission!");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = msg.content.split(" ")[1];
    msg.channel.bulkDelete(mc);
  }

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'Join-Leave');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {
  if (message.content === ';avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (message.content === ';ping') {
    message.channel.send('Pong');
  }
});

client.on('message', message => {
  if (message.content === ';version') {
    message.channel.send('Bloxtel is currently running Version 20.0.');
  }
});

client.on('message', message => {
  if (message.content === ';help') {
    message.channel.send('My prefix is ;. Commands: ban, mute, unmute, kick, purge, help, version, ping, youtube, invite, and guilds.');
  }
});

client.on('message', message => {
  if (message.content === ';invite') {
    message.channel.send('https://bit.ly/bloxtel');
  }
});

  });



client.login('NTU5ODc5OTEyMzU4Njc0NDMy.XSoqag.RZDGj3d8HAwnKcGETrwPbGgV8B0');
