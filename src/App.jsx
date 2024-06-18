import CourseList from "./components/CourseList"

const App = () => {

  return <>
     <CoursesContextProvider></CoursesContextProvider>
    <CoursesContextProvider>
      <CourseList />
    </CoursesContextProvider>
  </>
}

export default App