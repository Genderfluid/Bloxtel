const Discord = require("discord.js"),
    client = new Discord.Client({ disableEveryone: true }),
        BFDAPI = require("bfdapi.js");
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

client.on("ready",()=>{
    const bfd = new BFDAPI(client,"64e674ef3e42f6053197edfe33b8532ceb14efef5ac6354e9a8a1206a26e1fd9fb0394694a94eb242d50b4677b18884bb5d06a098902b8b25033793e0584634d",/* autopost stats: true/false*/false,/* autopostInterval, how often to post stats? between 1 minute and 1 day (in ms), defaults to 5 minutes*/6e4,/*shardSupport, attempt to deal with ShardingManager sharding by fetching from each shard*/false);
    bfd.on("post",(count)=>console.log(`Posted guild count: ${count}`));
    bfd.on("error",(err)=>console.error(`Error while posting: ${err}`));
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
      msg.channel.send("An error occured!");
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
        msg.channel.send("An error occured!");
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
        msg.channel.send("An error occured!");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = msg.content.split(" ")[1];
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
  if (message.content === ';ping') {
    message.channel.send('Pong');
  }
});

client.on('message', message => {
  if (message.content === ';version') {
    message.channel.send('Bloxtel is currently running Version 22.0.');
  }
});

client.on('message', message => {
  if (message.content === ';help') {
    message.channel.send('My prefix is ;. Commands: ban, mute, unmute, kick, purge, calc, help, version, ping, youtube, invite, and guilds.');
  }
});

client.on('message', message => {
  if (message.content === ';invite') {
    message.channel.send('https://bit.ly/bloxtel');
  }
});

client.on('message', message => {
    if (message.content === ';config') {
      message.channel.send('If you would like further custom configuration, please DM @RogueNeon#0725.');
    }
  });


client.login('NTU5ODc5OTEyMzU4Njc0NDMy.XSoqag.RZDGj3d8HAwnKcGETrwPbGgV8B0');
