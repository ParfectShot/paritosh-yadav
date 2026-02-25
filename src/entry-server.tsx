// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            innerHTML={`(function(){var t=localStorage.getItem('theme');if(t==='light')return;if(t==='dark'){document.documentElement.classList.add('dark');return}if(!window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.classList.add('dark')}})()`}
          />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
