import React from "react"



const Double = (props)=>{
    return (
      
      <div className='features'>
    
      <article className="card">
      <div className='cds'>
    <img
      className="card__background"
      src={props.imgsrc}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
   </div>
    <div className="card__content | flow">
      <div className="card__content--container | flow">
        <h2 className="card__title">{props.tittle}</h2>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
       
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
      
      </div> )}
      export default Double;