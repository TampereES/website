import React from "react"

function Project(props) {
  return (
    <div
      href={props.link}
      rel="noreferrer"
      target="_blank"
      className="bg-gray-300 text-dark-blue rounded-lg shadow px-15 p-10 cursor-pointer"
      onClick={props.onClick}
    >
      <h3 className="font-bold h3 mb-10">{props.title}</h3>
      <p className="lead text-9xl">{props.description}</p>
    </div>
  )
}

export default Project
