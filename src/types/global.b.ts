export { }

declare global {
	interface IProduct {
		id: number
		photo: string
		name: string
		description: string
		price: string
		brand: string
		createdAt: string
		updatedAt: string
	}
	interface IProductStorage {
		id: number
		quantity: number
		name: string
		description: string
		price: string
	}
}
