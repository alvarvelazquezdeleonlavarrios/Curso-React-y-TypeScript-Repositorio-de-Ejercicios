import imagen from '../assets/loading.png';

const ImagenCargando = () => 
    <>
        <img src={imagen} className='animate-pulse rounded-full w-20 h-20 mt-5' /><h4 className='text-white my-5'>Cargando...</h4>
    </>

export default ImagenCargando;
