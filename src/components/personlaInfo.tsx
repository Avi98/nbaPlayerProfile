import React from 'react'
import FavoriteContainer from "./favContainer"
import Name from "./name";


const PersonalInfo: React.FC = () => {
    return (
        <>
            <FavoriteContainer />
            <Name firstName={'paul'} lastName={'geroge'}/>
        </>
    )
}

export default PersonalInfo;