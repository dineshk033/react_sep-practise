import { UserContext } from "./context/user-context";
import RouterComponent from "./routes";
export default function App() {
  return (
    <>
      <UserContext.Provider value={{ username: "Guest" }}>
        <RouterComponent />
      </UserContext.Provider>
    </>
  );
}
