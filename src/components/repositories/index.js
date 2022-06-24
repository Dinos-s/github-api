import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled"

const Repositories = () =>{
    return (
        <>
            <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected">
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    <RepositoryItem 
                        name="4446"
                        linkToRepo="https://github.com/Dinos-s/4446"
                        fullName="dinos-s/4446"
                    /></S.WrapperTabPanel>
                <S.WrapperTabPanel>
                    <RepositoryItem  
                        name="Alura2" 
                        linkToRepo="https://github.com/Dinos-s/Alura2" 
                        fullName="dinos-s/Alura2"
                    /></S.WrapperTabPanel>    
            </S.WrapperTabs>
        </>
    );
}

export default Repositories;