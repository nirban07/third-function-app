const { app } = require('@azure/functions');
require('./myfunctions');

app.setup({
    enableHttpStream: true,
});
