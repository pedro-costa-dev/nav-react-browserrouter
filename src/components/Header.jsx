
export default function Header(props) {
    return (
    <header>
      <h1>  Meu App </h1>
      <nav>{props.children}</nav>
    </header>
    )
}