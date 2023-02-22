import { HeaderContainer, Actions } from "./styles"
import Logo  from '../../assets/Logo.svg'
import Map  from '../../assets/Map.svg'
import Cart  from '../../assets/Cart.svg'

export function Header(){
  return(
    <HeaderContainer>
        <img src={Logo} alt=""/>
        <Actions>
          <p> <img src={Map}/> Arujá, SP</p>
          <button><img src={Cart}/></button>
        </Actions>
    </HeaderContainer>
  )
}