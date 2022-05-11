export default function Buttons ({sortA, sortD, resetAll}) {

    return (
        <div>
            <button onClick={() => sortA()}>Sort A-Z</button>
            <button onClick={() => sortD()}>Sort Z-A</button>
            <button onClick={() => resetAll()} className="button">Reset</button> 
        </div>
    )
}