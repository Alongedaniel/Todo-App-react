import React, {useState} from "react";
import "./searchbar.css"




const SearchBar = (props) => {
    const [searchVal, setSearchVal] = useState("")

    const handleInputChange = (event) => {
        setSearchVal(event.target.value)
    }

    const handleClearClick = () => {
        setSearchVal('')
    }

    const notEmpty = searchVal.length > 0

    

    // const filterd = props.searchItems.filter((item) => {
    //     return item.includes(searchVal)
    // })

    // const filter = props.searchItems.filter((item) => {
    //     return console.log(item)
    // })


    return (
        <div className="input">
            <input type="text" value={searchVal} onChange={handleInputChange} />
            {notEmpty && <button className="inputBtn"  onClick={handleClearClick}>Clear</button>}
            <div>
                {props.product}
            </div>
            {/* {filterd.map((item) => {
                return <div key={item}>
                    {item}
                </div>
            })} */}
        {/* <button className="filter" type="" >Filter</button> */}
        </div>
    )
}

export default SearchBar