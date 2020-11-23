const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')



const app = express()
const port = process.env.PORT || 3000

// Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Alon Reznik'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Alon Reznik'
    })

})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'We are sorry!, our help services are not up yet..',
        title: 'Help',
        name: 'Alon Reznik'
    })
})


app.get('/weather', (req, res) => {
    let input = req.query.address;
  
        // console.log('I don\'t like numbers.. is it okay if we\'ll use letters only ?')
    
  
        // manual ssi sql and xss injections and attacks prevention.
        if (input.includes('>') || input.includes('\"') || input.includes('<') || input.includes('/') || input.includes('(') || input.includes('!') || input.includes('\'')) {
            return res.send({
                error: 'Hey! no funny business.. enter a valid address!'
            })
        } else if (input.length > 15) {
            return res.send({
                error: 'Whoa.. that\'s a long address.. maybe try a shorter one this time ?'
            })
        } else if (!req.query.address) {
            return res.send({
                error: 'You must provide an address!'
            })
        }
    

    geoCode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })

        }

        forecast(latitude, longitude, (error, forcastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast: forcastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term!'
        })
    }

    console.log(req.query.search)
    res.send({
        produts: []
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Alon Reznik',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Alon Reznik',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


