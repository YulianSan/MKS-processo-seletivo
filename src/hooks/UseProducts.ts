import { useQuery } from "react-query";

export function useProducts() {

	const { isLoading, data } = useQuery<any, any>('products', () => {
		return fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
			.then(e => e.json())
	})

	return { isLoading, data }
}
