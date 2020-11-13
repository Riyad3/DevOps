'use strict';

const express = require('express')
const app = express()

app.get('/',(req, res) => res.send('Coucou toi'))
app.listen(8080, () => console.log('serv ready'))
