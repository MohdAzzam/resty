import React , {useContext} from 'react';
import './Header.scss';
import user from "../context/User";

const Header = ()=>{
    const [handleLogin] = useContext(user.Context);
    return (
        <header>
            <h1>RESTy</h1>
        </header>
    )
}

export default Header;