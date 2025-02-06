import {Provider} from "react-redux";
import {Storage}  from "./storage/Storage.jsx";
import Loader from './components/Loader'; 

const NavBar = lazy(() => import('./components/Navbar/Navbar'));
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); 
  }, []);
  return (
    <Provider store={Storage}>
 <div>
      {loading ? (
        <Loader /> 
      ) : (
        <Suspense fallback={<Loader />}>
          <NavBar /> 
        </Suspense>
      )}
    </div>
    </Provider>
  )
}

export default App
