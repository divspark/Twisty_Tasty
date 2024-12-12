import React from 'react';
import "./Meal.scss";
// import "../../App.scss";
import { Link } from 'react-router-dom';

const MealList = ({ meals }) => {
  //console.log(meals);
  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='sc-title'>Meals</div>
        <section className='sc-meal grid'>
          {
            meals?.map(mealItem => {
              const {idMeal:id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail } = mealItem;

              return (
                <Link to = {`/meal/${id}`} className = "meal-itm align-center justify-center no-underline" key = {id}>
                  <div className='meal-itm-img'>
                    <img src = {thumbnail} alt = {meal} />
                    <div className='meal-itm-cat bg-orange text-orange fw-6'>{category}</div>
                  </div>

                  <div className='meal-itm-body bg-orange-300 py-2'>
                    <div className='meal-itm-body-info flex flex-column no-underline'>
                      <div className='area fs-14 ls-1 fw-5 no-underline'>{area}</div>
                      <div className=' text-xl text-black no-underline'>{meal}</div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default MealList