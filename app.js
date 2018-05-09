var controller = require('./controller');
var bodyParser = require('koa-bodyparser');
var koa = require('koa');
var app = new koa();
var staticFiles = require('./static-files');
var templating = require('./templating');
var isProduction = process.env.NODE_ENV === 'production';

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  var
    start = new Date().getTime(),
    execTime;
  await next();
  execTime = new Date().getTime() - start;
  ctx.response.set('X-Response-Time', `${execTime}ms`);
});
if (!isProduction) {
  let staticFiles = require('./static-files');
  app.use(staticFiles('/static/', __dirname + '/static'));
}
app.use(bodyParser());
app.use(templating('views', {
  noCache: !isProduction,
  watch: !isProduction
}));
app.use(controller());
app.listen(8080);
