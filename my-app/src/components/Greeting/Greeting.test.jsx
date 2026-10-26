import {render, screen} from "@testing-library/react"
import Greeting from "./Greeting"
import {test} from "vitest"

test("renders the correct greet message",()=>{
    render(<Greeting name="Alice"/>)

    const gElement = screen.getByText("Hello, Alice!")

    expect(gElement).toBeInTheDocument();
})