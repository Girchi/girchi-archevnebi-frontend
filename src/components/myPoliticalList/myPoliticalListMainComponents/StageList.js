import ListItem from "./ListItem";

const StageList = ({items, stageN,candidateRemove}) => {
    if (items.length === 0) return;

    const stageList = [];
    items.forEach((element, index) => {
        stageList.push(
            <ListItem key={index} item={element} stageN={index === 0? stageN: ''} candidateRemove={() => candidateRemove(stageN, index)} />
        )
    });

    
    return(
        <div className="w-full border-t-2 border-borderGray">
            {stageList}
        </div>
    );
}

export default StageList;