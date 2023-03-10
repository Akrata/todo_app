migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xenjxcys8p8vflm")

  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xenjxcys8p8vflm")

  collection.viewRule = ""

  return dao.saveCollection(collection)
})
