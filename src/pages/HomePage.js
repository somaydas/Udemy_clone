import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Uploaded_courses from '../components/Uploaded_courses';

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
      <CategoriesList />

      { /*eslint-disable-next-line*/}
      <Uploaded_courses />
    </div>
  )
}

export default HomePage