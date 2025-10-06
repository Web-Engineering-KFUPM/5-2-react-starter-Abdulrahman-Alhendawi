import './App.css'
import StudentCard from './Components/StudentCard';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* Render two StudentCard components with different props */}
          <StudentCard name="Abdulrahman Alhendawi 😎" id="202274080" department="ICS" />
          <StudentCard name="Abo Shady " id="202253120" department="SWE" />
        
        </div>
      </main>
    </div>
  )
}

export default App
