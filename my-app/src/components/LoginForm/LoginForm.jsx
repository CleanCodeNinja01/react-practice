const LoginForm = () => {
    return (
        <form>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" defaultValue="" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" defaultValue="" />

        </form>
    )
}

export default LoginForm;