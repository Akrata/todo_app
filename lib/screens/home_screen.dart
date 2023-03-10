import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_app/provider/user_provider.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final users = Provider.of<UserProvider>(context);
    String user;
    String pass;
    return Scaffold(
      body: Center(
        child: Form(
          child: Column(
            children: [
              TextFormField(
                onChanged: (value) => users.user = value,
              ),
              TextFormField(
                onChanged: (value) => users.pass = value,
              ),
              users.autenticado
                  ? TextButton(
                      onPressed: () {
                        users.desconectarUsuario();
                      },
                      child: Text('Logout'),
                    )
                  : TextButton(
                      onPressed: () {
                        users.conectarUsuario();
                      },
                      child: Text('Login'),
                    ),
              users.noLogin ? Text(users.error) : Text("ok"),
            ],
          ),
        ),
      ),
    );
  }
}
