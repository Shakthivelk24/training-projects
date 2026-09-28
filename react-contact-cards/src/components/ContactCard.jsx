function ContactCard({
  contact,
  deleteContact,
}) {


  /* =====================================================
     GET INITIALS
  ===================================================== */

  const getInitials = (name) => {

    return name
      .split(" ")
      .map(
        (word) => word[0]
      )
      .join("")
      .substring(0, 2)
      .toUpperCase();

  };


  return (
    <article className="contact-card">


      {/* =================================================
          CARD HEADER
      ================================================= */}

      <div className="card-header">

        <div className="contact-avatar">

          {getInitials(
            contact.name
          )}

        </div>


        <div className="contact-name">

          <h3>
            {contact.name}
          </h3>

          <p>
            {contact.role}
          </p>

        </div>


        <button
          className="more-button"
          title="Delete contact"
          onClick={() =>
            deleteContact(
              contact.id
            )
          }
        >
          X
        </button>

      </div>


      {/* =================================================
          COMPANY
      ================================================= */}

      <div className="company-row">

        <div className="company-icon">
          {contact.company
            .charAt(0)
            .toUpperCase()}
        </div>

        <span>
          {contact.company}
        </span>

      </div>


      {/* =================================================
          CONTACT INFORMATION
      ================================================= */}

      <div className="card-info">

        <div className="info-row">

          <span className="info-label">
            EMAIL
          </span>

          <a
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>

        </div>


        <div className="info-row">

          <span className="info-label">
            PHONE
          </span>

          <a
            href={`tel:${contact.phone}`}
          >
            {contact.phone}
          </a>

        </div>


        <div className="info-row">

          <span className="info-label">
            LOCATION
          </span>

          <span>
            {contact.location}
          </span>

        </div>

      </div>


      {/* =================================================
          CARD FOOTER
      ================================================= */}

      <div className="card-footer">

        <a
          href={`mailto:${contact.email}`}
          className="card-button primary"
        >
          Email
        </a>


        <a
          href={`tel:${contact.phone}`}
          className="card-button secondary"
        >
          Call
        </a>

      </div>

    </article>
  );
}

export default ContactCard;