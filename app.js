const shell = require('shelljs')
//https://github.com/tehkhop/streamlabs-socket-client
const StreamlabsSocketClient = require('streamlabs-socket-client')

const client = new StreamlabsSocketClient({
  //https://streamlabs.com/dashboard#/settings/api-settings
  token: '<socket-token-here>',
  emitTests: true
})

client.on('follow', (data) => {
  console.log(data)
  shell.exec('./notify.sh "Follow" "'+ data.name +' esta seguindo o canal"')
})

client.connect()
