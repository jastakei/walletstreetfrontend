import styled from "styled-components";
import bg from "./img/pinkorange.png"
import { MainLayout } from "./styles/Layout";
import  Navigation from "./Components/Navigation/Navigation";
import Orb from './Components/Orb/Orb';
import { useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Expenses from "./Components/Expenses/Expenses";
import Incomes from "./Components/Incomes/Incomes";
import { useGlobal } from "./context/Global";
function App() {


  //our menu item ids start from 1 so that is our starting state
  const [active, setActive] = useState(1);

  const global = useGlobal();
  console.log(global);
  const orbMem = useMemo(() => {
    return <Orb />
  },[])
  
  const displayData = () => {
    switch(active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }


  return (
    <AppStyle bg={bg} className="App">
      {orbMem}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
            {displayData()}
        </main>
        </MainLayout>
    </AppStyle>
  );
}
//style page
const AppStyle = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    background-size: cover;
    main{
      flex: 1;
      background: rgba(252, 246, 249, 0.78);
      background: rgba(252, 246, 249, 0.78);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
  `; 
export default App;
