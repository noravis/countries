export default function Filter ({handleInput}) {
    return (
        <div>
            <label>Filter</label>
            <select onChange={(e) => handleInput(e)}>
                <option  value='smaller'>Countries smaller that LT</option>
                <option value='oceania'>Countries in Oceania region</option>
            </select>
        </div>
    )
}