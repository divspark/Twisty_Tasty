import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../App.scss";
import CategoryList from '../../components/Category/CategoryList';
import MealSingle from '../../components/Meal/MealSingle';
import { useMealContext } from '../../context/mealContext';
import { startFetchSingleMeal } from '../../actions/mealsActions';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';

const MealDetailsPage = () => {
  const { id } = useParams();
  const { categories, dispatch, meal, categoryLoading, mealLoading } = useMealContext();

  useEffect(() => {
    if (id) {
      startFetchSingleMeal(dispatch, id);
    }
  }, [id, dispatch]);

  let ingredientsArr = [];
  let measuresArr = [];
  let singleMeal = {};

  if (Array.isArray(meal) && meal.length > 0) {
    for (let prop of Object.keys(meal[0])) {
      if (prop.includes('strIngredient') && meal[0][prop]) {
        ingredientsArr.push(meal[0][prop]);
      }
      if (prop.includes('strMeasure') && meal[0][prop] && meal[0][prop].length > 1) {
        measuresArr.push(meal[0][prop]);
      }
    }

    singleMeal = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      instructions: meal[0]?.strInstructions,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      youtube: meal[0]?.strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr,
    };
  }

  return (
    <>
      <Header />
      <main className="main-content bg-whitesmoke">
        {mealLoading ? (
          <Loader />
        ) : (
          <MealSingle meal={singleMeal} />
        )}
        {categoryLoading ? (
          <Loader />
        ) : (
          <CategoryList categories={categories} />
        )}
      </main>
    </>
  );
};

export default MealDetailsPage;
