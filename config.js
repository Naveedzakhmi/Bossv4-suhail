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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_33_02_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDU2LFxuICAgICAgICA3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDg3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg3LFxuICAgICAgICA1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUGFoSTd0WGlZaXcvTEJ0QWpMZWNlQlFlRkJDUTVNVlA0L0FTb1VScjZoST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSndDaklRMUdRX0M0dlF2ZXhtX3YxZ1wiLFxuICBcInBob25lSWRcIjogXCJhMDI3NWVlMi0xZDA4LTRkZWQtODMxZS05M2RkNzUyMjBhNDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgNixcbiAgICAgIDMwLFxuICAgICAgMzUsXG4gICAgICA0NCxcbiAgICAgIDIxOCxcbiAgICAgIDgyLFxuICAgICAgNzEsXG4gICAgICA2NCxcbiAgICAgIDQ4LFxuICAgICAgNDYsXG4gICAgICAyNDgsXG4gICAgICAxOTIsXG4gICAgICAxOTEsXG4gICAgICA0MSxcbiAgICAgIDM1LFxuICAgICAgMTkzLFxuICAgICAgMTE5LFxuICAgICAgMTA2LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMTcsXG4gICAgICAxNTEsXG4gICAgICAzNCxcbiAgICAgIDQwLFxuICAgICAgMjEsXG4gICAgICAxOTAsXG4gICAgICA1NixcbiAgICAgIDIzOCxcbiAgICAgIDE3MCxcbiAgICAgIDI1MSxcbiAgICAgIDY2LFxuICAgICAgMTMwLFxuICAgICAgODYsXG4gICAgICAxNDIsXG4gICAgICA2MSxcbiAgICAgIDIzLFxuICAgICAgMTA2LFxuICAgICAgODEsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxV1RaSEFRV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTgyNjg5NTUzOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIuSyAgICAgRyAgICAgRiA+Pj4+XCIsXG4gICAgXCJsaWRcIjogXCIxMzM5MjM2MjM1Njk4ODo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2czJ0Y0JFTkwrZ2IwR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMTZVMk5JbGV4WlBPdmYzejBMY0NHQ0x0YWZKZUhQdHRGNkpzWWpXUTR4UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmRzQwUjgrcENPMTJlTmRLU3ZBUUFqLzVqSnFTaVVmb2p2eFpwUWZkVi8rZFF6Q1FNSWhMVlZXQ0d2SXQyMy9HdlNSd1h1cUZZTHlZZGYyeWZEY2xDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2M3AzVThTa2tiakR5dzc2OWdvS2N5V0RsTEFadyt1Ykt1TG9aWlBqNGVOQllRZmY3SVFVMlpWWXNjS1hWdW91WXFlcFkrbTViNXY3Z1ZEMkpLNFlqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxODI2ODk1NTM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM4NTcxNjA2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjVXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1R3JWblpyTHIyYmdvRGJlRm1HUExLZThPNHlzdVBJdXpVMS9CMWNybjFrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ1MjM3NjE4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9=="  // PUT your SESSION_ID 


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
