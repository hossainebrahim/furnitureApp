import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectItems,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  selectTotalPrice,
  selectTotalCartItems,
} from "../redux/slices/basketSlice";
import SingleCard from "./SingleCard";

function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const cartItems = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCartItems = useSelector(selectTotalCartItems);
  const dispatch = useDispatch();

  const increaseQuantity = (id) => {
    dispatch(increaseItemQuantity(id));
  };

  const decreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="fixed rounded bottom-10 right-4 bg-[#DFC4AF] p-3 text-2xl z-50"
      >
        <span>
          <span className="flex items-center justify-center absolute text-xs top-0 right-0 p-1 bg-white font-bold w-6 h-6 rounded-full">
            {totalCartItems}
          </span>
        </span>
        <span>
          <AiOutlineShoppingCart />
        </span>
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right" size={314}>
        <div className="px-3 flex flex-col h-full">
          <h2 className="text-lg text-center mt-4 mb-3">
            Cart Items {totalCartItems}
          </h2>
          <div className="flex-grow overflow-auto">
            {totalCartItems === 0 && (
              <p className="text-center mt-4">No items in cart</p>
            )}
            {cartItems.map((item) => (
              <SingleCard
                key={item.id}
                {...item}
                onRemove={() => dispatch(removeItem(item.id))}
                onIncrease={() => increaseQuantity(item.id)}
                onDecrease={() => decreaseQuantity(item.id)}
              />
            ))}
          </div>
          <div className="border-t mb-3">
            <h2 className="text-lg mt-3 mb-3">Total Price: ${totalPrice}</h2>
            <button className="bg-black text-white py-3  w-full block">
              Checkout
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default CartDrawer;

/*




        
                  
                 
*/
