import { CheckOutContainer, PurchaseContainer, SelectedCoffees } from "./styles";
import Location from '../../assets/icon.svg'
import Cash from '../../assets/cash.svg'
import Tradiconal from '../../assets/coffees/Americano.svg'
import Credit from '../../assets/credit.svg'
import Debit from '../../assets/credit.svg'
import Money from '../../assets/money.svg'
import Trash from '../../assets/trash.svg'

export function CheckOut(){
  return(
    <CheckOutContainer>
      <PurchaseContainer>
        <h1>Complete seu pedido</h1>
        <div className="form-container">
          <div className='address' >
            <div>
              <img src={Location} alt=""/>
              <div className='header-address' >
                <h1>Endereço de Entrega</h1>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <form>
              <input placeholder="CEP" type="text"/>
              <input placeholder="Rua" type="text"/>
              <input placeholder="Número" type="text"/>
              <input placeholder="Complemento" type="text"/>
              <input placeholder="Bairro" type="text"/>
              <input placeholder="Cidade" type="text"/>
              <input placeholder="UF" type="text"/>
            </form>
          </div>
          
          <div className="payment">
            <div className="payment-option" >
            <img src={Cash} alt=""/>
            <div>
              <h1>Pagamento</h1>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>            
            </div>

            <div className="buttons" >
              <button>
                <img src={Credit} alt=""/>
                <span>Cartão de crédito</span>
              </button>
              <button>
                <img src={Debit} alt=""/>
                <span>Cartão de débito</span>
              </button>
              <button>
                <img src={Money} alt=""/>
                <span>Dinheiro</span>
              </button>
            </div>
          </div>
        </div> 
        
      </PurchaseContainer>
 
      <SelectedCoffees>
        <h1>Cafés selecionados</h1>

        <div className='selected-coffees-container'>
        <div className="coffee-list-selected">
            <img src={Tradiconal} alt=""/>
            <div>
              <h1>Expresso Tradicional</h1>
                <div className="buttons-cart">
                  <div className="Qtd">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="remove-coffee">
                    <button>
                      <img src={Trash}/>
                      <span>REMOVER</span>
                    </button>
                  </div>
                </div>
            </div>
            <span>R$ 9,90</span>
        </div>

        <div className='cart' >
          <div className='total'>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div className='freight'>
            <span>Entrega</span>
            <span>R$ 29,70</span>
          </div>
          <div className='total-po' >
            <h1>Total</h1>
            <h1>R$ 29,70</h1>
          </div>
          <button>CONFIRMAR PEDIDO</button>
        </div>
        </div>

      </SelectedCoffees>

    </CheckOutContainer>
  )
}