import React from "react";
import * as S from "./styled"

function Profile() { 
    return(
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/56043956?v=4" alt="Avatar User"/>
            <S.WrapperInfosUser>
                <div>
                    <h1>Gabriel de Matos Ramos</h1>
                    <S.WrapperUserName>
                        <h3>UserName: </h3>
                        <span>dinos-s</span>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Seguidores</h4>
                        <span>0</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>0</span>
                    </div>
                    <div>
                        <h4>Seguindo</h4>
                        <span>0</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfosUser>
        </S.Wrapper>
    )    
}

export default Profile;