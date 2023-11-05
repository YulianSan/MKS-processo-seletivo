import { create } from 'zustand'

interface IMenuCart {
  isOpen: boolean
  toggleMenu: () => void
}

export const useMenuCart = create<IMenuCart>((set) => ({
  isOpen: false,
  toggleMenu: () => set(state => ({ isOpen: !state.isOpen }))
}))
