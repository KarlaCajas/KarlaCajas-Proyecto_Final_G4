// sucheff-backend/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Datos simulados con imágenes
const products = [
    { id: 1, name: 'Red Dragon', price: 199, imageUrl: 'http://example.com/images/red-dragon.jpg' },
    { id: 2, name: 'Rollos de Salmón', price: 150, imageUrl: 'http://example.com/images/rollos-salmon.jpg' },
    { id: 3, name: 'Rollos Tempuriza dos', price: 180, imageUrl: 'http://example.com/images/rollos-tempuriza.jpg' },
    { id: 4, name: 'Rollos con Caviar', price: 220, imageUrl: 'http://example.com/images/rollos-caviar.jpg' },
    { id: 5, name: 'Rollos veganos', price: 160, imageUrl: 'http://example.com/images/rollos-veganos.jpg' }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
