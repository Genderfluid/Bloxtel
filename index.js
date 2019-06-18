const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'NTU5ODc5OTEyMzU4Njc0NDMy.XPK0Cg.HI29Cyr8omutmg0ZGT3-TvZ9LnE' });

manager.spawn(4);
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));
