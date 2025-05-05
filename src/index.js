const { app } = require('@azure/functions');
require('./functions/myfunctions');

app.setup({
    enableHttpStream: true,
});
