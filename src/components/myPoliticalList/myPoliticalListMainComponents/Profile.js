import photo from "../../../assets/images/profile.jpeg";


const Profile = ({ item }) => {
    return (
        <div className="flex grow ml-6">
            <img src={item[1]} alt="" className="w-12 h-12 rounded-2xl border-4 border-solid border-[#d3d6db3d]" />
            <div className="ml-4">
                <p className="font-[TBCContractica] font-medium text-base text-lightBlack">{item[0]['attributes']['display_name']}</p>
                <p className="font-[TBCContractica] text-sm text-lightGray"><span className="font-[Inter]">3 250</span> მხარდამჭერი</p>
            </div>
        </div>

    )
}

export default Profile;