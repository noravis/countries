export default function Filter ({handleInput}) {
    return (
        <div className="filter-label-father">
            <label className="filter-label">Filter</label>
            <select className="filter" onChange={(e) => handleInput(e)}>
                <option  value='smaller'>Countries smaller that LT</option>
                <option value='oceania'>Countries in Oceania region</option>
            </select>
        </div>
    )
}