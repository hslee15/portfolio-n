import React from 'react'
import "./styles/Work.scss"
import work from '../../utils/work'

const Work = () => {
  const id=work.id
  const title=work.title
  const subtitle=work.subtitle
  const description=work.description

  return (
        <section className="works">
      <div className="inner">
        <h2 className="sec-tit">WORKS.</h2>
        <ul className="lst">
          {items.map((it) => (
            <li key={it.id}>
              <a className="t-wrap" href={it.link || '#'} target="_blank" rel="noreferrer">
                <h4 className="list-lst">{it.title}</h4>
                <p className="txt">{it.subtitle}</p>
                <div className="hash-wrap">
                  {(it.tags || []).map((tg) => (
                    <span className="hash" key={tg}>#{tg}</span>
                  ))}
                </div>
              </a>
              <a className="img-wrap" href={it.link || '#'} target="_blank" rel="noreferrer">
                <img src={it.img} alt={it.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Work