import { SuccessContainer } from "./styles";
import localeicon from '../../assets/localeicon.svg'
import payment from '../../assets/payment.svg'
import time from '../../assets/time.svg'
import ilustrator from '../../assets/illustration.svg'

export function Success(){
  return(
    <SuccessContainer>

      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <div className="order" >
      <div className="order-details" >
        <div className="order-container" >
            <div>
              <img src={localeicon}/>
              <div>
                <p>Entrega em Rua João Daniel Martinelli, 102</p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>

            <div>
              <img src={payment} />
              <div>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </div>
            </div>

            <div>
              <img src={time} />
              <div>
                <p>Pagamento na entrega</p>
                <p>Cartão de Crédito</p>
              </div>
            </div>  

        </div>
      </div>
      <div className="illuistration" >
        <img src={ilustrator}/>
      </div>
      </div>

    </SuccessContainer>
  )
}