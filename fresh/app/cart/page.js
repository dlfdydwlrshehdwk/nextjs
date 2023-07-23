
export default function Cart() {

  let 장바구니 = ['Tomatoes','Pasta']

  return (
    <div>
      <h4 className='title'>장바구니</h4>
      {
        장바구니.map((x,i)=>
        <CartItem num={x} />
        )
      }
    </div>
  )
}

function CartItem(props){
  return(
    <div className="cart-item">
        <p>{props.num}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
  )
}