import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class RecibosService {

  constructor(private db: AngularFirestore) { }

  createRecibo(data) {
    this.db.collection('recibos').add(data)
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  getRecibos() {
    return this.db.collection('recibos').snapshotChanges();
  }

  deleteRecibo(reciboId: string) {
    this.db.doc('recibos/' + reciboId).delete();
  }
}

