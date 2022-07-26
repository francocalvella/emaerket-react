
export function SearchBar(props){
    const {value, func} = props

    return(
        <input type="text" placeholder="Search…" id="docs-search-input" className="search-bar form-control ds-input" 
        autocomplete="off" spellcheck="false" value={value} onChange={func}/>

    )


}