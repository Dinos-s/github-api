import React from "react";
import * as S from "./styled"
export const Repositories = () =>{
    return (
        <S.WrapperTabs 
        selectTabClassName="is-selected"
        selectTabPanelClassName="is-selected">
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>        
        </S.WrapperTabs>
    )
}