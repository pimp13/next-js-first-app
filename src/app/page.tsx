import { Metadata } from "next";
import Counter from "@/components/Counter";
import ServerComponent from "@/components/ServerComponent";

export const metadata: Metadata = {
  title: "This is home page",
  description: "Home page description"
}

export default function Home() {
  // throw new Error("Error: Home");

  return (
    <div className="my-5">
      <p>Home Page...</p>
      {/*
        Using a client component in a server component
        <Counter/>
        Using a server component in a client component
        <Counter>
          <ServerComponent/>
        </Counter>
        NOTE: A client component can be used inside a server component, but a server component cannot be used inside a client component unless it is passed as a child to another component and then called within a server component.
      */}
      <Counter>
        <ServerComponent/>
      </Counter>
    </div>
  );
}
