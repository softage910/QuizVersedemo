"use client"; // This ensures it's a Client Component

import { Provider } from "react-redux";
import { store } from "../../redux/store"; // Adjust path if necessary

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
