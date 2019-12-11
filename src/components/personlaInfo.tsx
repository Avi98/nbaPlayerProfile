import React from 'react'
import FavoriteContainer from "./favContainer"
import Name from "./name";
import ClubName from "./clubName";
import { clippersIcon } from '../images';


//  icon={'sdf'} clubName={'sdf'}
const PersonalInfo: React.FC = () => {
    return (
        <>
            <FavoriteContainer />
            <Name firstName={'paul'} lastName={'geroge'}/>
            <ClubName icon={clippersIcon} clubName={'LA Clippers'} />
        </>
    )
}

export default PersonalInfo;