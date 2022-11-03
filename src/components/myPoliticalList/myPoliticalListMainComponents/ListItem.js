import Profile from "./Profile";
import SupportAmount from "./SupportAmount";

const ListItem = ({stageN, item, candidateRemove}) => {
  return (
    <div className="flex py-6  items-center justify-between">
      <div className="font-[Inter] w-4 font-semibold text-sm text-lightBlack">{stageN}</div>
      <Profile item={item} />
      <SupportAmount candidateRemove={candidateRemove}/>
    </div>
  )
}

export default ListItem;