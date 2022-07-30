import { useContext } from 'react';
import rooms from '../Data/apartments';
import { WishListContext } from '../context/wishlistcontext';
import ApartmentsList from '../components/ApartmentsList';

function WishList() {
  const wishListContext = useContext(WishListContext);
  const wishListData = rooms.filter((wishListId) => wishListContext.wishListIds.includes(wishListId.id));

  return <ApartmentsList apartmentsListData = {wishListData} title = 'My Wishlist'/>;
}

export default WishList;
