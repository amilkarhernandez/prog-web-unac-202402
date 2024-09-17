import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Login } from "../src/pages/Login"
import axios from "axios";
import Constantes from "../src/utils/Constantes";
import Swal from "sweetalert2";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../src/utils/Constantes.js', () => ({
    URL_BASE: 'https://mocked-api-url.com',
}));

jest.mock("axios")

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

const responseServiceLogin = {
    status: 200,
    data: {
        user: {
            id: "1234567",
            email: "test@test.com"
        }
    }
}

const mockErrorResponse = {
    response: {
        data: { message: 'Invalid credentials' },
    },
};

describe("Test Page Login", () => {
    it("Should Render Page Login", async () => {
        render(<Login />)

        const text = await screen.findByText("Inicia Sessión");
        expect(text).toBeInTheDocument();
    })

    it("Should Render Login Consumer Service status OK", async () => {
        axios.post.mockResolvedValue(responseServiceLogin);

        render(<Login />)

        const inputUsername = await screen.findByPlaceholderText("username")
        const inputPassword = await screen.findByTestId("datapassword")

        fireEvent.change(inputUsername, { target: { value: "test" } })
        fireEvent.change(inputPassword, { target: { value: "123" } })

        const btnLogin = await screen.getByRole("button", { name: /Login/i })
        fireEvent.click(btnLogin)

        expect(axios.post).toHaveBeenCalledWith(`${Constantes.URL_BASE}/users/login`, {
            username: "test",
            password: "123"
        })
    })

    it('Should Handle Login Error', async () => {

        axios.post.mockRejectedValueOnce(mockErrorResponse);

        render(
            <Login />
        )

        //Obtener Elementos
        const inputUsername = screen.getByPlaceholderText('username');
        const inputPasword = screen.getByPlaceholderText('Password');

        //Escribir
        fireEvent.change(inputUsername, { target: { value: "test@example.com" } })
        fireEvent.change(inputPasword, { target: { value: "123" } })

        //Obtener Button
        const button = screen.getByRole('button', { name: /Login/i });
        fireEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith(`${Constantes.URL_BASE}/users/login`, {
            username: 'test@example.com',
            password: '123',
        });

        await waitFor(() => {
            expect(Swal.fire).toHaveBeenCalledWith('Información', 'Invalid credentials', 'error');
        });
    })
})