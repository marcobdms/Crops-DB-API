const express = require ('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'marco',
    database: 'Crops'
}

//middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())


// estas son las rutas
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)


// aqui corre el servidor
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})