import {render, screen} from "@testing-library/react"
import SubmitButton from "./SubmitButton"

test("button is disabled when prop is true", ()=>{
    render(<SubmitButton disabled={true}/>)

    const btn = screen.getByRole("button", {name: /submit/i})

    expect(btn).toBeDisabled()
})