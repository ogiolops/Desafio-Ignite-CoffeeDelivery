import { HeaderContainer, Actions } from "./styles"
import Logo  from '../../assets/Logo.svg'
import Map  from '../../assets/Map.svg'
import Cart  from '../../assets/Cart.svg'
import { NavLink } from 'react-router-dom'

export function Header(){
  return(
    <HeaderContainer>
      <nav>
        <NavLink to='/' ><img src={Logo} alt=""/></NavLink>
        
        <Actions>
          <p> <img src={Map}/> Arujá, SP</p>
          
            <NavLink to='/Checkout' ><button ><img src={Cart}/></button></NavLink>
                
        </Actions>
      </nav>  
    </HeaderContainer>
  )
}