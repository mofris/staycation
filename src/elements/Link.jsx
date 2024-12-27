export default function Link(props) {
    return (
        <a href={props.to} className={props.style}>{props.children}</a>
    )
}