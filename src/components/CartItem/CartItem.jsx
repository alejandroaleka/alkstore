import './CartItem.css'

const CartItem = ({item, quantity}) => {
    //const {item, name, totalQuantity, total} = useContext(CartContext)

    return (
      <div className="d-flex justify-content-around cart-item card-item ">
          <p> <strong>{item.name}</strong> </p>
          <p>Cantidad: {quantity} </p>
          <p>Precio por unidad: $ {item.price} </p>
          <p>Subtotal: $ {quantity * item.price}</p>
      </div>
    )
  }
  
  export default CartItem
