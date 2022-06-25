import React, {createContext, useState, useCallback} from 'react';
import api from '../services/api'

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({children}) => {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            followers: 0,
            followings: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    })
    
    const getUser = (username) => {
        setGithubState((prevState)=>({
            ...prevState,
            loading: !prevState.loading,
        }))

        api.get(`users/${username}`).then(({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                hasUser: true,
                user: {
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    followers: data.followers,
                    followings: data.followings,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                },
          }));
        }).finally(() => {
            setGithubState((prevState)=>({
                ...prevState,
                loading: !prevState.loading,
            }))
        })
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider;