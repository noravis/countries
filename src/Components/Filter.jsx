export default function Filter ({handleInput, select, changeSelect}) {
    return (
        <div className="filter-block">
            <div className="filter-label-father">
                <label className="filter-label">Filter</label>
                <select className="filter" onChange={(e) => {handleInput(e); changeSelect(e)}} value={select} defaultValue={'default'}>
                    <option  value='default' disabled>Please select</option>
                    <option  value='smaller'>Countries smaller that LT</option>
                    <option value='oceania'>Countries in Oceania region</option>
                </select>
            </div>
        </div>
    )
}

