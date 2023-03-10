import 'package:flutter/material.dart';
import 'package:pocketbase/pocketbase.dart';
import 'package:todo_app/models/user.dart';

class UserProvider extends ChangeNotifier {
  static final pb = PocketBase('http://127.0.0.1:8090');
  String user = "";
  String pass = "";
  bool autenticado = false;
  bool noLogin = false;
  String error = '';

  Future conectarUsuario() async {
    try {
      final authData =
          await pb.collection('users').authWithPassword(user, pass);
      print(pb.authStore.isValid);
      print(pb.authStore.token);
      print(pb.authStore.model.id);
      print('ok');
      noLogin = false;
      autenticado = pb.authStore.isValid;
    } catch (e) {
      noLogin = true;
      print("error::::::: ${e}");
      error = e.toString();
    }
    notifyListeners();
  }

  desconectarUsuario() {
    pb.authStore.clear();
    autenticado = pb.authStore.isValid;
    print("Usuario desconectado");
    notifyListeners();
  }
}
