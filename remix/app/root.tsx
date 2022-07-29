import {
  Link,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "remix";

import type { MetaFunction } from "remix";
import tailwindStyles from "./styles/tailwind.css";
import { BasketProvider } from "./components/basket";
import { locale } from "./config/locale";
import { BasketButton } from "./components/basket/basket-button";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorComponent } from "./components/404";


const queryClient = new QueryClient();

export const meta: MetaFunction = () => {
  return { title: "Bookcombe Books" };
};


export function links() {
  return [{ rel: "stylesheet", href: tailwindStyles }];
}

export const loader: LoaderFunction = () => {
  return {
    ENV: {
      SERVICE_API_URL: process.env.SERVICE_API_URL,
      TENANT_IDENTIFIER: process.env.CRYSTALLIZE_TENANT_IDENTIFIER, // where is this being used?
      NODE_EXECUTION_MODE: process.env.NODE_EXECUTION_MODE,
    },
  };
};

export default function App() {
  const data = useLoaderData();

  if (typeof window !== "undefined") {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(
        function (registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        },
        function (err) {
          console.log('ServiceWorker registration failed: ', err);
        }
      );
    });
  }

  return (
    <html lang="en" className="bg-primary relative z-10">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/windows11/Square150x150Logo.scale-100.png" />
        <link rel="icon" type="image/png" href="/icons/windows11/Square150x150Logo.scale-100.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icons/windows11/Square150x150Logo.scale-100.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-startup-image" href="/images/icons/windows11/Square150x150Logo.scale-100.png" />
        <meta name="apple-mobile-web-app-title" content="Bookcombe Books" />
        <link rel="manifest" href="/manifest.json" />

        <Meta />
        <Links />

        <script suppressHydrationWarning={true} type="text/css">
          {
            '*,:after,:before{box-sizing:border-box;border:0 solid}:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{margin:0;line-height:inherit}h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}figure,h2,p{margin:0}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (max-width:1024px){#grid-item{grid-column:span 3!important}}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-.5rem}.-top-2{top:-.5rem}.z-10{z-index:10}.mx-auto{margin-left:auto;margin-right:auto}.mt-4{margin-top:1rem}.flex{display:flex}.h-80{height:20rem}.h-full{height:100%}.h-5{height:1.25rem}.w-full{width:100%}.w-60{width:15rem}.w-5{width:1.25rem}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.gap-5{gap:1.25rem}.gap-1{gap:.25rem}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:1000px}.rounded-r-xl{border-top-right-radius:.75rem;border-bottom-right-radius:.75rem}.bg-primary{--tw-bg-opacity:1;background-color:rgb(255 247 240/var(--tw-bg-opacity))}.bg-background1{--tw-bg-opacity:1;background-color:rgb(240 239 235/var(--tw-bg-opacity))}.bg-grey{background-color:#00000008}.bg-text{--tw-bg-opacity:1;background-color:rgb(55 53 103/var(--tw-bg-opacity))}.p-8{padding:2rem}.p-5{padding:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-20{padding-top:5rem;padding-bottom:5rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-primary{--tw-text-opacity:1;color:rgb(255 247 240/var(--tw-text-opacity))}'
          }
        </script>
        <script
          defer
          src="https://pim.crystallize.com/static/frontend-preview-listener.js"
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <BasketProvider locale={locale}>
            <Layout>
              <Outlet />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
                }}
              ></script>

              <ScrollRestoration />
              {data.ENV.NODE_EXECUTION_MODE === "development" && <LiveReload />}
            </Layout>
          </BasketProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <div className="remix-app lg:w-content w-full mx-auto p-8 sm:px-6">
      <header className="remix-app__header">
        <div className="container remix-app__header-content flex justify-between">
          <Link
            prefetch="intent"
            to="/"
            title="Remix"
            className="remix-app__header-home-link"
          >
            <Logo />
          </Link>
          <Link
            prefetch="intent"
            to="/cart"
            title="Your cart"
            className="remix-app__header-link"
          >
            <BasketButton />
          </Link>
        </div>
      </header>
      <div className="remix-app__main">
        <div className="container remix-app__main-content">{children}</div>
      </div>
      <footer className="remix-app__footer">
        <div className="container remix-app__footer-content mt-40">
          <Link
            prefetch="intent"
            to="/"
            title="Remix"
            className="remix-app__header-home-link"
          >
            <Logo />
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<g transform="translate(0.000000,90.000000) scale(0.018000,-0.018000)"
fill="#000000" stroke="none">
<path d="M240 2505 l0 -2255 2255 0 2255 0 0 2255 0 2255 -2255 0 -2255 0 0
-2255z m4460 0 l0 -2205 -2205 0 -2205 0 0 2205 0 2205 2205 0 2205 0 0 -2205z"/>
<path d="M2215 4290 c-178 -38 -311 -133 -351 -252 -24 -71 -23 -178 1 -248
27 -74 108 -156 195 -197 121 -57 184 -68 400 -68 219 0 280 11 406 71 157 74
237 227 204 390 -32 157 -158 260 -372 305 -127 26 -356 25 -483 -1z m504 -40
c206 -50 321 -168 321 -330 0 -134 -65 -233 -194 -294 -221 -106 -641 -93
-819 25 -97 64 -147 154 -147 263 0 196 150 320 430 356 102 14 313 3 409 -20z"/>
<path d="M2345 4045 c-46 -22 -63 -39 -81 -80 -30 -73 8 -149 91 -181 67 -25
201 -16 249 17 92 62 85 184 -14 236 -35 19 -58 23 -129 23 -52 -1 -98 -6
-116 -15z m199 -26 c54 -15 86 -52 86 -101 0 -81 -50 -113 -175 -113 -113 1
-165 36 -165 111 0 20 25 84 33 84 1 0 20 7 42 15 48 17 126 19 179 4z"/>
<path d="M3555 4295 c-267 -49 -404 -189 -393 -400 8 -138 77 -236 212 -301
114 -55 196 -69 401 -69 138 0 198 4 256 18 160 37 286 123 331 225 29 64 35
181 14 255 -41 140 -192 243 -406 277 -89 14 -330 11 -415 -5z m455 -39 c252
-54 376 -199 341 -399 -25 -143 -141 -238 -345 -284 -101 -22 -355 -22 -461 1
-153 33 -276 109 -318 198 -69 146 -23 320 108 403 69 44 180 82 281 94 99 12
308 5 394 -13z"/>
<path d="M3653 4040 c-111 -50 -111 -200 0 -250 57 -27 186 -27 242 -1 65 30
80 53 80 126 0 73 -15 96 -80 126 -56 26 -185 26 -242 -1z m199 -21 c21 -5 50
-21 65 -34 38 -32 40 -101 4 -138 -45 -49 -187 -60 -263 -21 -57 30 -71 119
-24 162 40 38 143 52 218 31z"/>
<path d="M580 3916 l0 -386 365 0 c201 0 409 5 462 11 199 22 316 82 342 174
21 78 -24 162 -110 200 l-39 18 40 34 c49 42 63 87 49 155 -14 65 -65 115
-150 148 l-64 24 -447 4 -448 3 0 -385z m915 329 c115 -30 173 -94 162 -177
-6 -47 -33 -79 -88 -103 -52 -24 -51 -47 4 -63 165 -45 198 -197 57 -269 -106
-53 -134 -56 -587 -61 l-423 -4 0 346 0 346 408 0 c335 0 418 -3 467 -15z"/>
<path d="M990 4045 l0 -45 146 0 c81 0 154 5 165 10 11 6 19 21 19 35 0 14 -8
29 -19 35 -11 5 -84 10 -165 10 l-146 0 0 -45z"/>
<path d="M990 3790 l0 -50 158 0 c168 0 202 8 202 50 0 42 -34 50 -202 50
l-158 0 0 -50z"/>
<path d="M2245 2873 c-186 -29 -324 -112 -382 -231 -25 -51 -28 -68 -28 -157
0 -89 3 -106 28 -156 49 -102 152 -174 307 -216 93 -25 388 -25 479 0 98 28
185 75 243 132 55 53 109 149 92 164 -5 4 -101 18 -214 30 -191 20 -206 20
-215 4 -32 -53 -98 -79 -172 -68 -82 12 -128 80 -102 153 14 42 51 63 119 69
69 7 124 -15 146 -59 14 -26 20 -29 47 -24 18 3 110 13 204 22 95 10 178 21
185 26 10 6 5 23 -20 72 -53 103 -131 163 -277 212 -72 24 -97 27 -245 29 -91
2 -178 1 -195 -2z m384 -48 c78 -19 173 -63 224 -105 39 -33 94 -116 83 -127
-3 -4 -84 -15 -178 -25 l-173 -19 -19 27 c-27 37 -74 54 -150 54 -119 0 -171
-44 -171 -147 0 -52 4 -66 25 -88 35 -39 80 -55 150 -55 72 0 119 18 146 55
l20 27 170 -18 c93 -9 173 -21 177 -25 14 -11 -20 -67 -69 -113 -47 -45 -125
-88 -202 -112 -85 -25 -250 -36 -363 -24 -254 28 -399 127 -428 292 -47 274
178 438 579 422 63 -2 144 -11 179 -19z"/>
<path d="M3488 2870 c-192 -33 -329 -118 -387 -240 -22 -47 -26 -69 -25 -145
0 -114 24 -173 98 -244 108 -101 231 -140 466 -148 306 -10 511 58 607 201 42
61 55 110 54 203 -1 191 -144 324 -396 368 -93 16 -333 19 -417 5z m460 -50
c198 -48 305 -151 319 -310 11 -113 -41 -219 -139 -285 -141 -95 -426 -128
-678 -79 -142 28 -251 97 -308 193 -24 42 -27 55 -27 146 0 84 3 107 22 142
61 112 201 188 393 212 111 14 320 5 418 -19z"/>
<path d="M3563 2611 c-72 -34 -102 -113 -68 -184 28 -59 74 -81 180 -85 79 -3
95 -1 134 20 61 31 83 64 83 123 0 52 -18 83 -66 119 -40 31 -203 35 -263 7z
m209 -21 c48 -14 88 -61 88 -105 0 -67 -72 -115 -173 -115 -56 0 -133 28 -151
55 -21 32 -21 97 2 124 35 44 150 64 234 41z"/>
<path d="M670 2485 l0 -385 220 0 220 0 0 88 c0 73 3 92 18 105 10 10 22 17
27 17 4 0 53 -47 109 -106 l101 -105 231 3 232 3 -200 213 c-159 169 -198 215
-189 226 6 7 97 83 201 167 l189 154 -230 3 -230 2 -123 -100 c-67 -55 -126
-100 -129 -100 -4 0 -7 45 -7 100 l0 100 -220 0 -220 0 0 -385z m412 226 l3
-120 145 120 145 119 172 0 c95 0 173 -2 173 -4 0 -2 -76 -66 -170 -142 -93
-76 -170 -142 -170 -147 0 -4 82 -95 181 -200 l182 -192 -184 -3 -184 -3 -107
112 -107 113 -38 -31 c-38 -30 -38 -31 -41 -112 l-3 -81 -189 0 -190 0 0 345
0 345 190 0 189 0 3 -119z"/>
<path d="M560 1055 l0 -385 225 0 224 0 3 106 3 107 89 -107 89 -106 82 0 82
0 89 106 89 107 3 -107 3 -106 224 0 225 0 0 385 0 385 -197 0 -198 -1 -155
-180 c-85 -99 -158 -183 -161 -185 -4 -2 -78 79 -165 181 l-159 185 -197 0
-198 0 0 -385z m542 157 c90 -103 167 -189 171 -190 5 -2 82 83 173 187 l165
191 169 0 170 0 0 -345 0 -345 -185 0 -185 0 0 141 0 140 -117 -140 -118 -140
-70 0 -70 0 -115 138 -115 137 -3 -138 -3 -138 -184 0 -185 0 0 345 0 345 169
0 170 0 163 -188z"/>
<path d="M2100 1054 l0 -386 428 5 c473 5 513 9 632 69 80 41 110 81 110 150
0 78 -37 131 -115 163 l-39 17 36 31 c47 41 58 65 58 123 0 67 -35 123 -99
157 -94 52 -148 57 -598 57 l-413 0 0 -386z m972 308 c55 -27 70 -40 87 -75
12 -24 21 -54 21 -68 0 -42 -35 -86 -88 -110 -60 -28 -60 -51 1 -68 98 -29
155 -92 142 -159 -10 -54 -32 -79 -99 -112 -104 -52 -191 -60 -623 -60 l-383
0 0 346 0 345 438 -3 437 -3 67 -33z"/>
<path d="M2510 1185 l0 -45 148 0 c132 0 151 2 165 18 22 24 21 35 -1 55 -16
14 -43 17 -165 17 l-147 0 0 -45z"/>
<path d="M2510 930 l0 -50 158 0 c126 0 162 3 180 16 27 19 28 38 2 64 -18 18
-33 20 -180 20 l-160 0 0 -50z"/>
<path d="M3370 1055 l0 -385 515 0 515 0 0 120 0 120 -290 0 c-250 0 -290 2
-290 15 0 13 41 15 288 17 l287 3 3 113 3 112 -291 0 c-251 0 -290 2 -290 15
0 13 39 15 290 15 l290 0 0 120 0 120 -515 0 -515 0 0 -385z m990 260 l0 -85
-290 0 -290 0 0 -50 0 -50 290 0 290 0 0 -75 0 -75 -290 0 -290 0 0 -50 0 -50
290 0 290 0 0 -85 0 -85 -475 0 -475 0 0 345 0 345 475 0 475 0 0 -85z"/>
</g>
    </svg>
  );
}

export function ErrorBoundary() {
  return (
    <html className="bg-primary">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body style={{ height: "100vh" }}>
        <Layout>
          <ErrorComponent />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <html className="bg-primary">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body style={{ height: "100vh" }}>
        <Layout>
          <ErrorComponent />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
