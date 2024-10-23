
import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../context/CartContext';
import { formatCurrency } from '../util/formatCurrency';

type StoreItemProps = {
  allItem:{
    id: number
  name: string
  price: number
  imgUrl: string
  }
}

const Items = ({allItem}:StoreItemProps) => {

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const quantity = getItemQuantity(allItem.id)

  return (
    <div>
          <Card className="h-100">
      <Card.Img
        variant="top"
        src={allItem.imgUrl}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{allItem.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(allItem.price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(allItem.id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(allItem.id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(allItem.id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(allItem.id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Items
