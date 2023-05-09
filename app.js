
const express = require('express')
const app = express()
var hbs = require('hbs');
const port = 8090

app.use(express.static('public'))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
/*app.get('/', (req, res) => {
  res.send('Hello World!')
}*/

app.get('/', (req, res) =>{
  res.render('home',{
    nombre: 'Leandro',
    apellido:'Salazar',
    namaPage:'Node Leandro'
  })

});

app.get('/elements', (req, res) =>{
  res.render('elements',{
    nombre: 'Leandro',
    apellido:'Salazar',
    namaPage:'elements'
  })
});
app.get('/generic', (req, res) =>{
  res.render('generic',{
    nombre: 'Leandro',
    apellido:'Salazar',
    namaPage:'generic'
  })
});
/*app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
});*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//https://templated.live/
