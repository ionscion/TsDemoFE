// src/routes/clients.route.tsx
import { createFileRoute, Outlet } from "@tanstack/react-router";
import MyButton from "../components/MyButton";

export const Route = createFileRoute("/users")({
  component: UsersLayout,
});

const handleAddUser = () => {
  console.log("Add a user");
};

function UsersLayout() {
  return (
    <div className=" ">
      <div className="p-2 flex items-center gap-7">
        <h2 className="text-xl text-center font-bold">Users</h2>
        <MyButton onClick={() => handleAddUser()} label="Add Client" disabled={false}/>
      </div>
      <Outlet /> {/* list _or_ detail will render here */}
    </div>
  );
}
