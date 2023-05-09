const http = require('http');

http.createServer((req, res)=>{
    //res.writeHead(200,{'Content-Type':'application/json'})
    res.setHeader('Content-Dispotition','attachment; filename=lista.csv')
    res.writeHead(200,{'Content-Type':'application/csv'})
    /*persona={
        'nombre':'Luis',
        'edad':'18 años'
    }
    res.write(JSON.stringify(persona));*/
    res.write('id,nombre\n');
    res.write('1,Andres\n');
    res.write('2,Maria\n');
    
    res.end();
})
.listen(8090)

console.log('escuchado en el puerto 9000')