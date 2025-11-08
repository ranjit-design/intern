# 🏥 Hospital Landing Page + Role-Based UI

**Frontend Developer Intern – Assignment Task**  
**Company:** ClickBytes Technologies Pvt. Ltd.  
**Position:** Frontend Developer Intern  
**Submitted by:** Ranjit Chaudhary

---

## 📋 Project Overview

A modern, responsive hospital website with role-based authentication and admin dashboard featuring full CRUD operations. Built as part of the frontend developer internship assignment.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** React Hooks + localStorage

---

## ✨ Features Implemented

### 1. **Landing Page**
- Hero section with call-to-action
- Services section (6 medical departments)
- About section with statistics
- Contact form
- Fully responsive design

### 2. **Login & Role-Based Routing**
- Login page with email, password, and role selection
- Automatic redirection based on role:
  - Admin → `/admin`
  - Doctor → `/doctor`
  - User → `/user`

### 3. **Admin Dashboard (Full CRUD)**
- ✅ **Create** - Add new users via modal form
- ✅ **Read** - View all users in table
- ✅ **Update** - Edit user information
- ✅ **Delete** - Remove users with confirmation
- ✅ **Search** - Real-time user filtering
- ✅ **Persist** - Data saved in localStorage

### 4. **Doctor & User Pages**
- Doctor dashboard with feature cards
- User/Patient dashboard
- Consistent UI across all pages

### 5. **Doctor Assignment**
- 5 doctors with department & specialization
- Dropdown in Add/Edit user forms
- Displays assigned doctor in user table

---

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Access Application
Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
hospital-app/
├── app/
│   ├── admin/page.tsx      # Admin dashboard (CRUD)
│   ├── doctor/page.tsx     # Doctor page
│   ├── user/page.tsx       # User page
│   ├── login/page.tsx      # Login page
│   └── page.tsx            # Landing page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    ├── users.json          # Sample user data
    └── doctors.json        # Doctor list
```

---

## 🎯 Key Highlights

✅ **Responsive Design** - Works on mobile, tablet, desktop  
✅ **Modern UI** - Clean, professional interface  
✅ **Animations** - Smooth Framer Motion effects  
✅ **Data Persistence** - localStorage for CRUD operations  
✅ **TypeScript** - Type-safe code  
✅ **Clean Code** - Well-organized components  

---

## 📝 Assignment Requirements Met

- ✅ Landing page with Hero, Services, About, Contact sections
- ✅ Login page with role-based redirection
- ✅ Admin, Doctor, and User role pages
- ✅ Admin dashboard with full CRUD operations
- ✅ User table with all required fields
- ✅ Doctor list (5 doctors) with assignment dropdown
- ✅ Search/filter functionality
- ✅ Responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ Framer Motion animations

---

## 🔐 Login Instructions

Enter any credentials and select a role:
- **Admin** - Access full user management
- **Doctor** - View doctor dashboard
- **User** - View patient dashboard

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

**Developed for ClickBytes Technologies Pvt. Ltd.**  
**Frontend Developer Internship Assignment**
