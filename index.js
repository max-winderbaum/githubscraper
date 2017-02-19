const GitHub = require('github-api');
const creds = require('./creds');

const gh = new GitHub(creds);