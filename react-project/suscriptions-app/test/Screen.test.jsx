import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ScreenPage } from '../src/pages/ScreenPage'

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe("Test Page Screen", () => {
    it("Should Render Page Screen", async () => {
        render(<ScreenPage />)

        const text = await screen.findByText("Bienvenidos, Inicia Sesión");
        expect(text).toBeInTheDocument();
    })

    it("Should Page Navigation Register", async () => {
        render(<ScreenPage />)

        const btnRegister = await screen.getByRole('button', { name: /Registrar/i })
        fireEvent.click(btnRegister);

        expect(mockedUsedNavigate).toHaveBeenCalled();
    })

    it("Should Page Navigation Login", async () => {
        render(<ScreenPage />)

        const btnLogin = await screen.getByRole('button', { name: /Iniciar Sessión/i })
        fireEvent.click(btnLogin);

        expect(mockedUsedNavigate).toHaveBeenCalled();
    })
})