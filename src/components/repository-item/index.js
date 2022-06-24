import React from 'react';

const RepositoryItem = ({name, linkToRepo, fullName}) => {
    return (
        <>
            <h2>{name}</h2>
            <h4>full name:</h4>
            <a href={linkToRepo} target="_blank" rel="noopener noreferrer">{fullName}</a>
        </>
    )
}

export default RepositoryItem;