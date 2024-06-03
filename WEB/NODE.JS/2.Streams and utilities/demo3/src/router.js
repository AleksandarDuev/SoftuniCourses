const routs = {};

function register(method, path, handler) {
  if (routs[path] === undefined) {
    routs[path] = {};
  }
  routs[path][method] = handler;
};

function get(path, handler) {
    register('GET', path, handler)
};

function post(path, handler) {
    register('POST', path, handler)
}

function match(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);

  let handler;
  const actions = routs[url.pathname];
  if (actions) {
    handler = actions[req.method];
  }
  if (typeof handler === "function") {
    res.html = page =>{
      res.writeHead(200, {
        'Content-Type': 'text/html; charset = utf-8'
      });
      res.write(page);
      res.end();
    }
    res.redirect= location =>{
      res.writeHead(301, {
        Location: location
      });
      res.end();
    }
    handler(req, res);
  } else {
    defaultController(req, res);
  }
}
function defaultController(req, res) {
  // return 404
  res.writeHead(404)
  res.write('Not Found');
  res.end();
}

module.exports = {
    get,
    post,
    match
}
