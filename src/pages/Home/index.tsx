import { HomeCotainer, CoffeeList} from "./styles"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import CoffeImage  from "../../assets/CoffeImage.svg"

import Tradicional from '../../assets/coffees/Americano.svg'





export function Home(){

  interface Coffees {
    id: number;
    image: string;
    composition: Array<string>;
    fullname: string;
    description: string;
    price: string;
 
  }

  const coffeeList: Array<Coffees> = [
    {id: 1, image: 'Tradicional', composition: ['TRADICIONAL'], fullname:'Expresso Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', price: '09,90'},
    {id: 2, image: '', composition: ['TRADICIONAL'], fullname: 'Expresso Americano', description: 'Expresso diluído, menos intenso que o tradicional', price: '09,90'},
    {id: 3, image: '', composition: ['TRADICIONAL'], fullname: 'Expresso Cremoso', description: 'Café expresso tradicional com espuma cremosa', price: '09,90'},
    {id: 4, image: '', composition: ['TRADICIONAL', 'GELADO'], fullname: 'Expresso Gelado', description: 'Bebida preparada com café expresso e cubos de gelo', price: '09,90'},
    {id: 5, image: '', composition: ['TRADICIONAL', 'COM LEITE'], fullname: 'Café com Leite', description: 'Meio a meio de expresso tradicional com leite vaporizado', price: '09,90'},
    {id: 6, image: '', composition: ['TRADICIONAL', 'COM LEITE'], fullname: 'Latte', description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', price: '09,90'},
    {id: 7, image: '', composition: ['TRADICIONAL', 'COM LEITE'], fullname: 'Capuccino', description: 'Bebida com canela feita de doses iguais de café, leite e espuma', price: '09,90'},
    {id: 8, image: '', composition: ['TRADICIONAL', 'COM LEITE'], fullname: 'Macchiato', description: 'Café expresso misturado com um pouco de leite quente e espuma', price: '09,90'},
    {id: 9, image: '', composition: ['TRADICIONAL', 'COM LEITE'], fullname: 'Mocaccino', description: 'Café expresso com calda de chocolate, pouco leite e espuma', price: '09,90'},
    {id: 12, image: '', composition: ['TRADICIONAL'], fullname: 'Chocolate Quente', description: 'Bebida feita com chocolate dissolvido no leite quente e café', price: '09,90'},
    {id: 10, image: '', composition: ['ESPECIAL', 'COM LEITE', 'GELADO'], fullname: 'Cubano', description: 'Bebida feita com chocolate dissolvido no leite quente e café', price: '09,90'},
    {id: 11, image: '', composition: ['ESPECIAL'], fullname: 'Havaiano', description: 'Bebida adocicada preparada com café e leite de coco', price: '09,90'},
    {id: 13, image: '', composition: ['TRADICIONAL'], fullname: 'Árabe', description: 'Bebida preparada com grãos de café árabe e especiarias', price: '09,90'},
    {id: 14, image: '', composition: ['ESPECIAL', 'ALCOÓLICO'], fullname: 'Irlandês', description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly', price: '09,90'},
  ]

  return (
    <HomeCotainer>
      <div className="Info-bg">
        <div className="Info" >
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
            <div className="Items" >
              <div className="item " >
                <p className="item-1" ><ShoppingCart size={16} weight="bold"/></p>              
                <span>Compra simples e segura</span>
              </div>   
              <div className="item " >
                <p className="item-2" ><Package size={16} weight="bold"/></p>         
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div className="item " >
                <p className="item-3" ><Timer size={16} weight="bold" /></p>       
                <span>Entrega rápida e rastreada</span>
              </div>
              <div className="item item-4" >
                <p className="item-4" ><Coffee size={16} weight="bold" /></p>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>

          <div>
            <img src={CoffeImage}/>
          </div>
      </div>

      {/* <h1>Nossos cafés</h1> */}
      <CoffeeList >
        {
            coffeeList.map((coffee, i) =>{
              return (
                  <div key={coffee.description}  className="Coffee-card" >
                      <img src={Tradicional} alt=""/>
                      <div className="compositionContainer">
                        {coffee.composition.map((nome, i) => (<span className="Composition" >{nome}</span>)) }
                      </div>
                      <h1>{coffee.fullname}</h1>
                      <p>{coffee.description}</p>
                      <div className="Price-qtd">
                          <div className="Price">
                              <p>R$<span>{coffee.price}</span> </p>
                          </div>
                          <div className="Select-buy" >
                            <div className="Qtd">
                              <button>-</button>
                              <span>1</span>
                              <button>+</button>
                            </div>
                            <div className="Buy-coffee" >
                              <button> <ShoppingCart/> </button> 
                            </div>
                          </div>
                      </div>
                  </div>
              )
            })
          }
      </CoffeeList>


      
    </HomeCotainer>
  )
}