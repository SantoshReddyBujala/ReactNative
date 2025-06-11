import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoginForm from "./LoginForm";


// Mock Alert to suppress popups and test calls
jest.mock("react-native/Libraries/Alert/Alert", () => ({
    alert: jest.fn(),
}));

describe("LoginForm", () => {
    it("renders the login form with all fields and button", () => {
        const { getByPlaceholderText, getByText } = render(<LoginForm />);
        expect(getByPlaceholderText("Username")).toBeTruthy();
        expect(getByPlaceholderText("Password")).toBeTruthy();
        expect(getByText("Login")).toBeTruthy();
    });

    it("shows error alert if fields are empty", () => {
        const { getByText } = render(<LoginForm />);
        fireEvent.press(getByText("Login"));
        expect(require("react-native/Libraries/Alert/Alert").alert).toHaveBeenCalledWith(
            "Error",
            "Please enter both username and password."
        );
    });

    it("shows success alert if both fields are filled", () => {
        const { getByPlaceholderText, getByText } = render(<LoginForm />);
        fireEvent.changeText(getByPlaceholderText("Username"), "testuser");
        fireEvent.changeText(getByPlaceholderText("Password"), "password123");
        fireEvent.press(getByText("Login"));
        expect(require("react-native/Libraries/Alert/Alert").alert).toHaveBeenCalledWith(
            "Login Successful",
            "Welcome, testuser!"
        );
    });
});