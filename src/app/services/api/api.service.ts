import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs:AngularFirestore) { }

  createUser(uid,data){

 let a=this.afs.doc('user/' +uid).set(data);
 return a;
  }
  readUsers(){
    return this.afs.collection('user').snapshotChanges();
  }
  readSpecificUser(uid){
    return this.afs.doc('user/' + uid).valueChanges();
  }
  updateUser(uid,data){

    return this.afs.doc('user/' + uid).update(data);
  }
  deleteUser(uid){
    return this.afs.doc( 'user/'+ uid).delete();
  }

// crud of product=============
createProduct(uid,data){

  let a=this.afs.doc('products/' +uid).set(data);
  return a;
   }
   readProduct(){
     return this.afs.collection('products').snapshotChanges();
   }
   readSpecificProduct(uid){
     return this.afs.doc('products/' + uid).valueChanges();
   }
   updateProduct(uid,data){
 
     return this.afs.doc('products/' + uid).update(data);
   }
   deleteProduct(uid){
     return this.afs.doc( 'products/'+ uid).delete();
   }


}
