const CronJob = require('cron').CronJob;

module.exports.helloJob = new CronJob('* * * * * *', () => {
  console.log('Hello to you every second');
}, null, true, 'Asia/Gaza');
