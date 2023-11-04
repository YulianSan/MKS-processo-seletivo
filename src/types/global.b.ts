export { }

declare global {
	interface IProduct {
		id: number
		photo: string
		name: string
		description: string
		price: number
		brand: string
		createdAt: string
		updatedAt: string
	}
}
