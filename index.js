const PORT = 8000;

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = ('https://theproductiveengineer.net')

axios(url)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    $('')
})

app.listen(PORT, () => console.log(`server running ${PORT}`));