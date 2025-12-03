import "../tienda.css"
import { Header } from "./Header"

export const Tienda = () => {
  return (
    <>
      <Header
        headerColor="bg-green"
        header2Color="bg-lightColor"
      />
      <div className="d-flex justify-content-end">
        <img className="img2 p-2 " width="60" src="./image.png" alt="" />
      </div>
      <div className="banner position-relative">
        <img className="img1 position-absolute p-2" width="190" src="./circulo.gif" alt="" />
        <img className="img2 position-absolute p-2" width="190" src="./circulo.gif" alt="" />
        <div className="ban position-relative p-4 h-100 d-flex justify-content-center">
          <img className="ban h-100" src="./banner.gif" alt="" />
        </div>
      </div>

      <div className="cuadro p-5 d-flex justify-content-center h-100" width="100">
        <img className="img3 position-absolute opacity-25" src="./cuadros.gif" alt="" />
        <div className="container">
          <p className="tex position-relative m-5 p-5 m">Bienvenido a la tienda de ECYDA, tu espacio digital para descubrir productos unicos, seleccionados con oasion y pensados para ti. Aqui,
            la calidad se encuentra con la comodidad de comprar desde donde estes. Explora, elige y deja que lo mejor llegue a tu puerta. </p>
        </div>
      </div>
      <section className="tarjetas container">
        <p className="algunos d-flex justify-content-center p-4 fw-bold">Algunos de nuestros productos</p>
        <div className="row">
          <div className="col ">
            <div className="card m-auto" style={{ width: "30rem", height: "16rem" }}>
              <img className="img4 m-auto" width="190" src="./mata.gif" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">Macetas</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card m-auto" style={{ width: "30rem", height: "16rem" }}>
              <img className="img4 m-auto" width="190" src="./porcelana1.gif" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">Porcelana</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="p-4">
        <div className="categoria container fw-bold  rounded-3">
          <p className="d-flex justify-content-center h-100 align-items-center text-white fs-5">CATEGORIAS</p>
        </div>
      </section>
      <section className="tarjeta container">
        <div className="row">
          <div className="col ">
            <div className="card m-auto bg-primary-subtle text-primary-emphasis" style={{ width: "39rem", height: "16rem" }}>
              <img className="img4 m-auto p-3" width="280" src="./133179.jpg" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">Macetas</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card m-auto bg-primary-subtle text-primary-emphasis" style={{ width: "39rem", height: "16rem" }}>
              <img className="img4 m-auto p-3" width="320" src="./porce.jpg" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">Porcelana</p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  )
}
