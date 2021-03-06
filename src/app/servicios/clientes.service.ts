import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private db: AngularFirestore) { }

  createCliente(data) {
    this.db.collection('clientes').add(data)
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  getClientes() {
    return this.db.collection('clientes').snapshotChanges();
  }

  getClientesActivos() {
    return this.db.collection('clientes', ref => ref.where('estado', '==', "Activo")).snapshotChanges();
  }
  
  deleteCliente(clienteId: string) {
    this.db.doc('clientes/' + clienteId).delete();
  }

  updateCliente(c_id, data) {
    this.db.doc('clientes/' + c_id).update(data);
  }
}
