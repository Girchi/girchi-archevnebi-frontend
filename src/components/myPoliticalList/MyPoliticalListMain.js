import { useState} from "react";
import AddCandidate from "./myPoliticalListMainComponents/AddCandidate";
import StageList from "./myPoliticalListMainComponents/StageList";

const MyPoliticalListMain = () => {

  const [chosen, setChosen] = useState(null);
  const [candidates, setCandidates] = useState({});

  const addCandidate = () => {
    if(!chosen) return;
    const updateCandidates = {...candidates};
    const stageNumbers = document.querySelectorAll('.stage-checkbox:checked');

    stageNumbers.forEach(element => {
        const stageNumber = element.getAttribute('data-stage');
        let candidateIsExist = false;
        if(updateCandidates[stageNumber] === undefined){
            updateCandidates[stageNumber] = [chosen];
        } else {
          candidateIsExist = updateCandidates[stageNumber].every(elem => {
            return elem[0]['id'] === chosen[0]['id']
          });
          if(!candidateIsExist){
            updateCandidates[stageNumber].push(chosen);
          }
        }
    });
    setCandidates(updateCandidates);
  }

  const candidateRemove = (key, itemIndex) => {
    let newCandidates = {...candidates};
    newCandidates[key] = candidates[key].filter((item, index) => index !== itemIndex);
    if(newCandidates[key].length === 0) {
      const newCandidatesChangedStage = {};
      let stage = 1;
      for (const prop in newCandidates) {
        if(newCandidates[prop].length === 0) continue;
        else{
          newCandidatesChangedStage[stage] = newCandidates[prop];
          stage += 1;
        }
      }
      newCandidates = newCandidatesChangedStage;
    }
    setCandidates(newCandidates);
  }

  return (
    <div className="flex flex-col py-10">
      { Object.keys(candidates).map(key => (
          <StageList key={key} items={candidates[key]} stageN={key} candidateRemove={candidateRemove}/>
        ))
      }
      <AddCandidate chosen={chosen} setChosen={setChosen} setCandidates={setCandidates} candidates={candidates} addCandidate={addCandidate} />
    </div>
  )
}

export default MyPoliticalListMain;