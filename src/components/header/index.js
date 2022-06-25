import React, { useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from "./styled";


const Header = () => {
    const {getUser} = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () =>{
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Digite nome/username para pesquisar..." onChange={submitGetUser}/>
                <button type="submit">
                    <span>Buscar</span>
                </button>
            </S.Wrapper>
        </header>
    )
}

export default Header;