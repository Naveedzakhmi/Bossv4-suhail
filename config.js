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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923182689553";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923182689553";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923182689553";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_49_02_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICA4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMixcbiAgICAgICAgODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICA4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRR3RnQS9wRk9qTGFUdW5nREpxUmxUcFo3VXNiUWZKNGgyUUljN0pNbEFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE4MjY4OTU1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQURDQjg3MzdCOTI4OEM1NTUzMzZFODdFQTU5Q0M0RkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM4NTE0OTU0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl80bmw3MWxfVGRpNzlNOFdjLWFpVmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTJhZTBhZTgtZmY0Yy00N2ViLTlkODQtZDBjMTY4ZjFmOTAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgNjEsXG4gICAgICA5NixcbiAgICAgIDIwLFxuICAgICAgMTUzLFxuICAgICAgNjIsXG4gICAgICA2OCxcbiAgICAgIDc4LFxuICAgICAgNzQsXG4gICAgICAyMjIsXG4gICAgICAyMzEsXG4gICAgICAxNzYsXG4gICAgICAxNTksXG4gICAgICAxODEsXG4gICAgICAxMjgsXG4gICAgICAyMDgsXG4gICAgICAxMjIsXG4gICAgICAxMCxcbiAgICAgIDM1LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgMTM4LFxuICAgICAgMTIzLFxuICAgICAgNTMsXG4gICAgICA2MyxcbiAgICAgIDE4OSxcbiAgICAgIDcsXG4gICAgICA0MCxcbiAgICAgIDExNixcbiAgICAgIDE3MCxcbiAgICAgIDI0NCxcbiAgICAgIDE1MCxcbiAgICAgIDEzNixcbiAgICAgIDcsXG4gICAgICA5OCxcbiAgICAgIDEyMCxcbiAgICAgIDc4LFxuICAgICAgMjE4LFxuICAgICAgMTQ0LFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE1OEtKTk5CXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxODI2ODk1NTM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIi5LICAgICBHICAgICBGID4+Pj5cIixcbiAgICBcImxpZFwiOiBcIjEzMzkyMzYyMzU2OTg4OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHJzMnRjQkVJREUvcndHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxNlUyTklsZXhaUE92ZjN6MExjQ0dDTHRhZkplSFB0dEY2SnNZaldRNHhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJDR3czT1NWSWlSYWU0RWY4VHB1bm5obVRvdVFVTDJrT2FoREtKRVI4ZUpwTUEvNytoMXQwdFFxVktyUzV3NFlFa1d2VkgrRkxUSlJ0VVY5T0FRTEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImU4a3AvcU05RVpmbW1sRWE0WXZDcGR3ZFZ1RGZzYllpZHBOUzdURmNIVUxCdGxEbjYreW42dGxBOEI4YXFJS1MxdFl5SkxzWVI3S3E1KzRSQmM4V2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE4MjY4OTU1Mzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzg1MTQ5NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGNVdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUY1Vy5qc29uIjogIntcImtleURhdGFcIjpcInVHclZuWnJMcjJiZ29EYmVGbUdQTEtlOE80eXN1UEl1elUxL0IxY3JuMWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDUyMzc2MTg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzg1MTQ5NDk5OTdcIn0iCn0==="  // PUT your SESSION_ID 


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
