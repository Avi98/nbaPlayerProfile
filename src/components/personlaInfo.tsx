import React from 'react'
import { clippersIcon } from '../images';

import Name from "./name";
import ClubName from "./clubName";
import HeightWeight from "./heightWeight";
import FavoriteContainer from "./favContainer";


//  icon={'sdf'} clubName={'sdf'}
const PersonalInfo: React.FC = () => {
    return (
        <>
            <FavoriteContainer />
            <Name firstName={'paul'} lastName={'geroge'}/>
            <ClubName icon={clippersIcon} clubName={'LA Clippers'} />
            <HeightWeight />
        </>
    )
}

export default PersonalInfo;