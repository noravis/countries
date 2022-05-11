export default function Buttons ({sortA, sortD}) {

    return (
        <div>
            <button onClick={() => sortA()}>Sort A-Z</button>
            <button onClick={() => sortD()}>Sort Z-A</button>
        </div>
    )
}