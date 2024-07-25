import React from 'react'

type ProjectProps = {
    title: string;
    bullets: string[];
    image: string;
    links: {
        name: string;
        url: string;
    }[];
    technologies: string[];
    }

const Project = ({title, bullets, image, links, technologies}: ProjectProps) => {
  return (
    <div className="flex flex-col items-center justify-center m-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <img src={image} alt={title} className="border rounded-sm border-blue-500 hover:border-red-50" />
      <ul>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <div>
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noreferrer">
            {link.name}
          </a>
        ))}
      </div>
      <div>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  )
}

export default Project