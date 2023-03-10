migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xenjxcys8p8vflm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mpctot4f",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xenjxcys8p8vflm")

  // remove
  collection.schema.removeField("mpctot4f")

  return dao.saveCollection(collection)
})
