import AutorizationSideBar from "./AutorizationSideBar";
import LogInSIdeBar from "./LogInSIdeBar";

const SideBar = ({user, setNavigateSideBar}) => {



    return (  
        <>
        {user ? <LogInSIdeBar setNavigateSideBar={setNavigateSideBar}  /> : <AutorizationSideBar /> }     
        </>
    );
}
 
export default SideBar;