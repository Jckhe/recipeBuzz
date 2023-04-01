import { LayoutProps } from "@/types/Layout.types";
import Header from "./Header";

export default function Layout({children}: LayoutProps) {
  return (
    <div className="content">
      <Header/>
      { children }
    </div>
  )
}