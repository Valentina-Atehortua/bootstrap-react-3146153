export const CuadroCard = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="mt-4 h-100 d-flex justify-content-between">
                        <p>METRIKA</p>
                        <img className="" src="./iconos.gif" alt="" />
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="row">
                            <div className="col-6 p-3 text-white">
                                <div className="bg-success bg-opacity-75  h-100 py-1">
                                    <img className="h-80" width="98" src="./libro.png" alt="" />
                                    <p>About Use</p>
                                </div>
                            </div>
                            <div className="col-6 p-3 text-white">
                                 <div className="bg-success d-flex flex-column align-items-center justify-content-center h-100 py-1">
                                    <img className="h-99" width="100" src="./mesa.png" alt="" />
                                    <p>Our Team</p>
                                 </div>
                            </div>
                            <div className="col-12 p-3  text-white">
                                <div className="bg-danger bg-gradient h-100 py-1">
                                     <img className="h-60" width="80" src="./flecha.webp" alt="" />
                                     <p>Resume</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
                        <div className="p-3 h-100 text-white"> 
                            <div className="bg-info h-100 py-5">
                                     <img className="h-99" width="150" src="./imagen.png" alt="" />
                                     <p>Our Works</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 mt-4 mt-lg-0">
                        <div className="row">
                            <div className="col-12 p-3">
                                <div className="bg-danger bg-opacity-75 text-white h-100 py-1">
                                     <img className="h-99" width="90" src="./contacto.png" alt="" />
                                     <p>Contacts</p>
                                </div>
                            </div>
                            <div className="col-6 p-3 text-white">
                                <div className="bg-warning h-100 py-1">
                                     <img className="h-99" width="90" src="./escri.png" alt="" />
                                     <p>Blog</p>
                                </div>
                            </div>
                            <div className="col-6 p-3 text-white">
                                 <div className="bg-warning bg-gradient bg-opacity-75 h-100 py-1">
                                    <img className="h-99" width="90" src="./correo.avif" alt="" />
                                    <p>Feedback</p>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
