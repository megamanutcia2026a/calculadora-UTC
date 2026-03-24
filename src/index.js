//Importacion de librerias.
const express = require('express');
const app = express();

// Muestra las solicitudes de consola.
const morgan = require('morgan'); 
//Permite conexiones externas.
const cors = require('cors');


//Configuracion en el puerto 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); // Habilitamos el JSON

app.use(morgan('dev'));


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
	res.json(
	{
		"Title":"Hola mundo esta es mi primera api"
	})
});


//SUMA.
app.post('/suma-dos-numeros', (req,res)=> {
	const { num1,num2 } = req.body;

	if(!num1 || !num2){
		return res.status(400).send({ error: 'Faltan numeros para sumar.' });
	}

	const resultado = num1 + num2;

	res.send({ resultado });
})



//AREA-CUADRADO
app.post('/area-cuadrado', (req,res)=> {
	const { lado } = req.body;

	if(!lado){
		return res.status(400).send({ error: 'Faltan el lado!.' });
	}

	const resultado = lado * lado;

	res.send({ resultado });
})

//AREA-TRIANGULO.
app.post('/area-triangulo', (req,res)=> {
	const { base,altura } = req.body;

	if(!base || !altura){
		return res.status(400).send({ error: 'Faltan numeros para hacer la operacion.' });
	}

	const resultado = (base * altura) / 2;

	res.send({ resultado });
})

//AREA-CIRCULO.
app.post('/area-circulo', (req,res)=> {
	const { radio } = req.body;

	if(!radio){
		return res.status(400).send({ error: 'Falta el radio' });
	}

	const resultado = 3.1416 * (radio * radio);

	res.send({ resultado });
})

//PERIMETRO-CUADRADO

app.post('/per-cuadrado', (req,res)=> {
	const { lado } = req.body;

	if(!lado){
		return res.status(400).send({ error: 'Falta el lado!' });
	}

	const resultado = 4 * lado;

	res.send({ resultado });
})

//PERIMETRO-TRIANGULO

app.post('/per-triangulo', (req,res)=> {
	const { lado } = req.body;

	if(!lado){
		return res.status(400).send({ error: 'Falta el lado' });
	}

	const resultado = lado * 3;

	res.send({ resultado });
})

//PERIMETRO-CIRCULO

app.post('/per-circulo', (req,res)=> {
	const { diametro } = req.body;

	if(!diametro){
		return res.status(400).send({ error: 'Falta el diametro!' });
	}

	const resultado = 3.1416 * diametro;

	res.send({ resultado });
})


app.listen(app.get('port'), ()=>{
	console.log("Iniciamos el servidor en el puerto 3000");
});

