import React from 'react'

type ReactocatsProps = {
  imageLink: string
  image: string
  imageAlt: string
  number: string
  nameLink: string
  name: string
  creatorLink: string
  creatorImage: string
  creatorAlt: string
}

export function Reactocat(props: ReactocatsProps) {
  return (
    <article>
      <a href={props.imageLink}>
        <img src={props.image} width="315" height="315" alt={props.imageAlt} />
      </a>
      <ul>
        <li>
          #{props.number}:
          <a href={props.nameLink}>
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href={props.creatorLink}>
            <img
              src={props.creatorImage}
              width="24px"
              height="24px"
              alt={props.creatorAlt}
            />
          </a>
        </li>
      </ul>
    </article>
  )
}
