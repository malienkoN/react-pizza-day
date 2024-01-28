import Button from '../Button'
import TextInput from '../TextInput'

const Form = () => {
    return (
        <form className="login-form">
            <TextInput placeholder="Your full name" />
            <Button>Login</Button>
        </form>
    )
}

export default Form;