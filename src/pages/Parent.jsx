import Child from '../pages/Child.jsx'; // Importar el componente Child

const Parent = () => {
  return (
    <>
      <div className='m-5'>
        <h1 className='text-center font-bold'>Parent Component</h1>
        <p className='md:text-center'>
          El componente Parent será el componente principal que pasará
          datos al componente Child a través de props.
        </p>
      </div>
      <Child name='Joanny Werner' value='Universitario en Informática' /> {/* Renderizar el componente Child, pasando las props name y value */}
    </>
  );
};

export default Parent;