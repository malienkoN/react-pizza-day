import TextInput from '../TextInput'

const Header = () => {
    return (
        <header className="header">
            <a className="logo" href="/">Pizza Day</a>
            <form>
                <TextInput placeholder="Search for the order #" />
            </form>
        </header>
    )
}

export default Header;