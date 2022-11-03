import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";
import SupportAmount from "./SupportAmount";

const AddCandidate = ({setChosen, candidates, addCandidate}) => {
    const [search, setSearch] = useState('');
    const [list, setList] = useState(null);
    const [profilePictureList, setProfilePictureList] = useState(null);
    const [dropDownIsOpen, setDropDownIsOpen] = useState(false);


    return (  
        <div className= "w-full border-t-2 flex py-6  items-start justify-between text-lightBlack font-[TBCContractica] text-xs font-medium">
            <div className="flex flex-col w-1/6">
            <label className="" htmlFor="place">ადგილი</label>
                <div className="mt-1.5 border-[1px] justify-between rounded-md py-3.5 px-3 text-sm">
                    <div className="flex justify-between">
                        <div>ადგილი</div>
                        <div className="cursor-pointer" onClick={() => setDropDownIsOpen(!dropDownIsOpen)}>arrow</div>
                    </div>
                    {dropDownIsOpen &&
                    <div className="flex flex-col mt-4">
                        {
                            [...Object.keys(candidates), Object.keys(candidates).length+1].map(key => (
                                <label key={key}><input className="mr-4 stage-checkbox" type='checkbox' data-stage={key} />{key}</label>
                            ))
                        }
                        <button className="mt-4" onClick={() => {setDropDownIsOpen(false); addCandidate()}}>დადასტურება</button>
                    </div>
                    }
                </div>
            </div>
            <div className="flex flex-col items-start">
                <SearchInput search={search} setSearch={setSearch} setList={setList} setProfilePictureList={setProfilePictureList} />
            
                { list && list.length >0 && <SearchSuggestions 
                            list={list} setList={setList} setChosen={setChosen}
                            profilePictureList={profilePictureList} setProfilePictureList={setProfilePictureList} /> 
                }
            </div>
            <SupportAmount />
        </div>
    );
}
 
export default AddCandidate;