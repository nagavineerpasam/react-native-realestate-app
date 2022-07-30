import {
  createContext, FC, ReactNode, useState,
} from 'react';

type WishListType = {
  wishListIds: number[];
  addToWishList: (id: number) => void;
  removeFromWishList: (id: number) => void;
};

const wishListDefaultValues: WishListType = {
  wishListIds: [],
  addToWishList: () => {},
  removeFromWishList: () => {},
};

export const WishListContext = createContext<WishListType>(wishListDefaultValues);

const WishListProvider:FC<ReactNode> = ({ children }) => {
  const [wishListIds, setWishListItems] = useState<number[]>(wishListDefaultValues.wishListIds);

  const addToWishList = (id: number) => setWishListItems((ids) => [...ids, id]);

  const removeFromWishList = (id: number) => {
    setWishListItems((currIds) => currIds.filter((wishListId) => wishListId !== id));
  };

  return (
    <WishListContext.Provider value={{ wishListIds, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
