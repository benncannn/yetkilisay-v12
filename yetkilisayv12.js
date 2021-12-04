const { Client } = require('discord.js');
const client = new Client();

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"));
  let yetkili = message.guild.roles.cache.get('STAFF İD');  


  let ses = message.guild.members.cache.filter(kullanici => kullanici.roles.highest.position >= yetkili.position && kullanici.voice.channel && !kullanici.user.bot && kullanici.presence.status !== "offline"); 
  let ses2 = message.guild.members.cache.filter(kullanici => kullanici.roles.highest.position >= yetkili.position && !kullanici.voice.channel && !kullanici.user.bot && kullanici.presence.status !== "offline"); 
  let kapalı = message.guild.members.cache.filter(m => !m.user.bot && m.presence.status === "offline").size
  let dnd = message.guild.members.cache.filter(m => !m.user.bot && m.presence.status === "dnd").size
  let online = message.guild.members.cache.filter(m => !m.user.bot && m.presence.status === "online").size
  let idle = message.guild.members.cache.filter(m => !m.user.bot && m.presence.status === "idle").size
  let toplam = message.guild.members.cache.filter(kullanici => kullanici.roles.highest.position >= yetkili.position && !kullanici.user.bot);
  
  message.channel.send(`\`\`\`| TOPLAM | AKTİF | KAPALI | SESTE | SESTE OLMAYAN |  \n---------------------------------------------------\n| ${toplam.size} kişi | ${dnd+online+idle} kişi | ${kapalı} kişi | ${ses.size} kişi | ${ses2.size} kişi | \`\`\``)
  message.channel.send(`\`\`\`Seste Olmayan Kişiler\n\n${ses2.map(y => y).join(',') || "HERKES SESTE"}\`\`\``)
   };

exports.config = {
enabled: true,
guildOnly: false,
aliases: ["yetkilisay"],
