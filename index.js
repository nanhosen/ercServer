// const http = require('http')
// const https = require('https')
// const url = require('url')
// const path = require('path')
// const fs = require('fs')
const port = process.env.PORT || 3090

// main starting point for our application
// const compression = require('compression')
var Koa = require('koa');
var Router = require('koa-router');
var serve = require('koa2-static-middleware');
// const bodyParser = require('body-parser')
// const morgan = require('morgan') // logging framework to log incoming http requests to our app


// const mongoose = require('mongoose').set('debug', false)
// const cors = require('cors')
// const config = require('./config')
// const Center = require('./models/centers')
// const ZoneInfo = require('./models/zoneinfo')
// const Status = require('./queries/status')




// mongoose.connect(config.getDbConnectionString(), err => {	
// 	if (err) throw err

// })

// // App Setup
// const UpdateZone = require('./controllers/updateZone')
// const StatusQuery = require('./controllers/statusQuery')
// const Authentication = require('./controllers/authentication')
// const passportService = require('./services/passport')
// const passport = require('passport')
// const json = require('koa-json')

// // create middleware/route-interceptor of sorts
// const requireAuth = passport.authenticate('jwt', { session: false }) // session: false means 'no cookies'
// const requireSignin = passport.authenticate('local', { session: false }) // route middleware

// const ercDataArchive = require('./archive/ercDataArchive')



const app = new Koa();
var router = new Router();


router.get('/day1', serve('./data', { index: 'day1.json' }));
router.get('/day2', serve('./data', { index: 'day2.json' }));
router.get('/day3', serve('./data', { index: 'day3.json' }));

// router.get('/',requireAuth, async (ctx) => {
// 	ctx.body({"message": "this is a secret code"})
// })
// router.post('/signin', requireSignin, Authentication.signin)

// router.get('/status', StatusQuery.statusQuery)






	
app
	// .use(json())
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3090);


