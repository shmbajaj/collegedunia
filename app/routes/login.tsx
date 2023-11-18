import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Login" }];
};

export default function Login() {
  return <div className="container relative">Login</div>;
}
