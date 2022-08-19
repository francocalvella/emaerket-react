import firebase from '../Config/firebase';
import { storage } from '../Config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

export async function getProducts(type){
    if(type){
        const querySnapshot = await firebase.firestore()
        .collection('products').where("type","==", type).get();
        return querySnapshot.docs
    }else{
        const querySnapshot = await firebase.firestore()
        .collection('products').get();
        return querySnapshot.docs
    }
}

export async function getProductById(id){
    const querySnapshot = await firebase.firestore()
    .doc('products/'+id).get();
    return querySnapshot
}

export async function add(body, image){
    let url, path
    if(image!=null){
        path = `images/product_${v4()}.jpg`
        const imageRef = ref(storage, path)
        console.log(imageRef)
        await uploadBytes(imageRef, image)
        url = await getDownloadURL(imageRef)
    }
    const querySnapshot = await firebase.firestore().collection('products')
            .add({...body, ...{post_date: new Date().toISOString(), img: {url: url, path: path}}})
    return querySnapshot
}

export async function deleteProduct(id){
    const querySnapshot = await firebase.firestore().doc('products/'+id)
            .delete()
    return querySnapshot
}

export async function update(id, body){
    if(body.img.url){
        const querySnapshot = await firebase.firestore()
        .doc('products/'+id).set(body);
        return querySnapshot
    }
    const path = `images/product_${v4()}.jpg`
    const imageRef = ref(storage, path)
    await uploadBytes(imageRef, body.img)
    const url = await getDownloadURL(imageRef)
    const newBody = {...body, img:{url: url, path: path}}
    const querySnapshot = await firebase.firestore()
    .doc('products/'+id).set(newBody);
    return querySnapshot
}

