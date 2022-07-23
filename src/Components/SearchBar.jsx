import { useState } from "react"

export function SearchBar(){
    const [value, setValue] = useState('')
    function onChange(event){
        setValue(event.target.value)
    }



    return(
        <input type="text" placeholder="Search…" id="docs-search-input" className="search-bar form-control ds-input" 
        autocomplete="off" spellcheck="false" value={value} onChange={onChange}/>

    )


}