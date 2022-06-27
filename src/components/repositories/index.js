import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled"

const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserforSearchrepos, setStateHasUserforSearchrepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setStateHasUserforSearchrepos(githubState.repositories);
    }, [githubState.user.login])

    return (
        <>
            {hasUserforSearchrepos ? (

                <S.WrapperTabs
                selectedTabClassName="is-selected"
                selectedTabPanelClassName="is-selected">
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WeappearList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name} 
                                    linkToRepo={item.full_name} 
                                    fullName={item.full_name} 
                                />
                            ))}
                        </S.WeappearList>
                    </S.WrapperTabPanel>                  
                    <S.WrapperTabPanel>
                        <S.WeappearList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name} 
                                    linkToRepo={item.html_url} 
                                    fullName={item.full_name} 
                                />
                            ))}
                        </S.WeappearList>
                    </S.WrapperTabPanel>    
                </S.WrapperTabs>
            ):(
               <>
               </>
            )}
        </>
    );
}

export default Repositories;