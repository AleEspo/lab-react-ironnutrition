export function Search(props){
    
    function handleFilter(e){

        if (e.target.value === "") {
            props.filteredFunction(props.allFoods)
        }

        props.filteredFunction ((prevState) => {
            if(prevState.length === 0) {
                return props.allFoods.filter((currentElement) => {
                    return currentElement.name.toLowerCase().includes(e.target.value.toLowerCase())
                })} else {
                return prevState.filter((currentElement) => {
                    return currentElement.name.toLowerCase().includes(e.target.value.toLowerCase())
                })}
        })

    }

    return (
        <div>
            <input type="text" onChange={handleFilter}/>
        </div>
    )
}