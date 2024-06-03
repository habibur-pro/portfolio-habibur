"use client";
import { toggleSidebar } from "@/redux/features/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Menu } from "lucide-react";

const MenuItem = () => {
  const isOpen = useAppSelector((state) => state.sidebarToggler.isOpen);
  const dispatch = useAppDispatch();
  return (
    <span>
      <Menu
        onClick={() => dispatch(toggleSidebar())}
        className={`absolute  right-10  ${isOpen ? "text-primary" : ""}`}
      />
    </span>
  );
};

export default MenuItem;
