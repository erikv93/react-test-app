import { Field, NumberInput, Select } from "@chakra-ui/react"
import { Provider } from "../components/ui/provider"
import { useState } from "react"

export function PricePerKilo() {
    const [kilo, setKilo] = useState(10);
    const [price, setPrice] = useState(0);
    return (
        <>
            <Provider>
                <Field.Root>
                    <Field.Label>
                    Weight in kilograms
                    </Field.Label>
                    <NumberInput.Root width="200px" value={ kilo } onValueChange={(e) => setKilo(e.value) } >
                        <NumberInput.Control />
                        <NumberInput.Input />
                    </NumberInput.Root>
                </Field.Root>
                <Field.Root>
                    Price
                    <NumberInput.Root width="200px" value={ price } onValueChange={(e) => setPrice(e.value)} >
                        <NumberInput.Control />
                        <NumberInput.Input />
                    </NumberInput.Root>
                </Field.Root>
            </Provider>
            <h1>Price per kilo:</h1>
            <h1>{ price / kilo }</h1>
        </>
    )
}