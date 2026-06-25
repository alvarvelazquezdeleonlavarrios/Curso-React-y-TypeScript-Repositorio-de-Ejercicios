import usePuntajeController from "../controladores/PuntajeController";

const ComponentePuntaje = () => {
    const puntajeController = usePuntajeController(controller => controller);

    return (
        <div className="w-80 m-auto flex justify-around py-12">
            <h2 className="text-2x1">Puntaje: {puntajeController.puntaje}</h2>
            <h2 className="text-2x1">Puntaje máximo: {puntajeController.puntajeMaximo}</h2>
        </div>
    );
}

export default ComponentePuntaje;