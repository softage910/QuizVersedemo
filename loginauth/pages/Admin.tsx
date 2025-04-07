"use client";
import { ref, onValue, update, push, set, remove } from "firebase/database";
// import { useRouter } from "next/navigation";
import { database } from "../src/app/firebase/firebaseconfig";
import { useState, useEffect } from "react";
import "./Admin.css";
import NotificationMessage from "@/app/components/NotificationMessage";

interface User {
  id: string;
  sno: number;
  email: string;
  name: string;
  joiningdate: string;
  type: "User" | "ADMIN";
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [inviteEmail, setInviteEmail] = useState("");
  // const router = useRouter();
  const [InviteMessage, setInviteMessage] = useState<string | null>(null);


  useEffect(() => {
    const user = localStorage.getItem("AutoUser");

  }, []);

  useEffect(() => {
    const usersRef = ref(database, "invitedUsers");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList: User[] = Object.keys(data).map((key, index) => ({
          id: key,
          sno: index + 1,
          email: data[key].email,
          name: data[key].name || "-",
          joiningdate: data[key].joiningdate || "-",
          type: data[key].type as "User" | "ADMIN",
        }));
        setUsers(userList);
      }
    });
  }, []);

  const handleTypeChange = async (userId: string, newType: "User" | "ADMIN") => {
    try {
      await update(ref(database, `invitedUsers/${userId}`), {
        type: newType,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, type: newType } : user
        )
      );
    } catch (error) {
      console.error("Error updating user type:", error);
    }
  };

  const initializeUserProgress = {
    "Day1": { "Module": false },
    "Day2": { "Module": false, "Assessment": false },
    "Day3": { "Module": false, "Assessment": false },
    "Day4": { "Module": false, "Assessment 1": false, "Assessment 2": false, "Assessment 3": false },
    "Day5": { "Module 1": false, "Module 2": false, "Assessment": false },
    "Day6": { "Module": false },
    "Day7": { "Assessment 1": false },
    "Day8": { "Module": false },
  };


  // const handleInviteUser = async () => {
  //   try {
  //     const newUserRef = push(ref(database, "invitedUsers")); // Create new entry
  //     await set(newUserRef, {
  //       email: inviteEmail,
  //       name: "-",
  //       joiningdate: "-",
  //       status: "Pending",
  //       type: "user",
  //       progress: initializeUserProgress,
  //       invitedAt: new Date().toISOString(),
  //     });

  //     setInviteEmail(""); // Clear input after invite
  //   } catch (error) {
  //     console.error("Error inviting user:", error);
  //   }
  // };


  const handleInviteUser = async () => {

    setInviteMessage(null);

    if (!inviteEmail.trim()) return;
  
    try {
      const newUserRef = push(ref(database, "invitedUsers")); 
      await set(newUserRef, {
        email: inviteEmail,
        name: "-",
        joiningdate: "-",
        status: "Pending",
        type: "user",
        progress: initializeUserProgress,
        invitedAt: new Date().toISOString(),
      });
  
      // Send email invitation
      const response = await fetch("/api/send-invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inviteEmail }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send invitation email");
      }

      setInviteMessage("Invitation Send Successfully!")
  
      setInviteEmail(""); // Clear input after inviting
    } catch (error) {
      console.error("Error inviting user:", error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await remove(ref(database, `invitedUsers/${userId}`)); // Delete from Firebase

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // Update UI
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  

  return (
    <>
      <div className="Admin-table" id="customers_table">
      <section className="table__header">
          <div className="input-group">
            <input
              type="email"
              placeholder="Invite Users (Enter Email)"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
            />
<button onClick={handleInviteUser} disabled={!inviteEmail.trim()}>
  Invite
</button>          </div>
        </section>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Email</th>
                <th>Name</th>
                <th>Joining Date</th>
                <th>Type</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.sno}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.joiningdate}</td>
                  <td style={{display: "flex", justifyContent: "center"}}>
                    <select className="Dropdown_Admin"
                      value={user.type}
                      onChange={(e) =>
                        handleTypeChange(user.id, e.target.value as "User" | "ADMIN")
                      }
                    >
                      <option value="User">User</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="Delete-btn"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      {InviteMessage && <NotificationMessage message={InviteMessage} onClose={() => setInviteMessage("")} color="success"  />}
    </>
  );
}
