import "../tienda.css"
import { Header } from "./Header"

export const Tienda = () => {
  return (
    <>
      <Header
        headerColor="bg-green"
        header2Color="bg-lightColor"
      />

      <div className="banner position-relative">
        <img className="img1 position-absolute p-2" width="190" src="./circulo.gif" alt="" />
        <img className="img2 position-absolute p-2" width="190" src="./circulo.gif" alt="" />
        <div className="ban position-relative p-4 h-100 d-flex justify-content-center">
          <img className="ban h-100" src="./banner.gif" alt="" />
        </div>
      </div>

      <div className="cuadro p-5 d-flex justify-content-center h-100" width="100">
        <img className="img3 position-absolute" src="./cuadros.gif" alt="" />
        <p className="tex position-relative">Bienvenido a la tienda de ECYDA, tu espacio digital para descubrir productos unicos, seleccionados con oasion y pensados para ti. Aqui, 
        la calidad se encuentra con la comodidad de comprar desde donde estes. Explora, elige y deja que lo mejor llegue a tu puerta. </p>
      </div>


    </>
  )
}
