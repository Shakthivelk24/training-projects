import LikeCard from "./components/LikeCard";
import "./App.css";

function App() {
  return (
    <main className="app">

      <div className="container">

        {/* ==============================
            PAGE HEADER
        ============================== */}

        <header className="page-header">

          <span className="page-label">
            REACT • PROPS
          </span>

          <h1>
            Like Card
          </h1>

          <p>
            A simple reusable card built with
            React Props and State.
          </p>

        </header>


        {/* ==============================
            LIKE CARDS
        ============================== */}

        <section className="cards">

          <LikeCard
            name="Arjun Kumar"
            role="Software Engineer"
            location="Bengaluru, India"
            message="Building scalable applications with React and modern web technologies."
            likes={125}
          />


          <LikeCard
            name="Rahul Reddy"
            role="DevOps Engineer"
            location="Hyderabad, India"
            message="Building reliable CI/CD pipelines and automating cloud infrastructure."
            likes={89}
          />


          <LikeCard
            name="Vikram Singh"
            role="Full Stack Developer"
            location="Pune, India"
            message="Creating clean and scalable full-stack applications."
            likes={210}
          />

        </section>

      </div>

    </main>
  );
}

export default App;