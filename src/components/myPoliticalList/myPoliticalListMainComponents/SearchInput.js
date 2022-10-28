import { useEffect } from "react";
import { retrieve } from "../../../utils/retrieve";
import { termToUrl } from "../../../utils/termToUrl";

const SearchInput = ({search, setSearch, setList, setProfilePictureList}) => {

    useEffect(() => {
        const timeOutId = setTimeout(() => searchUsers(search), 500);
        return () => clearTimeout(timeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const searchUsers = (searchTerm) => {
        const term = searchTerm.trim();
        if(!term) {
            setList({});
            setProfilePictureList({});
            return;
        }
        const url = termToUrl(term);
        if(url) {
            const retrieved = retrieve(url);
            retrieved.then(result=>{
                setList(result.data);
                setProfilePictureList(result.included);
            });
        }
    }



  return (
    <div className="flex w-[330px] ml-3 mr-28 flex-col">
      <label className="mb-[6px]" htmlFor="candidats">აირჩიე კანდიდატი</label>
          <input
            className="search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid border border-bgGray 
            rounded-md h-[50px] placeholder:font-medium placeholder:text-sm placeholder:leading-4"
            type="text"
            placeholder="სახელი-გვარი"
            name="userName"
            required
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
      
    </div>
  );
};

export default SearchInput;
