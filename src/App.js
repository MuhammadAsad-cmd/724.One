import ArraySample from './Components/Array/ArraySample';
import AddUser from './Components/Crud/AddUser';
import UserList from './Components/Crud/UserList';
import CrudTable from './Components/CrudTable/CrudTable';
import ButtonBtn from './Components/CustomButton/ButtonBtn';
import MultiStepFormMain from './Components/MultiStepForm/MultiStepFormMain';

function App() {
  return (
    <>
    <div className='flex p-10 gap-16'>
      <div className='w-full max-w-[400px]'>
      <h1 className='text-3xl font-semibold'>Add Users</h1>
       <AddUser />
      </div>
      <UserList />
      </div>

      <ButtonBtn/>
      <ArraySample/>
      <CrudTable/>
      <MultiStepFormMain/>
    </>
  );
}

export default App;
