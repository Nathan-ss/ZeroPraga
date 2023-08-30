import { Routes, Route } from "react-router-dom";
import CameraCapture from "../features/CameraCapture";

export default function BaseRoutes() {
  return (
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<CameraCapture />} />
        <Route path="*" element={<CameraCapture />} />
      </Routes>
    </div>
  );
}
