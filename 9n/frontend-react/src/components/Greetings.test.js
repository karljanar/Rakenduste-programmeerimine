import React from "react";
import {render, screen} from "@testing-library/react"
import Greetings from "./Greeting";

it('checks if greeting text exists', () =>{
    const div = document.createElement('div')
    render(<Greetings />, div)

    const titleElement = screen.queryByText(/greeting title/i)
    expect(titleElement).not.toBeNull()
})