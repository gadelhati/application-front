# _Application 2022_

## creation project
```
npm init vite@latest application-name --template react-ts
```

## file deletion
- [x] src/App.css
- [x] src/favicon.svg
- [x] src/index.css
- [x] src/logo.svg

## file creation
### src/assets/heraldica.ico
### src/assets/heraldica.svg
### src/assets/heraldica.png

### LICENCE
```
MIT License

Copyright (c) 2020 Jason Watmore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
## file changes
### index.html
```
...
<link rel="icon" type="image/svg+xml" href="/src/assets/heraldica.png" />
...
<title>Application Name</title>
...
```
### src/App.tsx
```
export default function App() {
  return <h1>Hello World</h1>
}
```

### src/main.tsx
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
```
### package.json
```
...
"description": "Description",
  "main": "index.jsx",
  "author": {
    "name": "GadelhaTI",
    "url": "http://www.gadelhat.eti.br",
    "github": "https://github.com/gadelhati",
    "twitter": "https://twitter.com/gadelhati"
  },
  "contributors": [
    {
      "name": "Instituto Hidrográfico",
      "url": "https://github.com/Instituto-Hidrografico"
    }
  ],
  "homepage": "http://10.5.192.35/observation/",
  "copyright": "Copyright 1822-2021",
  "license": "MIT",
  "private": false,
  "repository": {
    "type": "git",
    "url": "git@github.com:gadelhati/application-front.git"
  },
...
```
### src/AppRoutes.tsx
```
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Observation from "./components/Observation";
import Observator from "./components/Observator";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/observation" element={<Observation mimi="vixi" />}></Route>
                <Route path="/observator" element={<Observator />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
```

## installation of dependencies
```
npm install
npm install -g npm
npm install react-router-dom
npm install --save styled-components
npm install @stitches/react
npm install @radix-ui/react-*
npm install bootstrap
<!-- npm install --save react-dropzone -->
npm i --save-dev @types/node
```

## run project
```
npm run dev
```

# libraries
## visual, css in js
>[styled-components](https://styled-components.com/)

>[stitches](https://stitches.dev/)
## functional
>[radix ui](https://www.radix-ui.com/docs/primitives/overview/introduction)

# data fetching
>[react query](https://react-query.tanstack.com/)

>[graphql](https://graphql.org/)

>[uRQL](https://formidable.com/open-source/urql/)

# tests
>[testing-library](https://testing-library.com/docs/react-testing-library/intro/) : for unitary tests

>[cypress](https://www.cypress.io/)