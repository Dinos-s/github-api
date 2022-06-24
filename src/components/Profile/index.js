import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

function Profile() { 
    const {githubState} = useGithub()

    return(
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/56043956?v=4" alt="Avatar User"/>
            <S.WrapperInfosUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h3>UserName: </h3>
                        <a href="https://github.com/Dinos-s" target="_blank" rel="noopener noreferrer">dinos-s</a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Seguidores</h4>
                        <span>0</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
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