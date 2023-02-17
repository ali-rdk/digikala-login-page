import From from "./components/From";
import EL from "./utils/EL.js";

const App = ()=>{
    const page = EL({
        element: 'div',
        children: [
            From()
        ]
    })

    return page;
}

export default App; 