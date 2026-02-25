import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Paritosh Yadav</Title>
          <Meta name="description" content="Developer × Photographer × Builder — Paritosh Yadav's portfolio" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Link rel="icon" href="/favicon.ico" />
          <script
            innerHTML={`(function(){var t=localStorage.getItem('theme');if(t==='light')return;if(t==='dark'){document.documentElement.classList.add('dark');return}if(!window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.classList.add('dark')}})()`}
          />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
