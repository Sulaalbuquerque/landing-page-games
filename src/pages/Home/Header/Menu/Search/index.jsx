import { useContext, useRef } from "react"

import { SearchIsVisibleContext } from '../../../../../contexts/SearchIsVisibleContext'

import imgSearch from '../../../../../../public/assets/svgs/search-solid.svg'

import { ContainerSearch } from './style'
import { useState } from "react"
 
export const Search = (/* { data } */) => {

  const data = [
    {
      "id": 1,
      "name": "Outriders"
    },
    {
        "id": 2,
        "name": "CYBERPUNK 2077"
    },
    {
        "id": 3,
        "name": "Donkey Kong Country Tropical Freeze"
    }
  ]

  const { searchIsVisible } = useContext(SearchIsVisibleContext)


  const [inputSearch, setInputSearch] = useState('')
  const [filterSearch, setFilterSearch] = useState([])

  const handleFilter = (event) => {
    setInputSearch(event.target.value)
    console.log(inputSearch)

    const newFilter = data.filter(value => {
      return value.name.includes(inputSearch)
    })
    console.log(newFilter)

    setFilterSearch(newFilter)
  }

  return (
    <>
      <ContainerSearch isVisibleSearch={searchIsVisible}>
        <div className="arrow"></div>

        <div className="content">

          <div className="main">
            <label htmlFor="search"></label>
            <input 
              ref={input => input && input.focus()}
              type="text" 
              placeholder='Digite sua busca' 
              value={inputSearch}
              onChange={handleFilter}
            />
            <button>
              <img src={imgSearch} />
            </button>
          </div>

          {filterSearch !== 0 &&
            <div className="data-result">
              {filterSearch.map(value => (
                <div key={value.id} className="data-item">
                  <p>{value.name}</p>
                </div> 
              ))}
            </div>
          }

        </div>

      </ContainerSearch>
    </>
  )
}