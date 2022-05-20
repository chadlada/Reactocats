import React from 'react'

type ReactocatsProps = {
  number: number
  name: string
  image: string
  link: string

  authorlink: string
  authorimage: string
}

// This is the COMPONENT
export function Reactocat(props: ReactocatsProps) {
  return (
    <article>
      <a href={props.link}>
        <img
          src={props.image}
          width="315"
          height="315"
          // alt={props.imageAlt}
        />
      </a>
      <ul>
        <li>
          #{props.number}:
          <a href={props.link}>
            <strong>{props.name}</strong>
          </a>
        </li>

        <li>
          <a href={props.link}>
            <img src={props.image} width="24px" height="24px" alt="chubbmo" />
          </a>
        </li>
      </ul>
    </article>
  )
}
