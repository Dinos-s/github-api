import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

function Profile() { 
    const {githubState} = useGithub()

    return(
        <S.Wrapper>
            <S.WrapperImage src={githubState.user.avatar} alt="Avatar User"/>
            <S.WrapperInfosUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h3>UserName: </h3>
                        <a href={githubState.user.html_url} target="_blank" rel="noopener noreferrer">{githubState.user.login}</a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfosUser>
        </S.Wrapper>
    )    
}

export default Profile;