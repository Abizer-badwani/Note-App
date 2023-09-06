import Notes from '../components/Notes'
import NoteForm from '../components/NoteForm'
import { LoadingState } from '../context/LoadingContext'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'

const Home = () => {
  const {loadingState, setLoadingState} = LoadingState()

  return (

    loadingState?
      <Loading />
      :
      <>
      <Navbar />
        <Notes />
        <NoteForm />
      </>

  )
}

export default Home