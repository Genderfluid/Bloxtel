const Discord = require("discord.js"),
    client = new Discord.Client({ disableEveryone: true }),
      prefix = ";",
    token = "NTU5ODc5OTEyMzU4Njc0NDMy.XS4WFA.sX6Uqaf0w24HM8ctx3PUHT-JxBQ";



client.on("ready",async() =>{
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity (`Bloxtel Support Guild | ;help`, {type:3}) 
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
client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {

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
      msg.channel.send("An error occured! Please make sure that I have the Kick Members permission and that YOU have the Administrator permission!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been muted!");
      }).catch(e => {
        msg.channel.send("An error occured! Please check that the Muted role has already been created, that I have the Manage Roles permission, and that YOU have the Administrator permission!");
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
        msg.channel.send("An error occured! Please check that the Muted role has already been created and that I have the Manage Roles permission and that YOU have the Administrator permission!");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = msg.content.split(" ")[1] + 1;
    msg.channel.bulkDelete(mc);
  }
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'Bloxtel join leave messages');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {
  if (message.content === ';avatar') {
    message.reply(message.author.avatarURL);
  }
});





client.on('message', message => {
 if(message.content === ";ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

client.on('message', message => {
  if (message.content === ';version') {
    message.channel.send('Bloxtel is currently running Version 22.0.');
  }
});

client.on('message', message => {
  if (message.content === ';help') {
    message.channel.send('My prefix is ;. Commands: ban, mute, unmute, kick, purge, help, version, ping, and invite.');
  }
});

client.on('message', message => {
  if (message.content === ';invite') {
    message.channel.send('https://bit.ly/bloxtel');
  }
});




client.login('NTU5ODc5OTEyMzU4Njc0NDMy.XSoqag.RZDGj3d8HAwnKcGETrwPbGgV8B0');
