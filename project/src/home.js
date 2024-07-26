import { useContext} from "react";
import SwitchTabs from "./onBoarding";
import Welcome from "./welcome";
import { globalContext } from "./App";

function Home() {
    const {globalIsLogin} = useContext(globalContext);
    return (
            <div>
                {
                    globalIsLogin ?
                        <Welcome/>
                    :
                        <SwitchTabs/>
                }
            </div>
 
    )
}
export default Home;