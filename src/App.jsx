import User from "./pages/User";
import { RecordsProvider } from "./features/RecordsContext";

function App() {
  return (
    <RecordsProvider>
      {/* <ClientRecords/> */}
      <User />
    </RecordsProvider>
  );
}

export default App;
