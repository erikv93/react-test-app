import { Field, NumberInput, Select } from "@chakra-ui/react"
import { Provider } from "../components/ui/provider"
import { useState } from "react"

export function RoombaCalculator() {
    const [price, setPrice] = useState('700');
    const roombaPrice = 700;
    const getAmountOfRoombas  = function() {
        return parseInt(price) / roombaPrice;
    }
    return (
        <>
            <Provider>
                <Field.Root>
                    <Field.Label>
                   Prijs
                    </Field.Label>
                    <NumberInput.Root 
                        formatOptions={{
                            style: "currency",
                            currency: "EUR",
                            currencyDisplay: "code",
                            currencySign: "accounting",
                        }}
                        width="200px" 
                        value={ price } 
                        onValueChange={(e) => setPrice(e.value) } >
                        <NumberInput.Control />
                        <NumberInput.Input />
                    </NumberInput.Root>
                </Field.Root>
            </Provider>
            <p>{price}</p>
            <p>Daar kun je {getAmountOfRoombas()} roemba's van kopen</p>
        </>
    )
}