import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CajerosService {

  constructor(private db: AngularFirestore) { }

  createCajero(data) {
    this.db.collection('cajeros').add(data)
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  getCajeros() {
    return this.db.collection('cajeros').snapshotChanges();
  }

  deleteCajero(cajeroId: string) {
    this.db.doc('cajeros/' + cajeroId).delete();
  }

  updateCajero(c_id, data) {
    this.db.doc('cajeros/' + c_id).update(data);
  }

}
