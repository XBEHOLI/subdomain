const express = require('express')
const app = express()

app.use((req, res, next) => {
    const host = req.headers.host;
    const subdomain = host.split('.')[0]
    
    req.subdomain = subdomain

    next();
})

app.get('/auth', (req, res) => {
    res.send('Поддомен: ' + req.subdomain);
})

app.listen(8080, () => {
    console.log('Started...');
})
