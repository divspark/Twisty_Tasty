import React, {useState} from 'react';
// import React, {useState, useEffect} from 'react';
// import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/mealsActions';

const SearchForm = () => {
  // const navigate = useNavigate();
  // const [searchTerm, setSearchTerm] = useState("");
  // const [errorMsg, setErrorMsg] = useState("");
  // const { dispatch, meals } = useMealContext();

  // const handleSearchTerm = (e) => {
  //   e.preventDefault();
  //   if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
  //     setSearchTerm(e.target.value);
  //     setErrorMsg("");
  //   } else {
  //     setErrorMsg("Invalid search term ...");
  //   }
  // }
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useMealContext(); // Removed `meals`

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if ((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0) {
      setSearchTerm(e.target.value);
    } else {
      // Removed error message handling since `errorMsg` is not being used
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
  }

  return (
    <form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}>
      <input type = "text" className='py-4 px-32 rounded-full text-2xl text-dark-gray mr-3' placeholder='Search recipes here ...' onChange={(e) => handleSearchTerm(e)} />
      <button type = "submit" className='form-submit-btn text-white text-uppercase flex items-center justify-center fs-14'>
        <BsSearch className='btn-icon' size = {20} />
      </button>
    </form>
  )
}

export default SearchForm