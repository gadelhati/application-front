# _Application Front_

![github](https://img.shields.io/github/stars/gadelhati/application-front?style=social "Github")
![java](https://img.shields.io/badge/java-8-6495ED "Java")
![springboot](https://img.shields.io/badge/springboot-2.4.5-6495ED "Spring Boot")
![react](https://img.shields.io/badge/react-17.0.2-6495ED "React")

#### Necessary Tech stack:

<a href="https://www.w3.org/html/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="25" height="25"/>
</a>
<a href="https://www.w3schools.com/css/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="25" height="25"/>
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="25" height="25"/>
</a>
<a href="https://getbootstrap.com" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="25" height="25"/>
</a>
<a href="https://www.java.com" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="25" height="25"/>
</a>
<a href="https://www.postgresql.org" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="25" height="25"/>
</a>
<a href="https://spring.io/" target="_blank">
    <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="25" height="25"/>
</a>
<a href="https://git-scm.com/" target="_blank">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="25" height="25"/>
</a>

[comment]: <> (<a href="https://www.linux.org/" target="_blank">)
[comment]: <> (    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="25" height="25"/>)
[comment]: <> (</a>)
[comment]: <> (<a href="https://www.docker.com/" target="_blank">)
[comment]: <> (    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="25" height="25"/>)
[comment]: <> (</a>)

<a href="https://heroku.com" target="_blank">
    <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="25" height="25"/>
</a>
<a href="https://www.nginx.com" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="25" height="25"/>
</a>

[comment]: <> (<a href="https://www.jenkins.io" target="_blank">)
[comment]: <> (    <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="25" height="25"/>)
[comment]: <> (</a>)

<a href="https://nodejs.org" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="25" height="25"/>
</a>
<a href="https://reactjs.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="25" height="25"/>
</a>
<a href="https://materializecss.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="materialize" width="25" height="25"/>
</a>
<a href="https://redux.js.org" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="25" height="25"/>
</a>

## Description
The codes FM 12 - XI SYNOP and FM 13 - XI SHIP are preset number sequences
that encode observations made at a Surface Meteorological Station (SYNOP) or from
Stations on board ships (SHIP).
A inciativa de criar um
The initiative to create a program in which the code is typed instead of being filled out on paper. Automating the exchange and its consequent inclusion in historical database.

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
## Roadmap
- [ ] counter only increases by 1
- [ ] add global css
- [ ] consume service that provide sidebar access
- [ ] use pageable retrieve
- [ ] stitches: float label
- [ ] stitches: modal
- [ ] stitches: datatable
- [ ] user: alter active/inactive
- [ ] sidebar: personal icons
- [ ] sidebar: minimized exclude title
- [ ] sidebar: minimized show figure
- [ ] sidebar: minimized show tooltip by tag
- [ ] header: sandwich to restore body
- [ ] login: assume visual id

## how to create this project
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

### Necessary Tech stack
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
npm install --save-dev @types/node
npm install surge --legacy-peer-deps
npm install caniuse-lite --legacy-peer-deps
npm install coreui/react@3.4.1 --force
```

## how to run project
```
npm run dev
```
## how to build project
```
npm run build
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

## Reference API download link

> [https://github.com/gadelhati/application-back](https://github.com/gadelhati/application-back)

## Reference API, running locally

> [http://localhost:3128/](http://localhost:3128)

## Developer

> [Gadelha TI](https://github.com/gadelhati)

## License

> [MIT License](https://choosealicense.com/licenses/mit/)

```
//ADD PROXY
git config --global http.proxy http://username:password@proxy-armacao.mb:6060
//REMOVE PROXY
git config --global --unset http.proxy

//REPEAT THIS TWO COMMAND EVERY COMMIT, IF THERE ARE TROUBLE
git config --global gpg.program "C:\Users\<User_Name>\AppData\Local\GnuPG\bin\gpg.exe"
gpg --list-secret-keys --keyid-format=long

gpg --armor --export <xxxxxxxxxxxxxxxx>
git config --global user.signingkey <xxxxxxxxxxxxxxxx>


git config --global user.name "GadelhaTI"
git config --global user.email "gadelha.ti@gmail.com"

git remote add origin <>
git add archive.txt
git add .
git commit –m "comment commit"
git pull
git tag 1.1.0 <insert-commitID-here>
git push -u origin master
git diff
```

## Deploy
```
npx browserslist@latest --update-db
set -e
npm run build
npm run preview
service nginx stop
rm -rf /usr/share/nginx/html/<old-name>
cp /home/<user>/<application-name>.zip /usr/share/nginx/html/
unzip /usr/share/nginx/html/<application-name>.zip
chown nginx:nginx /usr/share/nginx/html/<application-name>
rm /usr/share/nginx/html/<application-name>.zip
service nginx start
```

## deploy in surge
```
surge
 >project: <path to /dist directory>
```

### Edit /etc/nginx/conf.d/default.conf

Add the new code
```
location /<folder> {
    root    /usr/share/nginx/html;
    index   index.html  index.htm;
}
```