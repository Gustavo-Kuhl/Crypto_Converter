import { Container, Form } from './style'
import { useState } from 'react'

export const Main = () => {

     const url = `https://www.mercadobitcoin.net/api/BTC/ticker/`

     const [real, setReal] = useState(0)
     const [showError, setShowError] = useState(false)

     const Error = () => {
          return (
               <p>Erro ao carregar os dados</p>
          )
     }

     function handleSubmit(e) {
          e.preventDefault()
     }

     function getCoinValue({ target }) {
          calcCryptoValue(target.value)
     }

     function calcCryptoValue(value) {
          fetch(url)
               .then(async (response) => {
                    setShowError(false)

                    const res = await response.json()
                    setReal(value * res.ticker.buy)

               }).catch(() => {
                    setShowError(true)
               })
     }

     return (
          <Container>
               <Form onSubmit={handleSubmit}>
                    <div className="form__div">
                         <label className="form__label">₿TC</label>
                         <input
                              type="number"
                              className="form__input"
                              onChange={getCoinValue}
                         />
                    </div>

                    <div className="form__div">
                         <label className="form__label">R$</label>
                         <input
                              type="text"
                              className="form__input real"
                              value={real.toLocaleString({ currency: 'BRL' })}
                              disabled
                         />
                    </div>
               </Form>

               {showError && <Error />}

          </Container>
     )
}
