import './App.css'
import { AlertBox } from "./components/AlertBox/AlertBox";
import type { AlertType } from './types/index';

let type: AlertType = "success";
let message: string = '';

if (type === "success") {
  message = "Your profile has been updated successfully!";
} else if (type === "error") {
  message = "You have encountered an Error!";
} else if (type = "warning") {
  message = "Be careful this is a Warning";
} else {
  message = "More info is needed!";
}

function App() {
   return (
    <>
    <AlertBox type={type} message={message}>
    </AlertBox>
    </>
  )
}

export default App
