migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xenjxcys8p8vflm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nyqhlie0",
    "name": "realizada",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xenjxcys8p8vflm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nyqhlie0",
    "name": "realizada",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
