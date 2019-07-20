const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token : 'NTU5ODc5OTEyMzU4Njc0NDMy.XTNpkA.8tv_AM4adylmJBKH7ZtzEEY9mh8' });

manager.spawn(4);
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));
