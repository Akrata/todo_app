migrate((db) => {
  const collection = new Collection({
    "id": "xenjxcys8p8vflm",
    "created": "2023-03-10 12:25:35.592Z",
    "updated": "2023-03-10 12:25:35.592Z",
    "name": "tareas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "glgpgeh0",
        "name": "nombre",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nyqhlie0",
        "name": "realizada",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xenjxcys8p8vflm");

  return dao.deleteCollection(collection);
})
