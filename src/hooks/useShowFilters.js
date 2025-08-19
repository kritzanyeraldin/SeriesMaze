import { useSearchParams } from 'react-router-dom'
import { getFiltersFromUrl } from '../utils'

const useShowFilters = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const showFilters = getFiltersFromUrl(searchParams)

	const setShowFilter = (name, value) => {
		setSearchParams(prevSearchParams => {
			const newSearchParams = new URLSearchParams(prevSearchParams)
			newSearchParams.set(name, value)
			return newSearchParams
		})
	}

	const deleteShowFilter = name => {
		setSearchParams(prevSearchParams => {
			const newSearchParams = new URLSearchParams(prevSearchParams)
			newSearchParams.delete(name)
			return newSearchParams
		})
	}

	const setShowFilters = filters => {
		setSearchParams(prevSearchParams => {
			const newSearchParams = new URLSearchParams(prevSearchParams)
			Object.entries(filters).forEach(([name, value]) => {
				newSearchParams.set(name, value)
			})
			return newSearchParams
		})
	}

	const deleteShowFilters = names => {
		setSearchParams(prevSearchParams => {
			const newSearchParams = new URLSearchParams(prevSearchParams)
			names.forEach(name => {
				newSearchParams.delete(name)
			})
			return newSearchParams
		})
	}

	return {
		showFilters,
		setShowFilter,
		deleteShowFilter,
		setShowFilters,
		deleteShowFilters
	}
}

export default useShowFilters
