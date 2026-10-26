import {render, screen} from "@testing-library/react"
import ButtonForm from "./ButtonForm"
import { expect } from "vitest"

test("queries input and button elements",()=>{
    render(<ButtonForm/>)

    const input = screen.getByPlaceholderText("Enter name")

    const button = screen.getByRole("button", {name: /submit/i})

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
})