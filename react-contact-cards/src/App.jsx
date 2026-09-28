import { useState } from "react";

import Sidebar from "./components/Sidebar";
import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";
import StatCard from "./components/StatCard";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Arjun Kumar",
      email: "arjun.kumar@gmail.com",
      phone: "+91 98765 43210",
      company: "Google",
      role: "Software Engineer",
      location: "Bengaluru",
    },
    {
      id: 2,
      name: "Rahul Reddy",
      email: "rahul.reddy@gmail.com",
      phone: "+91 99887 66554",
      company: "Infosys",
      role: "DevOps Engineer",
      location: "Bengaluru",
    },
    {
      id: 3,
      name: "Vikram Singh",
      email: "vikram.singh@gmail.com",
      phone: "+91 98765 11223",
      company: "Microsoft",
      role: "Full Stack Developer",
      location: "Hyderabad",
    },
    {
      id: 4,
      name: "Karthik Raj",
      email: "karthik.raj@gmail.com",
      phone: "+91 99887 22110",
      company: "Amazon",
      role: "Cloud Engineer",
      location: "Chennai",
    },
    {
      id: 5,
      name: "Rohit Sharma",
      email: "rohit.sharma@gmail.com",
      phone: "+91 98765 77889",
      company: "TCS",
      role: "Backend Developer",
      location: "Bengaluru",
    },
    {
      id: 6,
      name: "Aditya Verma",
      email: "aditya.verma@gmail.com",
      phone: "+91 99887 33445",
      company: "Accenture",
      role: "Cloud Architect",
      location: "Pune",
    },
  ]);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [activePage, setActivePage] =
    useState("contacts");


  /* =====================================================
     ADD CONTACT
  ===================================================== */

  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: Date.now(),
    };

    setContacts((previousContacts) => [
      ...previousContacts,
      newContact,
    ]);

    setShowForm(false);
  };


  /* =====================================================
     DELETE CONTACT
  ===================================================== */

  const deleteContact = (id) => {
    setContacts((previousContacts) =>
      previousContacts.filter(
        (contact) => contact.id !== id
      )
    );
  };


  /* =====================================================
     FILTER CONTACTS
  ===================================================== */

  const filteredContacts = contacts.filter(
    (contact) => {

      const searchText =
        search.toLowerCase();

      return (
        contact.name
          .toLowerCase()
          .includes(searchText) ||

        contact.email
          .toLowerCase()
          .includes(searchText) ||

        contact.company
          .toLowerCase()
          .includes(searchText) ||

        contact.role
          .toLowerCase()
          .includes(searchText) ||

        contact.location
          .toLowerCase()
          .includes(searchText)
      );

    }
  );


  /* =====================================================
     STATISTICS
  ===================================================== */

  const totalContacts =
    contacts.length;

  const totalCompanies =
    new Set(
      contacts.map(
        (contact) => contact.company
      )
    ).size;

  const totalLocations =
    new Set(
      contacts.map(
        (contact) => contact.location
      )
    ).size;


  return (
    <div className="app">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="main-content">


        {/* =================================================
            TOP HEADER
        ================================================= */}

        <header className="top-header">

          <div>

            <p className="header-label">
              CONTACT MANAGEMENT
            </p>

            <h1>
              {activePage === "contacts"
                ? "My Contacts"
                : activePage === "dashboard"
                ? "Dashboard"
                : "Settings"}
            </h1>

          </div>


          <div className="header-actions">

            <div className="profile">

              <div className="profile-avatar">
                SK
              </div>

              <div className="profile-info">

                <strong>
                  Shakthivel K
                </strong>

                <span>
                  Administrator
                </span>

              </div>

            </div>

          </div>

        </header>


        {/* =================================================
            DASHBOARD / CONTACTS
        ================================================= */}

        {activePage === "contacts" && (

          <>

            {/* =================================================
                STATISTICS
            ================================================= */}

            <section className="stats-grid">

              <StatCard
                title="Total Contacts"
                value={totalContacts}
                icon="01"
              />

              <StatCard
                title="Companies"
                value={totalCompanies}
                icon="02"
              />

              <StatCard
                title="Locations"
                value={totalLocations}
                icon="03"
              />

            </section>


            {/* =================================================
                CONTACT TOOLBAR
            ================================================= */}

            <section className="contacts-section">

              <div className="contacts-toolbar">

                <div>

                  <h2>
                    All Contacts
                  </h2>

                  <p>
                    Manage your professional network
                  </p>

                </div>


                <div className="toolbar-actions">

                  <div className="search-box">

                    <span>
                      /
                    </span>

                    <input
                      type="text"
                      placeholder="Search contacts..."
                      value={search}
                      onChange={(event) =>
                        setSearch(
                          event.target.value
                        )
                      }
                    />

                  </div>


                  <button
                    className="add-button"
                    onClick={() =>
                      setShowForm(true)
                    }
                  >
                    <span>+</span>
                    Add Contact
                  </button>

                </div>

              </div>


              {/* =================================================
                  CONTACT GRID
              ================================================= */}

              {filteredContacts.length > 0 ? (

                <div className="contact-grid">

                  {filteredContacts.map(
                    (contact) => (

                      <ContactCard
                        key={contact.id}
                        contact={contact}
                        deleteContact={
                          deleteContact
                        }
                      />

                    )
                  )}

                </div>

              ) : (

                <div className="empty-state">

                  <div className="empty-icon">
                    ?
                  </div>

                  <h3>
                    No contacts found
                  </h3>

                  <p>
                    Try searching for another
                    contact.
                  </p>

                </div>

              )}

            </section>

          </>

        )}


        {/* =================================================
            DASHBOARD PAGE
        ================================================= */}

        {activePage === "dashboard" && (

          <section className="dashboard-page">

            <div className="dashboard-welcome">

              <p>
                Welcome back,
              </p>

              <h2>
                Shakthivel
              </h2>

              <span>
                Here's an overview of your
                contact network.
              </span>

            </div>


            <div className="stats-grid dashboard-stats">

              <StatCard
                title="Total Contacts"
                value={totalContacts}
                icon="01"
              />

              <StatCard
                title="Companies"
                value={totalCompanies}
                icon="02"
              />

              <StatCard
                title="Locations"
                value={totalLocations}
                icon="03"
              />

            </div>

          </section>

        )}


        {/* =================================================
            SETTINGS PAGE
        ================================================= */}

        {activePage === "settings" && (

          <section className="settings-page">

            <div className="settings-card">

              <div className="settings-icon">
                ⚙
              </div>

              <h2>
                Settings
              </h2>

              <p>
                Contact management settings
                will be available here.
              </p>

            </div>

          </section>

        )}


        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="main-footer">

          <p>
            Contact Manager
          </p>

          <span>
            React Application © 2026
          </span>

        </footer>

      </main>


      {/* =================================================
          ADD CONTACT MODAL
      ================================================= */}

      {showForm && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowForm(false)
          }
        >

          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-header">

              <div>

                <p>
                  NEW CONTACT
                </p>

                <h2>
                  Add Contact
                </h2>

              </div>

              <button
                className="close-button"
                onClick={() =>
                  setShowForm(false)
                }
              >
                ×
              </button>

            </div>


            <ContactForm
              addContact={addContact}
            />

          </div>

        </div>

      )}

    </div>
  );
}

export default App;