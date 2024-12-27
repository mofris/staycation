export default function Butoon(props) {
    return (
        <button className={props.style}>
            {props.children}
        </button>
    )
}