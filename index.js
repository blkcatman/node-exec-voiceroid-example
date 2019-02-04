const { RTMClient } = require('@slack/client');
const TOKEN = '<ReplaceHereYourBotUserOAuthAccessToken>'
const { execSync } = require('child_process');

const rtm = new RTMClient(TOKEN);
rtm.start();

rtm.on('message', (message) => {
  if(!message.text) {
    return;
  }
  execSync(`.\\bin\\VoiceroidTClient.exe Yukari ${message.text}`);
  console.log(`user:${message.user}, message: ${message.text}`);
});