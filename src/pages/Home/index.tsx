import { HomeCotainer} from "./styles"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import CoffeImage  from "../../assets/CoffeImage.svg"

export function Home(){

  interface Coffees {
    id: number;
    image: string;
    composition: Array<string>;
    fullname: string;
    description: string;
    price: string;

  }

  const coffee: Array<Coffees> = [
    {id: 1, image: 'blabla', composition: ['Tradicional', 'Com Leite'], fullname:'Expresso Tradicional', description: 'cafe azedo', price: '10,99'},
    {id: 2, image: 'Chá', composition: ['Tradicional'], fullname: 'Expresso Normal', description: 'cafe sudao', price: '22,99'},
  ]


  const coffeName = coffee.map((nome) => (nome.description))

  console.log(coffeName)


  return (
    <HomeCotainer>
        <div className="Info" >
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          <div className="Items" >
            <div className="item" >
              <p><ShoppingCart size={16} weight="bold"/></p>              
              <span>Compra simples e segura</span>
            </div>   
            <div className="item" >
              <p><Package size={16} weight="bold"/></p>         
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="item" >
              <p><Timer size={16} weight="bold" /></p>       
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="item" >
              <p><Coffee size={16} weight="bold" /></p>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <div>
          <img src={CoffeImage}/>
        </div>
    </HomeCotainer>
  )
}