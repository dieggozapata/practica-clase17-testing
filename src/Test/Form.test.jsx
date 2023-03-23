import {fireEvent, render, screen} from "@testing-library/react"
import {describe, expect, test, vi } from 'vitest'
import Form from '../Components/Form'
describe('Form testing',() => {

    test('Verificar valor numérico',() => {
        render(<Form />)
        const valor = screen.getByTestId('valorNumerico')
        fireEvent.change(valor, {target:{value:'123'}})        
        expect(!isNaN(valor.value)).toBe(true)
    })

    test('Botón hace Click',() => {
        const handleClick = vi.fn()
        render(<Form handleClick={handleClick}/>)        
        const btn = screen.getByText('Enviar')
        fireEvent.click(btn)        
        expect(handleClick).toBeCalledTimes(1)
    })
})