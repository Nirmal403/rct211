import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import App from "../App";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("Testing the custom Button", () => {
  it("Should be present in the DOM", () => {
    render(<Button>Click Me</Button>);
    // screen.debug();
    let button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("Should have a button with text click me", () => {
    render(<App></App>);
    // screen.debug();
    let button = screen.getByTestId("customButton");
    expect(button).toBeInTheDocument();
  });
  it("Should render without any children", () => {
    render(<Button></Button>);
    let button = screen.getByTestId("customButton");
    expect(button).toBeEmptyDOMElement();
  });
  it("Should toggle the theme", () => {
    render(<App></App>);
    let element = screen.getByText("Theme is light");
    expect(element).toHaveTextContent("light");

    let button = screen.getByTestId("customButton");
    userEvent.click(button);
    expect(element).toHaveTextContent("dark");

    userEvent.click(button);
    expect(element).toHaveTextContent("light");
  });

  it("Should call the given function", () => {
    const mockFunc = jest.fn();
    render(<Button onClick={mockFunc}>Click Me</Button>);

    const button = screen.getByTestId("customButton");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(mockFunc).toBeCalledTimes(2);
  });

  it("Should match the snapshot", () => {
    const tree = renderer.create(
        <Button colorScheme={"green"}
         variant={"outline"}>
          Increment Counter
        </Button>
      )
      .toJSON();    
    expect(tree).toMatchSnapshot();
  });
});