const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Sharmistha Collection</title>
        <style>
            body {
                font-family: Arial;
                margin: 0;
                background-color: #f8f8f8;
            }
            header {
                background-color: #8e44ad;
                color: white;
                padding: 20px;
                text-align: center;
            }
            .container {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                padding: 20px;
            }
            .card {
                background: white;
                width: 250px;
                margin: 15px;
                border-radius: 10px;
                box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
                text-align: center;
                padding: 15px;
            }
            .card img {
                width: 100%;
                border-radius: 10px;
            }
            .card h3 {
                margin: 10px 0;
            }
            footer {
                text-align: center;
                padding: 10px;
                background: #333;
                color: white;
            }
        </style>
    </head>

    <body>

        <header>
            <h1>💍 Sharmistha Collection</h1>
            <p>Elegant Artificial Jewelry</p>
            <p>Server: ${require('os').hostname()}</p>
        </header>

        <div class="container">

            <div class="card">
                <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d" />
                <h3>Gold Necklace</h3>
                <p>₹499</p>
            </div>

            <div class="card">
                <img src="https://images.unsplash.com/photo-1588449668365-d15e397f6787" />
                <h3>Elegant Earrings</h3>
                <p>₹199</p>
            </div>

            <div class="card">
                <img src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1" />
                <h3>Designer Bangles</h3>
                <p>₹299</p>
            </div>

        </div>

        <footer>
            <p>© 2026 Sharmistha Collection | Demo Project</p>
        </footer>

    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});