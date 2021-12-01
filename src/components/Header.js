const Header = (props) => {
    return (
        <header>
            <h1>{props.title} version : {props.version}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Title D13',
    version: 'V.0'
}

export default Header
