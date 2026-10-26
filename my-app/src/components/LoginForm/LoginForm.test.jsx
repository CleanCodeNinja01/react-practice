import {screen, render} from "@testing-library/react"
import LoginForm from "./LoginForm"

test ("form fields have empty initial values", ()=>{
    render(<LoginForm/>)

    const emailElement = screen.getByLabelText("Email")
    const passwordElement = screen.getByLabelText("Password")

    expect(emailElement).toBeInTheDocument()
})