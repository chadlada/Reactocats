import React from 'react'
import { Reactocat } from './components/reactocats'
import reactocatsjson from './reactocats.json'
// import './index.scss'

export function App() {
  const reactocatsFromData = reactocatsjson.map((reactocat) => (
    <Reactocat
      key={reactocat.number}
      number={reactocat.number}
      link={reactocat.link}
      name={reactocat.name}
      image={reactocat.image}
      // authors={reactocat.link}
      authorimage={reactocat.authors[0].image}
      authorlink={reactocat.authors[0].link}
    />
  ))

  return (
    <body>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a className="octo" href="#">
                Octodex
              </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>

        <ul>
          <li className="twitgit">
            <a href="https://twitter.com/githubdesign">
              <img
                src="https://www.iconsdb.com/icons/preview/black/twitter-xxl.png"
                width="30"
                height="30"
              />
            </a>
            <a className="github" href="https://github.com/">
              Back to GitHub.com
            </a>
          </li>
        </ul>
      </header>

      <main>
        <section>
          <div className="octodiv">{reactocatsFromData}</div>
        </section>
      </main>
      <footer>
        <div>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
    </body>
  )
}

export default App
