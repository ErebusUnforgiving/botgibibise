const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\

if(!["805369157457674261"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\
  
  
  let ramo = "**Sesli Kanalda Olan Yetkililer:**\n";
  let ramo2 = "**Sesli Kanalda Olmayan Yetkililer:**\n";
  message.guild.roles.cache.get("805369567194644510").members.map(r => {
    ramo += r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
    ramo2 += !r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
  });

  const ramoembed = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription("" + ramo + "" + ramo2 + "")
  message.channel.send(ramoembed).then(s => s.s);
};
module.exports.conf = {
  aliases: ["sesli"]
};

module.exports.help = {
  name: "yetkilisay"
};