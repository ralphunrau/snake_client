const net = require('net');

const connect = () => {
  const conn =  net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  conn.on('connect', () => {
    console.log('Heelo sah I see you!')
    conn.write('Name: RMU')
  })

  conn.on("data", (data) => {
    console.log(data)
  });
  
  conn.setEncoding('utf8');
  
  return conn;
  };

module.exports = {
  connect
};