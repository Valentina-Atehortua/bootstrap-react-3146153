export const CuadroCard = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row">

                    <div className="col">
                        <div className="row">
                            <div className="col-6 p-3 text-white bg-opacity-75">
                                <div className="bg-success h-100 py-4">Row column</div>
                            </div>
                            <div className="col-6 p-3 bg-success text-white">
                                 <div className="bg-success h-100 py-4">Row column</div>
                            </div>
                            <div className="col-12 p-3 mt-2 bg-danger bg-gradient text-white">Row column</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 bg-info  text-white">Row column</div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-12 p-3 bg-danger bg-opacity-75 text-white">Row column</div>
                            <div className="col-6 p-3 mt-2 bg-warning text-white">Row column</div>
                            <div className="col-6 p-3 mt-2 bg-warning bg-gradient bg-opacity-75 text-white">Row column</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
