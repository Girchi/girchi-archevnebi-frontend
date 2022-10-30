import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";
import SupportAmount from "./SupportAmount";

const AddCandidate = ({chosen, setChosen}) => {


    const [list, setList] = useState(null);
    const [profilePictureList, setProfilePictureList] = useState(null);

    console.log(list)

    return (  
        <div className= "w-full border-t-2 flex py-6  items-start justify-between text-lightBlack font-[TBCContractica] text-xs font-medium">
            <div className="flex flex-col w-1/6">
            <label className="" htmlFor="place">ადგილი</label>
                <div className="mt-1.5 border-[1px] justify-between rounded-md py-3.5 px-3 text-sm">
                    <select className="w-full bg-white">
                        <option value="1">1 ადგილი</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col items-start">
                <SearchInput chosen={chosen} setList={setList} setProfilePictureList={setProfilePictureList} />
            
                { list && list.length>0 && <SearchSuggestions 
                            list={list} setList={setList} setChosen={setChosen}
                            profilePictureList={profilePictureList} setProfilePictureList={setProfilePictureList} 
                        /> }
            </div>

            <SupportAmount />

    </div>
    );
}
 
export default AddCandidate;