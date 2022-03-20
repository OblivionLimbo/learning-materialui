import Button from '@mui/material/Button'
import Person from '@mui/icons-material/Person'

const App = () => {
  return <div>
    <Button variant='contained'
     size='large' 
     startIcon={<Person/>}
     sx={{
       backgroundColor: "lime",
     }}
     >Material UI</Button>
  </div>;
};

export default App;