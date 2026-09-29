# 🚀 Training Projects

A collection of hands-on projects developed while learning and practicing
modern web development concepts.

This repository contains practical projects focused on **HTML, CSS,
JavaScript, React, component-based development, Props, State, responsive
design, and frontend UI development**.

---

## 📂 Projects

| # | Project | Technology | Main Concepts |
|---|---|---|---|
| 01 | React Contact Cards | React, CSS | Components, Props, State, Forms |
| 02 | React Like Card | React, CSS | Props, State, Events |
| 03 | Resume Portfolio | HTML, CSS, JavaScript | Responsive Design, Forms, Admin Panel |

---

# 01 — React Contact Cards

A responsive contact management application built with React.

The application allows users to view, search, add, and delete contact
information through a clean and professional interface.

### ✨ Features

- 👤 Contact cards
- 🔍 Search contacts
- ➕ Add new contacts
- 🗑️ Delete contacts
- 📧 Email contact
- 📞 Call contact
- 🏢 Company information
- 📍 Location information
- 📱 Responsive design
- 🧩 Component-based React architecture

### 🛠️ Technologies

- React
- JavaScript
- CSS
- Vite

### 📚 React Concepts

- Functional Components
- `useState`
- Props
- Event Handling
- Array `.map()`
- Array `.filter()`
- Conditional Rendering
- Controlled Forms

### 📁 Main Components

```text
react-contact-cards/
└── src/
    ├── components/
    │   ├── Sidebar.jsx
    │   ├── ContactCard.jsx
    │   ├── ContactForm.jsx
    │   └── StatCard.jsx
    │
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx

### ▶️ Run the Project
```
cd react-contact-cards
npm install
npm run dev
```
# 02 — React Like Card
A reusable social-style Like Card built using React Props and State.

The project demonstrates how data can be passed from a parent component
to a reusable child component using Props, while React State manages the
interactive Like/Unlike functionality.

### ✨ Features

- 👤 User profile information
- 💼 User role
- 📍 Location
- 📝 Post/message content
- ❤️ Like button
- 🔢 Dynamic like count
- 🔄 Like / Unlike functionality
- ♻️ Reusable React component
- 📱 Responsive design

### 🛠️ Technologies

- React
- JavaScript
- CSS
- Vite

### 📚 React Concepts

#### Props

The parent component passes data to the `LikeCard` component:

```jsx
<LikeCard
  name="Arjun Kumar"
  role="Software Engineer"
  location="Bengaluru, India"
  message="Building scalable applications..."
  likes={125}
/>
```
The child component receives the values through props:
```
function LikeCard({
  name,
  role,
  location,
  message,
  likes
}) 
```
#### State

The Like functionality is managed using React's useState Hook
```
const [isLiked, setIsLiked] =
  useState(false);

const [likeCount, setLikeCount] =
  useState(likes);
```
When the user clicks the Like button:

- If the card is not liked, the like count increases.
- If the card is already liked, the like count decreases.
- The button changes between Like and Liked.
- The heart icon updates based on the current state.
#### 🔄 Application Flow
```
Parent Component
       │
       │ Props
       ▼
   LikeCard
       │
       │ Displays Data
       ▼
    User Click
       │
       ▼
   useState()
       │
       ▼
 Like / Unlike
       │
       ▼
Like Count Updates
```
#### ▶️ Run the Project
```
cd react-like-card
npm install
npm run dev
```

# 📂 Repository Structure
```
training-projects/
│
├── react-contact-cards/
│
├── react-like-card/
│
├── resume-portfolio/
│
└── README.md
```
# 🧠 Purpose

The purpose of this repository is to document my practical learning
journey through hands-on development projects. <br>

Instead of learning concepts only through theory, each project
focuses on implementing those concepts in a working application.<br>

The repository will be updated with additional training projects
as I continue learning and improving my development skills.<br>

# 👨‍💻 Author

***Shakthivel K***

Computer Science Engineering Student

**Connect**
GitHub: [@Shakthivelk24](https://github.com/Shakthivelk24)

#### ⭐ This repository contains projects created for learning,
practice, and continuous improvement in software development.


### Recommended repository description

For the GitHub repository **About** section, use:

> **A collection of hands-on web development training projects built with HTML, CSS, JavaScript, and React.**

Your repository already has the three project folders visible on GitHub, so this README will fit the current structure. 
