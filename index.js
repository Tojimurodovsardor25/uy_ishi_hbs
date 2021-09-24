const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})


app.engine('hbs', hbs.engine)
app.set('views engine', 'hbs')
app.set('views', 'views')

app.get('/', (req, res) => {
    res.render('index.hbs')
})

app.get('/contact', (req, res) => {
    res.render('contact.hbs')
})
app.get('/index', (req, res) => {
    res.render('index.hbs')
})

app.listen(port, () => {
    console.log(`Express working on ${port} port`);
})