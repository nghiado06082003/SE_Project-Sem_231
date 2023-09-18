var express = require('express');
var url = require('url');
var fs = require('fs');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");
var session = require('express-session');
var cookieParser = require('cookie-parser');

const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const printRoute = require('./routes/print');
const homepageRoute = require('./routes/homepage');
const profilesRoute = require('./routes/profiles');
const signinRoute = require('./routes/signin');
const signupRoute = require('./routes/signup');
const signoutRoute = require('./routes/signout');
const statisticRoute = require('./routes/statistic');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

const cspConfig = {
    directives: {
      scriptSrc: ["'self'", "ajax.googleapis.com", "cdn.jsdelivr.net", "www.google.com"],
      frameSrc: ["'self'", "www.google.com"],
    },
  };



var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.contentSecurityPolicy(cspConfig));
app.use(express.static('assets'));
app.use(limiter);
app.use(cookieParser());
app.use(session({
    secret: "Your secret key",
    resave: false,
    saveUninitialized: true,
}));

app.use("/about", aboutRoute);
app.use("/contact", contactRoute);
app.use("/print", printRoute);
app.use("/homepage", homepageRoute);
app.use("/profiles", profilesRoute);
app.use("/signin", signinRoute);
app.use("/signup", signupRoute);
app.use("/signout", signoutRoute);
app.use("/statistic", statisticRoute);

app.listen(8080);