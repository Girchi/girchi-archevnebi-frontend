import MyPoliticalListHeader from "./MyPoliticalListHeader";
import MyPoliticalListMain from "./MyPoliticalListMain";

const MyPoliticalList = () => {


    return (  
            <div className="w-[1002px] bg-white rounded-lg p-[40px] ">
                <MyPoliticalListHeader />
                <MyPoliticalListMain />
            </div>
    );
}
 
export default MyPoliticalList;