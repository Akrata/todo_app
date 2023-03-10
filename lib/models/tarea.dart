// To parse this JSON data, do
//
//     final tarea = tareaFromMap(jsonString);

import 'dart:convert';

class Tarea {
  Tarea({
    required this.id,
    required this.collectionId,
    required this.collectionName,
    required this.created,
    required this.updated,
    required this.nombre,
    required this.realizada,
    required this.user,
  });

  String id;
  String collectionId;
  String collectionName;
  DateTime created;
  DateTime updated;
  String nombre;
  bool realizada;
  String user;

  factory Tarea.fromJson(String str) => Tarea.fromMap(json.decode(str));

  String toJson() => json.encode(toMap());

  factory Tarea.fromMap(Map<String, dynamic> json) => Tarea(
        id: json["id"],
        collectionId: json["collectionId"],
        collectionName: json["collectionName"],
        created: DateTime.parse(json["created"]),
        updated: DateTime.parse(json["updated"]),
        nombre: json["nombre"],
        realizada: json["realizada"],
        user: json["user"],
      );

  Map<String, dynamic> toMap() => {
        "id": id,
        "collectionId": collectionId,
        "collectionName": collectionName,
        "created": created.toIso8601String(),
        "updated": updated.toIso8601String(),
        "nombre": nombre,
        "realizada": realizada,
        "user": user,
      };
}
