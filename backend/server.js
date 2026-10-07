const express = require("express");
const { Pool } = require("pg");

const app = express();

const db = new Pool({
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

app.get("/api/products", async (req, res) => {

    try {

        const result = await db.query(
            "SELECT * FROM products"
        );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Gagal mengambil data produk"
        });

    }

});

app.listen(3000, () => {
    console.log("Backend berjalan di port 3000");
});