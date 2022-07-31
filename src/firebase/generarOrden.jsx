import { getFirestore } from './config'
import firebase from 'firebase'
import 'firebase/firestore'

export const generarOrden = (carrito, values, total) => {

    return new Promise (async (resolve, rejected) => {
        
        const orden = {
            buyer: values,
            items: carrito,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            estado: true
        }
    
        const db = getFirestore()
        const orders = db.collection('orders')
        const itemsUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(prod => prod.id))
    
        const consulta = await itemsUpdate.get()
        const batch = db.batch()
        const outOfStock = []
    
        consulta.docs.forEach((doc) => {
            const itemCart = carrito.find((prod) => prod.id === doc.id)
    
            if(doc.data().stock >= itemCart.cantidad) {
                batch.update(doc.ref, {stock: doc.data().stock - itemCart.cantidad})
            }
    
            else{
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })
    
        if (outOfStock.length === 0){
            orders.add(orden)
                
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                })
            }
            
        else {
            rejected(outOfStock)
        }
    })
}