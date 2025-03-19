# User Management System

This project is a **React-based User Management System** that allows users to:
- Search for users by ID, Name, or Email.
- View, edit, and delete user records in a table format.
- Upload user records from a JSON file.
- Navigate through paginated user records.

---

## 📌 Features

✅ **User Search**: Search users by ID, Name, or Email using a search bar.  
✅ **User Table**: View user records in a structured table with options to edit or delete records.  
✅ **Inline Editing**: Edit user details directly in the table.  
✅ **Unique Email Validation**: Prevent duplicate emails during editing.  
✅ **File Upload**: Upload JSON files to bulk import user data.  
✅ **Pagination**: Navigate through multiple pages of user records.  
✅ **External Styling**: Uses CSS files for better maintainability and clean UI.

---

## 🛠️ Installation & Setup

### Prerequisites:
Ensure you have the following installed:
- **Node.js** (Latest LTS recommended)
- **npm** or **yarn** (Package manager)

### Steps to Set Up:
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```

4. Open **http://localhost:5173/** in your browser.


## 🚀 Usage Guide

### 🔍 Searching Users
- Enter an ID, Name, or Email in the search bar to filter users dynamically.

### 📝 Editing a User
- Click on the **Edit** button next to a user.
- Modify the **Name** or **Email** fields.
- Click **Save** to update the record.
- Emails must be **unique** across records.

### 🗑️ Deleting a User
- Click the **Delete** button next to a user to remove them from the list.

### 📂 Uploading JSON Data
- Click the **Upload JSON File** button.
- Select a `.json` file with an array of user records.
- Example JSON format:
  ```json
  [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
  ]
  ```

### 🔄 Pagination
- Use the **page buttons** at the bottom to navigate through records.

---

## 🎨 Styling & UI
This project follows **external CSS styling** for a clean and maintainable structure. Each component has its dedicated `.css` file.

---

## 🛠 Technologies Used
- **React.js** – Frontend framework
- **CSS** – Styling
- **FileReader API** – Reading JSON files


---

## 📧 Contact
For any queries or feedback, reach out at [rahuldutta.rd11@gmail.com](rahuldutta.rd11@gmail.com).
Live-url - https://user-info-test.netlify.app/

---

Happy Coding! 🚀

# user-info
