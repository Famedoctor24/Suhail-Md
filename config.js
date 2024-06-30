const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349118181352";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_44_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUxLFxuICAgICAgICA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYzLFxuICAgICAgICA2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwielAxK0pWSHlDVk9EcitYVWFrR1lSSzY2NGZBRVpqdnFKbm5mU0IrN1VtND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNXJfLTdKZUtTRDJ5dFJQSGlIWE9qd1wiLFxuICBcInBob25lSWRcIjogXCIwMzM5NThhMi1jOTc5LTQ5ZTktYTk2Ny1iMzJjMTgyNGFjYjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTksXG4gICAgICAxMDgsXG4gICAgICAyNDIsXG4gICAgICAyMDAsXG4gICAgICAxMDksXG4gICAgICAyLFxuICAgICAgNjAsXG4gICAgICAxMTYsXG4gICAgICA4NixcbiAgICAgIDE3NSxcbiAgICAgIDM2LFxuICAgICAgMzgsXG4gICAgICAyMTIsXG4gICAgICA2NixcbiAgICAgIDYsXG4gICAgICAyNTUsXG4gICAgICA2OSxcbiAgICAgIDQ4LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTQ0LFxuICAgICAgMzQsXG4gICAgICAyMDAsXG4gICAgICAxNDUsXG4gICAgICAxNzMsXG4gICAgICAyNDIsXG4gICAgICAyMjgsXG4gICAgICAyMDcsXG4gICAgICAxODYsXG4gICAgICAxOTksXG4gICAgICAxNDIsXG4gICAgICA3MixcbiAgICAgIDUsXG4gICAgICAyMSxcbiAgICAgIDEzNSxcbiAgICAgIDEzOCxcbiAgICAgIDU4LFxuICAgICAgNDksXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEdFODhUN1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTgxODEzNTI6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxOTYwNjM5MjI3OTIzODoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMaTM1L3NHRUt2ZWhiUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlkyY2xITVh6ejcyeG5oMDYxNHlJcTYyZUdwbEcveTkzdi94b3kvZW8va3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaTFJYVUwbVE3YXd1djgyT2pJdzd2ZTlpK2lqZy9OdlRFTFBpdEJnNk1RckNkS1pWWWE5TEZzU1NMMmp1Q1dOZHg4S2lIakdFWEVRWjFQL2Q2eXNJQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMkYzLzB4NDd1OGFEdVJWbXMzNTN4K2tUdkhZNW9ZbmdUOHlscGlWNnpLbzJnZnBnaUp2RGwrSjE4cEIvMVNHR3U5V1djWVZseldmY0U5SmNpRVFERGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExODE4MTM1MjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc1ODYzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtpNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2k2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVENPK0FwajlhU2FSeEtiZnJqamcvdi9JKzFxekdXYnRac1kwSjV4Y1FRRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODcwMjU3MDgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3NTc1NjYxMzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
