import React, { useState } from 'react'
import '../components/Recipe.css'

function Recipe() {
  const [click, setClick] = useState(false);
  const [num, setnum] = useState(15);
  // const [count, setCount] = useState(0);
  const onCountChange = () => {
    if (!click) {
      setnum(num + 1)
      setClick(true);
    }
    else {
      setnum(num - 1)
      setClick(false);
    }
  }
  
  return (
    <div className='recipe'>
      <div className="container">
        <h1>Quick and Easy Pizza Crust</h1>
        <p className='recipe__subtitle'>This is a great recipe when you don't want to wait for the dough to rise. You just mix it and allow it to rest for 5 minutes and then it's ready to go!! It yields a soft, chewy crust. For a real treat, I recommend you use bread flour and bake it on a pizza stone, but all-purpose flour works well too. Enjoy!</p>
        <div className="recipe__image"></div>

        <div className="recipe__ingredients-details">
          <section className='recipe__ingredients'>
            <h2>Ingredients</h2>
            <label class="checkbox__container">
              1 teaspoon white sugar
              <input type="checkbox" />
              <span class="checkbox__checkmark"></span>
            </label>
            <label class="checkbox__container">
              1 (.25 ounce) package active dry yeast
              <input type="checkbox" />
              <span class="checkbox__checkmark"></span>
            </label>
          </section>

          <div className="recipe__details">
            <section>
              <p>Time</p>
              <p>Portion</p>
              <p>Difficulty</p>
            </section>
            <section className='recipe__detail'>
              <p>1 h 45 m</p>
              <p>8 persons</p>
              <p>Medium</p>
            </section>
          </div>
        </div>

        <div className="recipe__directions">
          <h2>Directions</h2>
          <section>
            <p className='recipe__direction-step'>Step 1</p>
            <p>Preheat oven to 450 degrees F (230 degrees C). In a medium bowl, dissolve yeast and sugar in warm water. Let stand until creamy, about 10 minutes.</p>
          </section>
          <section>
            <p className='recipe__direction-step'>Step 2</p>
            <p>Stir in flour, salt and oil. Beat until smooth. Let rest for 5 minutes.</p>
          </section>
        </div>

        <div className="recipe__likes">
          <p>Do you like this recipe?</p>
          <p className='recipe__likes-num'>{num}</p>
          <button className={`btn-like ${click ? 'btn-clicked' : null}`} onClick={onCountChange}>
            {click ?
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.3334 13.334H35.0001C35.8841 13.334 36.732 13.6852 37.3571 14.3103C37.9822 14.9354 38.3334 15.7833 38.3334 16.6673V20.174C38.3339 20.6096 38.2489 21.0411 38.0834 21.444L32.9251 33.969C32.7992 34.2744 32.5855 34.5354 32.311 34.7191C32.0366 34.9028 31.7137 35.0008 31.3834 35.0007H3.33341C2.89139 35.0007 2.46746 34.8251 2.1549 34.5125C1.84234 34.1999 1.66675 33.776 1.66675 33.334V16.6673C1.66675 16.2253 1.84234 15.8014 2.1549 15.4888C2.46746 15.1762 2.89139 15.0007 3.33341 15.0007H9.13675C9.40358 15.0007 9.66652 14.9367 9.90347 14.814C10.1404 14.6914 10.3445 14.5136 10.4984 14.2957L19.5867 1.41732C19.7016 1.25451 19.8711 1.13825 20.0643 1.08964C20.2576 1.04102 20.4618 1.06326 20.6401 1.15232L23.6634 2.66399C24.5143 3.08926 25.194 3.79284 25.5896 4.65785C25.9853 5.52285 26.0731 6.49719 25.8384 7.41899L24.3334 13.334ZM8.33341 18.334H5.00008V31.6673H8.33341V18.334Z" fill="#FF5B16"/>
              </svg>
               :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0h24v24H0z" /><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z" fill="rgba(255,91,22,1)" /></svg>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Recipe
