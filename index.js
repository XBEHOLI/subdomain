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

app.get('/', (req, res) => {
	res.send('<h1>Node application</h1>')
})

app.listen(5000, () => {
	console.log('App listening on port 5000')
})
