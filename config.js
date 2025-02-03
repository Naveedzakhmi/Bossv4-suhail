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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_39_02_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMixcbiAgICAgICAgNSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRodkFXOU5HSzlvMXRnV0tGcVJMT3VtTGhIVW4vYVo2cTNnclZkVkNTUUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNZT1F0R0RCVG5PdjY1cmg3TVp6TXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjU2YTNiZjktMGYzZS00YjZjLWE3NTMtYmM0ZDc3NTY1NGIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgMTQyLFxuICAgICAgMTE5LFxuICAgICAgNixcbiAgICAgIDIwMixcbiAgICAgIDIwNCxcbiAgICAgIDE3MyxcbiAgICAgIDE1LFxuICAgICAgMTgxLFxuICAgICAgMTYsXG4gICAgICAxMjQsXG4gICAgICA1NixcbiAgICAgIDYzLFxuICAgICAgODYsXG4gICAgICA0LFxuICAgICAgMTc3LFxuICAgICAgODgsXG4gICAgICAyNTQsXG4gICAgICAxOTMsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyMzUsXG4gICAgICAxOTgsXG4gICAgICAxNTcsXG4gICAgICAyMjMsXG4gICAgICAyNTAsXG4gICAgICAyMjQsXG4gICAgICAyMzUsXG4gICAgICA5MyxcbiAgICAgIDUsXG4gICAgICAxMTYsXG4gICAgICA0MSxcbiAgICAgIDE3NixcbiAgICAgIDY0LFxuICAgICAgMTE2LFxuICAgICAgOTQsXG4gICAgICAzOCxcbiAgICAgIDY1LFxuICAgICAgNixcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSOEFTSjlDTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTgyNjg5NTUzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIuSyAgICAgRyAgICAgRiA+Pj4+XCIsXG4gICAgXCJsaWRcIjogXCIxMzM5MjM2MjM1Njk4ODo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2czJ0Y0JFSVN0Z2IwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMTZVMk5JbGV4WlBPdmYzejBMY0NHQ0x0YWZKZUhQdHRGNkpzWWpXUTR4UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKM1NzOFdoQmMrMkI2NFhJbU0wc0tJQStxZEFrUk82Y0F6TEZKZkR3cTBNYmZ0VTlZNmUyeml6ME94dTdsK0ZUVU5lTDB4ZEkvQndLbnRUbkZEWWNDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKRUJWRG9qQkVFclYzZlFuc0pkVUUzang1Q3Rhbm0zWFBIQ2pQZVF2cjVDVDVuWFk5L2JITktBWld2Q0ZtNFo5eFgwQmhqckJQanJuQ2w2SEk3cmVnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxODI2ODk1NTM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM4NTYxMTYxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
