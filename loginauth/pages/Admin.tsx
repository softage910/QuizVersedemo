"use client";
import { ref, onValue, update } from "firebase/database";
import { useRouter } from "next/navigation";
import { database } from "../src/app/firebase/firebaseconfig";
import { useState, useEffect } from "react";
import "./Admin.css";

interface User {
  uid: string;
  id: string;
  sno: number;
  email: string;
  name: string;
  joiningdate: string;
  type: "User" | "ADMIN";
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("AutoUser");
    if (!user) {
      router.replace("/");
    }
  }, []);

  useEffect(() => {
    const usersRef = ref(database, "users");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList: User[] = Object.keys(data).map((key, index) => ({
          id: key,
          sno: index + 1,
          uid: data[key].uid,
          email: data[key].email,
          name: data[key].name || "-",
          joiningdate: data[key].signUpDate || "-",
          type: data[key].role as "User" | "ADMIN",
        }));
        setUsers(userList);
      }
    });
  }, []);

  const handleTypeChange = async (userId: string, newType: "User" | "ADMIN") => {
    try {
      await update(ref(database, `users/${userId}`), {
        role: newType,
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

  return (
    <>
      <div className="Admin-table" id="customers_table">
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Employee Code</th>
                <th>Email</th>
                <th>Name</th>
                <th>Joining Date/Time</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.sno}</td>
                  <td>{user.uid}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.joiningdate}</td>
                  <td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
