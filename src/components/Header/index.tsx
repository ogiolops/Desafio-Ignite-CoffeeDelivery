import { HeaderContainer } from "./styles"
import { ShoppingCartSimple } from "phosphor-react"
import Logo  from '../../assets/Logo.svg'

export function Header(){
  return(
    <HeaderContainer>
        <img src={Logo} alt=""/>
        <div>
          <p>Arujá-SP</p>
          <button><ShoppingCartSimple size={18} /></button>
        </div>
    </HeaderContainer>
  )
}