const Child = (props) => {
  return (
    <>
      <div className='m-5'>
        <h1 className='text-center font-bold'>Child Component</h1>
        <p className='mb-2 md:text-center'>
          El componente Child recibirá los datos del componente Parent a través de props.
        </p>
        <div className="md:text-center">
          <div className="underline">Resultado:</div>
          <p className='font-bold'>
            Nombre: <span className='font-normal'>{props.name}</span> {/* Mostrar el valor de la prop name */}
          </p>
          <p className='font-bold'>
            Profesión: <span className='font-normal'>{props.value}</span> {/* Mostrar el valor de la prop value */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Child;