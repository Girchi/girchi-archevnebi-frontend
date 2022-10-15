
import MyPoliticalList from './myPoliticalList/MyPoliticalList';
import Rating from './rating/Rating';
import SideBar from './sideBar/SideBar';

const MainContent = () => {   

    return ( 
        <div className="flex gap-4 mx-auto max-w-[1344px] justify-between mt-8">
            <SideBar />
            {/* <Rating /> */}
            <MyPoliticalList />
        </div>
     );
}
 
export default MainContent;