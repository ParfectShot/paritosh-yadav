import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MetaProvider, Title, Meta } from "@solidjs/meta";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Paritosh Yadav</Title>
          <Meta name="description" content="Frontend Engineer, Photographer, Builder — Paritosh Yadav's portfolio" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
