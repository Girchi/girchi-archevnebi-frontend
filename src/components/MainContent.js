
import { useState } from 'react';
import MyPoliticalList from './myPoliticalList/MyPoliticalList';
import Rating from './rating/Rating';
import SideBar from './sideBar/SideBar';

const MainContent = () => {   

    const [user, setUser] = useState(true);
    const [navigateSideBar, setNavigateSideBar] = useState(true);



    return ( 
        <div className="flex gap-4 mx-auto max-w-[1344px] justify-between mt-8">
            <SideBar user={user} setNavigateSideBar={setNavigateSideBar} />
            { user && navigateSideBar ? <MyPoliticalList /> : <Rating /> }
        </div>
     );
}
 
export default MainContent;