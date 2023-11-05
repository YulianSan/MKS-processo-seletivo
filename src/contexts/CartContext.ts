import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ICartContext {
  products: IProductStorage[]
  addProduct: (product: IProductStorage) => void
  removeProduct: (id: number) => void
  updateProductQuantity: (id: number, quantity: number) => void
}
export const useCartContext = create<ICartContext>()(
  persist(
    (set) => ({
      products: [],

      addProduct: (product) => set(state => {
        if (state.products.some(productCart => product.id === productCart.id))
          return state;

        return ({
          products: [...state.products, product]
        })
      }),

      removeProduct: (id) => set(state => ({
        products: state.products.filter(productCart => productCart.id !== id)
      })),

      updateProductQuantity: (id, quantity) => set(state => ({
        products: state.products.map(productCart => {
          return id === productCart.id
            ? { ...productCart, quantity: productCart.quantity + quantity }
            : productCart
        })
      }))
    }),
    {
      name: 'cartStorage'
    }
  )
)
