import { useState } from 'react'

const SearchBar = (props) => {
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <div>
                <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                    <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                    <input type="submit" />
                </form>
                <br />
            </div>
    )
}

export default SearchBar