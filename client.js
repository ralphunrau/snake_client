const net = require('net');

const connect = (host, port, name) => {
  const conn =  net.createConnection({
    host: host,
    port: port
  });

  conn.on('connect', () => {
    console.log('Heelo sah I see you!')
    conn.write(name)
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
