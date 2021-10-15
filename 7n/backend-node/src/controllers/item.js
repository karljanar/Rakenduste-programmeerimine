const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  
  var quality = req.body.quality;
  if(req.body.quality > 100){
    quality = 100;
  }

  const newItem = {
    name: req.body.name,
    quality: quality,
    unused: req.body.unused,
    color: req.body.color
  }

  const createdItem = new Item(newItem)

  const savedItem = createdItem.save()

  res.status(200).send(`Saved ${createdItem}`)
}

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  var quality = req.body.quality;
  if(req.body.quality > 100){
    quality = 100;
  }
  const newItem = {
    name: req.body.name,
    quality: quality,
    unused: req.body.unused,
    color: req.body.color
  }

  const originalItem = await Item.findByIdAndUpdate(id, newItem);


  res.status(200).send(`Successfully updated the following item: \n ${originalItem}`)
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id }).then(res.status(200).send("item deleted"))

  if (!item) res.status(404).send("No item with that id found")

  res.status(200).send(`Successfully deleted the following item: \n ${item}`)

  
}
