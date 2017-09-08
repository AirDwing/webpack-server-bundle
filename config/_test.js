exports.enabledModules = ['test'];

exports.mysq = {
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root'
};

exports.redis = {
  host: 'localhost',
  port: 6379,
  db: 1,
  ttl: 3600
};

exports.server = {
  port: 3300,
  hostname: 'localhost'
};
