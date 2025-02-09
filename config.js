const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923182689553" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923182689553";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923182689553";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || SUHAIL_12_48_02_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK3RIeFNmRFkxSytZRktxZUx2elpNYkh6OENBZGVLNTFveDdXR0t2SEYyMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRENJWWJLRXBRRW1iRWlMX3ROTWpXd1wiLFxuICBcInBob25lSWRcIjogXCJiNGEwY2Y0MS0wZmZiLTQ5M2MtYmEzYS0zMDQ5ZWJjY2M2YjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgNjYsXG4gICAgICA5NixcbiAgICAgIDI5LFxuICAgICAgMzUsXG4gICAgICAxNTQsXG4gICAgICA3MSxcbiAgICAgIDIwMixcbiAgICAgIDExMyxcbiAgICAgIDI5LFxuICAgICAgMTkwLFxuICAgICAgNTMsXG4gICAgICAxODYsXG4gICAgICAxMixcbiAgICAgIDQ4LFxuICAgICAgNTcsXG4gICAgICAxNzAsXG4gICAgICA2LFxuICAgICAgMjQ2LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMTI4LFxuICAgICAgMzgsXG4gICAgICAxMjcsXG4gICAgICA3MyxcbiAgICAgIDIyNixcbiAgICAgIDI0NixcbiAgICAgIDk2LFxuICAgICAgMjM3LFxuICAgICAgMjI5LFxuICAgICAgNzEsXG4gICAgICAyNSxcbiAgICAgIDE0OSxcbiAgICAgIDMwLFxuICAgICAgMjE3LFxuICAgICAgMTgzLFxuICAgICAgMTczLFxuICAgICAgMTM5LFxuICAgICAgMTMsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZWEVMU0s5M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTgyNjg5NTUzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOYXZlZWRaQUtITWlcIixcbiAgICBcImxpZFwiOiBcIjEzMzkyMzYyMzU2OTg4OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHpzMnRjQkVQZkhvcjBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxNlUyTklsZXhaUE92ZjN6MExjQ0dDTHRhZkplSFB0dEY2SnNZaldRNHhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktSSnlqek5WNXJ1WWxSUTJkU0FWM1ZwVTkxb0MzdTByd0Nrb1F4TUxLd0VycnJvM28yYitJK2U0eko0VVdOWE5aRlRxQmsyYnhIbUloWUg0NnlwVUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRTc2dUeThScHNLdDIwV3pldlZSSHR5QitkTktNOTZ3eXEvd2RSaW9XZVRQMjV2aEYrdmczY3V0V0doNW1rYW9uVUVudkxhWmRnbEpoL3J0NVdQZ2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE4MjY4OTU1Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzkxMDUyNzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
