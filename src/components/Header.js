const Header = (props) => {
    return (
        <header>
            <h1>My New App: {props.title} named : {props.name}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'title X',
    name: 'My name'
}

export default Header
