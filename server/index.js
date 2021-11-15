const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const inventory = ['greeting card','wagon','computer','table','chair','milk','juice','eggs','shampoo','conditioner','sailboat']

app.get('/api/inventory',(req,res) => {
    // console.log(req)
    if(req.query.item){
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:index',(req,res) => {
    console.log(req.params)
    const {index} = req.params
    res.status(200).send(inventory[+index])
})

app.listen(5050,() => console.log('server up and running on port 5050!'))