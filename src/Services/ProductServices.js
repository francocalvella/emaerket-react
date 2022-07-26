import firebase from '../Config/firebase';

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

export async function add(body){
    const querySnapshot = await firebase.firestore().collection('products')
            .add({...body, ...{post_date: new Date().toISOString()}})
    return querySnapshot
}

export async function deleteProduct(id){
    const querySnapshot = await firebase.firestore().doc('products/'+id)
            .delete()
    return querySnapshot
}

export async function update(id, body){
    const querySnapshot = await firebase.firestore()
    .doc('products/'+id).set(body);
    return querySnapshot
}