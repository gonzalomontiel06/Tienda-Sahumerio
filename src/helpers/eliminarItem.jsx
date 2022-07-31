import { getFirestore } from '../firebase/config'
import Swal from 'sweetalert2'

export const deleteItem = (id) => {
    const db = getFirestore()
    const prod = db.collection('productos')
            
            prod.doc(id).delete()
                            .then(() => {
                                console.log('item delete');
                            })
                            .catch((err) => console.log(err))
}

export const confirmDelete = (id) => {
    Swal.fire({
        title: 'Eliminar item?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#cdb4db',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
    })
    .then((result) => {
        if (result.isConfirmed) {
            deleteItem(id)
        }
    })
    .finally(() => {
        Swal.fire({
            title: 'Eliminado!',
            icon: 'success',
            confirmButtonColor: '#cdb4db',
        })
    })
}