const SearchSuggestions = ({list, profilePictureList, setChosen, setList, setProfilePictureList}) => {

    const noPicture = 'https://www.girchi.com/sites/default/files/avatars/2022-09/_1009237373362919.jpg';
    const checkPicture = id => {
        const filtered = profilePictureList.filter(item => item.id===id)[0];
        if(filtered) {
            return 'https://www.girchi.com' + filtered.attributes.uri.url;
        } else {
            return noPicture;
        }
    }


    const handleClick = (item, pic) => {
        setChosen([item, pic]);
        setList(null);
        setProfilePictureList(null);
    }


    return (
            <div className="overflow-scroll overflow-x-hidden flex-col items-center p-1.5 ml-3  w-[330px]  max-h-[284px] bg-white border-solid border-[1px] border-[#F2F2F2] rounded-md " >
                {list &&  list.map(item => {
                    const pic = item.relationships && item.relationships.user_picture.data ? checkPicture(item.relationships.user_picture.data.id) : noPicture;
                    return (
                        <div onClick={()=>handleClick(item, pic)} key={item.id} className="flex flex-row items-center px-[12px] py-[8px] gap-3 w-full min-h-[68px]  rounded-[4px] cursor-pointer hover:bg-[#F3F3F4]">
                            <img className="w-10 h-10 rounded-full" src={ pic } alt="profile" />
                            <div className="flex flex-col">
                                <h4 className="font-normal text-[14px] leading-6 text-[#292D33] ">
                                    { item.attributes.field_first_name } { item.attributes.field_last_name }
                                    { !item.attributes.field_first_name && !item.attributes.field_last_name && item.attributes.name}
                                </h4>
                            </div>
                        </div>
                    )
                })}
            </div>
    );
}
 
export default SearchSuggestions;