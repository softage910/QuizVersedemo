import Login from "./components/index";
import MobileScreen from "../../pages/MobileScreen";


export default function Home() {
  return (

    <div>
<div className="hidden max-[900px]:block">
  <MobileScreen />
</div>
<div className="block max-[900px]:hidden">
  <Login/>
</div>

    </div>
  );
}
