import { useContext, useState } from 'react'
import './Checkout.css'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/FirebaseConfig'

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailCheck, setEmailCheck] = useState('')
    const [error, setError] = useState('')
    const [orderId, setOrderId] = useState('')

    const handleCheckout = (event) => {
        event.preventDefault()

        if (!name || !surname || !phone || !email || !emailCheck) {
            setError("Por favor, verifique los campos sin completar")
            return
        }

        if (email !== emailCheck) {
            setError("Los email ingresados no coinciden")
        }

        const order = {
            items: cart.map((product) => ({
                id: product.item.id,
                producto: product.item.name,
                quantity: product.quantity
            })),
            total: cart.reduce((total, product) => total + product.item.price * product.quantity, 0),
            name,
            surname,
            phone,
            email
        }

        addDoc(collection(db, "orders"), order)
            .then((docRef) => {
                setOrderId(docRef.id)
                clearCart();
            })
            .catch((error) => {
                console.error("Error al generar la orden", error)
                setError("Se produjo un error al generar la orden, vuelva a intentarlo más tarde")
            })
    }

  return (
    <div className='item-detail-container card-item container'>
        <h2 className='header text-center mb-5 p-4'>Revisa tu orden y completa el formulario para finalizar tu compra</h2>
        <form className='mb-3' onSubmit={handleCheckout}>
            {cart.map((product) => (
                <div className='mb-5' key={product.item.id}>
                    <p>
                        {product.item.name}  x  {product.quantity} unidad/es
                    </p>
                    {/* <p>Precio por unidad: $ {product.item.price} </p> */}
                    <p>Subtotal: $ {product.quantity * product.item.price} </p>
                    <hr />
                </div>
            ))}
            <div className='form-group mb-3'>
                <label className='form-label' htmlFor="">Nombre</label>
                <input type="text" className='form-control' value={name} onChange={(e) =>
                setName(e.target.value)} />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label' htmlFor="">Apellido</label>
                <input type="text" className='form-control' value={surname} onChange={(e) =>
                setSurname(e.target.value)} />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label' htmlFor="">Telefono</label>
                <input type="tel" className='form-control' value={phone} onChange={(e) =>
                setPhone(e.target.value)} />
            </div>
            <div className='form-group mb-3'>
                <label className='form-label' htmlFor="">Email</label>
                <input type="email" className='form-control' placeholder="correo@ejemplo.com" value={email} onChange={(e) =>
                setEmail(e.target.value)} />
            </div>
            <div className='form-group mb-5'>
                <label className='form-label' htmlFor="">Confirma tu Email</label>
                <input type="email" className='form-control' placeholder="correo@ejemplo.com" value={emailCheck} onChange={(e) =>
                setEmailCheck(e.target.value)} />
            </div>
            {error && <p style={{ color: "red" }}> {error} </p>}
            <div className='text-center'>
                <button type='submit' className='btn control-button mb-5'>Generar orden de compra</button>
            </div>
        </form>
        {
            orderId && (
                <div className='mb-5 p-3'><strong>¡Gracias por su compra! Su número de orden es el {orderId}</strong></div>
            )
        }
    </div>
  )
}

export default Checkout