const fs = require('fs');

//===========================//

const {
  smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction');

//===========================//

global.d = new Date();
global.calender = d.toLocaleDateString('id');

//===========================//

// General Settings 
global.apikey = 'ptla_6pKq2Q5hGxajeMBrRdazQLkG1NSpXwIIi1FYZNmkUkQ'; // Replace with your panel API key
global.capikey = 'ptlc_USy1wdkOexq5IIfootLXskwsgoZvDu1oQvgybJ0qlWC'; // Replace with your Capikey panel
global.domain = 'https://zetsubo-stardust.zxvision.biz.id';
global.eggsnya = '15'; // Replace with your Eggs panel
global.location = '1'; // Replace with your location panel

//===========================//

global.prefa = ['', '!', '.', ',', '🐤', '🗿'];
global.owner = ['2347069482550'];
global.ownMain = '2347069482550';
global.NamaOwner = '𝚸𝚫𝚻𝚪𝚯𝚴 𝛁1 𝚩𝐔𝐆'; // Do not change 
global.sessionName = 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5PYkE4MjdmSEQvRFo4RnJXTytUZ1hEaFpFVHV1T0hHbUhOaVhJN3BYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFFHUm5rSGhUNXowdlNMZ3FPVEk2VmVqMDVtUnRkNzFtVS9MTWpxMjhVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTHFGN0hYZXZ6anF2NXZ1NFVucE9pd1QrSWpnZ1VCU1NxVUJGWFlDdVdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0YzNVbE9LYVN0SXpnNzd3ZnNEbmVVcHlwN2Y5akdFdTZIK28ydXhiQTBzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFeS96dy9VOHUxb3BGNXJqUmVVQmtQdFNRZE5aTUdkTUhvRGdMdkVaRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpGajNwRzRPWjAvYk05eTJyTk1TT1lUdThIOFFpakJwZS9SVDFJZFBDMFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUYvYVdwU3JrK3Nud0M3TXVvZlVOQjIwMFQyNVlRZHk5c2RYNDhPSUdYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickRYMXBzQjBieUxKSUVYUUdzUTU3ZFp6azJzWHl6M0F0R1dsZHhuanFsYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFLTTB4S01nTEt4RkpRZ003UHZoejN3dkxCa0JqL3ZHbVUwTTlCa3ZkRXF6RDFjQW9FU0R6NlEwZUsvVDRwUnludTdZc0QrUkMwRC9KMHp5ZmhHbURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJ1QmdLMlBLUjNNOGMvcFNmZUZFa29WQWV2V0QzbHFSTzZyTTRYRjlSM2UwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLQ2h2TnhiVFNWTzZMOGRUMG9QakhBIiwicGhvbmVJZCI6IjljZTNmMzE5LTllOGEtNDJlMS04NzQ3LWUzOGUwZmZkMTgwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhdWJKTWpwZ2VGZE5JSmxMSEFJMjZaOXhnUWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3NJT01pdnJQby9ENWpqSmZwVFBCbFZ4VnZrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpUM1ZHNlpZIiwibWUiOnsiaWQiOiIyMzQ3MDY5NDgyNTUwOjE0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVEQvZXdHRU5QZG1ic0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOWGM3YnA4bm5WLzVUaXRWSVJYYnMwcVgxTjJIWkNXWXRSVXlobFpxUVM0PSIsImFjY291bnRTaWduYXR1cmUiOiJja0plY3B6ZGFPbFQvdkVua3ozbVVrbnlucFl1bTFaM2RCQmlocDRDYm9SdFM1a0VJaTdpOUh0MEhvbGpMb3g3UlhjMmtUSUNXK2kzYmoyZExTT2hDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRGl4Yi91cEV4MHNkYXdhU1dDVW5LZHBKUExWUUp4dnE3MjR4WllIUVpiSGl6dzdtRSthM2I2WmYrM3R3VktpUVFaSWFZL3NWK0M0N0VjVmNBM29VQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDY5NDgyNTUwOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRWM08yNmZKNTFmK1U0clZTRVYyN05LbDlUZGgyUWxtTFVWTW9aV2FrRXUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ3NjYzMDR9';
global.connect = true; // Set to false if using QR Code
global.namabot = '𝚸𝚫𝚻𝚪𝚯𝚴 𝛁1 𝚩𝐔𝐆'; // Do not change
global.author = '𝚸𝚫𝚻𝚪𝚯𝚴 𝛁1 𝚩𝐔𝐆'; // Do not change
global.packname = 'PATRON 🚹'; // Change if needed
global.url = 'https://whatsapp.com/channel/0029Val0s0rIt5rsIDPCoD2q'; // Do not change

//===========================//

global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`;

//===========================//

global.country = '234';
global.system = {
  gmail: 'winneraileme6@gmail.com',
};

//===========================//

global.decor = {
  menut: '❏═┅═━–〈',
  menub: '┊•',
  menub2: '┊',
  menuf: '┗––––––––––✦',
  hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',
  menut: '––––––『',
  menuh: '』––––––',
  menub: '┊☃︎ ',
  menuf: '┗━═┅═━––––––๑\n',
  menua: '',
  menus: '☃︎',
  htki: '––––––『',
  htka: '』––––––',
  haki: '┅━━━═┅═❏',
  haka: '❏═┅═━━━┅',
  lopr: 'Ⓟ',
  lolm: 'Ⓛ',
  htjava: '❃'
};

//===========================//

// Response
global.mess = {
  ingroup: 'This feature can only be used in groups.',
  admin: 'This feature is specifically for group admins🖕.',
  owner: 'You are not the owner🫵😡.',
  premium: 'You are not a premium user.',
  seller: 'This feature can only be used by resellers and the owner.',
  usingsetpp: 'Setpp can only be used by the owner, do you think I\'m stupid? 😡🫵',
  wait: '*processing♻️ chillax....♻️*',
  success: '*Successful* 😈💯.....',
  bugrespon: '♻️😈😭 *Sent target to the afterlife.....* 🦠🕷️👾'
};

//===========================//

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p';
let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});
