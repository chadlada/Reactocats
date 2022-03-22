import React from 'react'
import { Reactocat } from './components/reactocats'

export function App() {
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
              <img src="/images/twitterblack.png" width="30" height="30" />
            </a>
            <a className="github" href="https://github.com/">
              Back to GitHub.com
            </a>
          </li>
        </ul>
      </header>

      <main>
        <section>
          <Reactocat
            imageLink="https://octodex.github.com//hulatocat/"
            image="https://octodex.github.com//images/hula_loop_octodex03.gif"
            imageAlt="hulatocat"
            number="137"
            nameLink="https://octodex.github.com//hulatocat/"
            name="Hula To Cat"
            creatorLink="https://github.com/chubbmo"
            creatorImage="https://github.com/chubbmo.png"
            creatorAlt="chubbmo"
          />

          {/* <article>
            <a href="https://octodex.github.com//hulatocat/">
              <img
                src="https://octodex.github.com//images/hula_loop_octodex03.gif"
                width="315"
                height="315"
                alt="hulatocat"
              />
            </a>
            <ul>
              <li>
                #137:
                <a href="https://octodex.github.com//hulatocat/">
                  <strong>Hula To Cat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/chubbmo">
                  <img
                    src="https://github.com/chubbmo.png"
                    width="24px"
                    height="24px"
                    alt="chubbmo"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//skitchtocat/">
              <img
                src="https://octodex.github.com//images/skitchtocat.png"
                width="315"
                height="315"
                alt="Terracottocat"
              />
            </a>
            <ul>
              <li>
                #90:
                <a href="https://octodex.github.com//skitchtocat/">
                  <strong>Terracottocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/chubbmo">
                  <img
                    src="https://github.com/chubbmo.png"
                    width="24px"
                    height="24px"
                    alt="chubbmo"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//heisencat/">
              <img
                src="https://octodex.github.com//images/heisencat.png"
                width="315"
                height="315"
                alt="Terracottocat"
              />
            </a>
            <ul>
              <li>
                #76:
                <a href="https://octodex.github.com//heisencat/">
                  <strong>Heisencat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/chubbmo">
                  <img
                    src="https://github.com/chubbmo.png"
                    width="24px"
                    height="24px"
                    alt="chubbmo"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//octocat-de-los-muertos/">
              <img
                src="https://octodex.github.com//images/octocat-de-los-muertos.jpg"
                width="315"
                height="315"
                alt="Terracottocat"
              />
            </a>
            <ul>
              <li>
                #55:
                <a href="https://octodex.github.com//octocat-de-los-muertos/">
                  <strong>Octocat De Los Muertos</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/chubbmo">
                  <img
                    src="https://github.com/chubbmo.png"
                    width="24px"
                    height="24px"
                    alt="chubbmo"
                  />
                </a>
              </li>
            </ul>
          </article>

          
          <article>
            <a href="https://octodex.github.com//dinotocat/">
              <img
                src="https://octodex.github.com//images/dinotocat.png"
                width="315"
                height="315"
                alt="Terracottocat"
              />
            </a>
            <ul>
              <li>
                #128:
                <a href="https://octodex.github.com//dinotocat/">
                  <strong>Dinotocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/chubbmo">
                  <img
                    src="https://github.com/chubbmo.png"
                    width="24px"
                    height="24px"
                    alt="chubbmo"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//octogatos/">
              <img
                src="https://octodex.github.com//images/Octogatos.png"
                width="315"
                height="315"
                alt="Octogatos"
              />
            </a>
            <ul>
              <li>
                #148:
                <a href="https://octodex.github.com//octogatos/">
                  <strong>Octogatos</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/cameronfoxly">
                  <img
                    src="https://github.com/cameronfoxly.png"
                    width="24px"
                    height="24px"
                    alt="cameronfoxly"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//sentrytocat/">
              <img
                src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                width="315"
                height="315"
                alt="Sentrytocat"
              />
            </a>
            <ul>
              <li>
                #143:
                <a href="https://octodex.github.com//sentrytocat/">
                  <strong>Sentrytocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/cameronmcefee">
                  <img
                    src="https://github.com/cameronmcefee.png"
                    width="24px"
                    height="24px"
                    alt="cameronfoxly"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//boxertocat/">
              <img
                src="https://octodex.github.com//images/boxertocat_octodex.jpg"
                width="315"
                height="315"
                alt="Boxertocat"
              />
            </a>
            <ul>
              <li>
                #141:
                <a href="https://octodex.github.com//boxertocat/">
                  <strong>Boxertocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/rubyjazzy">
                  <img
                    src="https://github.com/rubyjazzy.png"
                    width="24px"
                    height="24px"
                    alt="rubyjazzy"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//suftocat/">
              <img
                src="https://octodex.github.com//images/surftocat.png"
                width="315"
                height="315"
                alt="Surftocat"
              />
            </a>
            <ul>
              <li>
                #140:
                <a href="https://octodex.github.com//suftocat/">
                  <strong>Surftocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/jeejkang">
                  <img
                    src="https://github.com/jeejkang.png"
                    width="24px"
                    height="24px"
                    alt="jeejkang"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//scubatocat/">
              <img
                src="https://octodex.github.com//images/scubatocat.png"
                width="315"
                height="315"
                alt="Scubatocat"
              />
            </a>
            <ul>
              <li>
                #138:
                <a href="https://octodex.github.com//scubatocat/">
                  <strong>Scubatocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/cameronfoxly">
                  <img
                    src="https://github.com/cameronfoxly.png"
                    width="24px"
                    height="24px"
                    alt="cameronfoxly"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//dinotocat/">
              <img
                src="https://octodex.github.com//images/dinotocat.png"
                width="315"
                height="315"
                alt="Dinotocat"
              />
            </a>
            <ul>
              <li>
                #130:
                <a href="https://octodex.github.com//dinotocat/">
                  <strong>Dinotocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/kimestoesta">
                  <img
                    src="https://github.com/kimestoesta.png"
                    width="24px"
                    height="24px"
                    alt="kimestoesta"
                  />
                </a>
                <a href="https://github.com/heyhayhay">
                  <img
                    src="https://github.com/heyhayhay.png"
                    width="24px"
                    height="24px"
                    alt="heyhayhay"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <a href="https://octodex.github.com//spidertocat/">
              <img
                src="https://octodex.github.com//images/spidertocat.png"
                width="315"
                height="315"
                alt="Spidertocat"
              />
            </a>
            <ul>
              <li>
                #88:
                <a href="https://octodex.github.com//spidertocat/">
                  <strong>Spidertocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/jeejkang">
                  <img
                    src="https://github.com/jeejkang.png"
                    width="24px"
                    height="24px"
                    alt="jeejkang"
                  />
                </a>
              </li>
            </ul>
          </article> */}
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
