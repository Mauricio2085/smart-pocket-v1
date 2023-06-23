import './Main.css'

function Main(props) {
    return (
        <main className="flex h-[534px]">
            {props.children}
        </main>
    )
}

export { Main };