import { getFirestore } from '../firebase/config'

export const getLogo = (setLogoTransparente) => {

    // LLAMANDO LOGO X FIREBASE
    
    const db = getFirestore()
    const doc = db.collection('images')
    const logo = doc.doc('BPZqrCQ16t0weXXaZCqH')


    logo.get()
        .then((res) => {
            setLogoTransparente(res.data())
        })
        .catch((err) => {
            console.log(err);
        })
}