function Sidebar({
  activePage,
  setActivePage,
}) {

  return (
    <aside className="sidebar">

      {/* =================================================
          LOGO
      ================================================= */}

      <div className="sidebar-logo">

        <div className="logo-mark">
          C
        </div>

        <div>

          <h2>
            Contact
          </h2>

          <span>
            Manager
          </span>

        </div>

      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav className="sidebar-nav">

        <p className="nav-title">
          MAIN MENU
        </p>


        <button
          className={
            activePage === "dashboard"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() =>
            setActivePage("dashboard")
          }
        >

          <span className="nav-icon">
            01
          </span>

          Dashboard

        </button>


        <button
          className={
            activePage === "contacts"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() =>
            setActivePage("contacts")
          }
        >

          <span className="nav-icon">
            02
          </span>

          Contacts

        </button>
      </nav>


      {/* =================================================
          SIDEBAR BOTTOM
      ================================================= */}

      <div className="sidebar-bottom">

        <div className="sidebar-user">

          <div className="sidebar-avatar">
            SK
          </div>

          <div>

            <strong>
              Shakthivel K
            </strong>

            <span>
              Admin
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;