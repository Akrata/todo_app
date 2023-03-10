migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xenjxcys8p8vflm")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xenjxcys8p8vflm")

  collection.listRule = null

  return dao.saveCollection(collection)
})
