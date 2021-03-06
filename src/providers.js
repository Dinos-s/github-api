import React from 'react';
import App from "./App";
import { ResetCss } from './global/resetCss';
import  GithubProvider  from "./providers/github-provider";

const Providers = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCss/>
                <App/>
            </GithubProvider>
        </main>
    )
}

export default Providers;