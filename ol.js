const Discord = require("discord.js");
const client = new Discord.Client();
var adminprefix = "!"
const developers = ["537675177677291530"]//KinG Codes

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client.on('message', message => {//KinG Codes
    var argresult = message.content.split(` `).slice(1).join(' ');//KinG Codes
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {//KinG Codes
    message.guild.leave();   //Toxic Codes
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//KinG Codes
      message.channel.send(`**✅   ${argresult}**`)//KinG Codes
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//KinG Codes
  } else
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅**`)//KinG Codes
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setadminprefix')) {//KinG Codes
  client.user.setadminprefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)//KinG Codes
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {//KinG Codes
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);//KinG Codes
}
});//KinG Codes

client.login(process.env.BOT_TOKEN);
