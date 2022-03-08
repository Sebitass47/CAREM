const Precios = ({ costo, pago_semanal, inicio, linkContado, linkMeses, linkSemanal }) => {
    return (
        <section className="precios">
            <h1>No pierdas la oportunidad</h1>
            <div className="modalidades-pago">

                <div className="modalidad">

                    <div className="nombre-modalidad">
                        <h3>De contado</h3>
                        <h4> <b>${costo}</b></h4>
                    </div>

                    <div className="desglose">
                        <p>
                            Inscripción: <b>$500</b>
                            <br />
                            Curso: <b>${costo}</b>
                            <br />
                            Descuento: <b>$500</b>
                        </p>
                    </div>

                    <a type="button" className='boton-whatsapp'
                    href={linkContado} target='_blank' rel="noreferrer">
                        Pidelo ya!
                    </a>

                </div>

                <div className="modalidad">
                    <div className="nombre-modalidad">
                        <h3>3, 6 o 9 MSI</h3>
                        <h4><b>${costo + 500}</b></h4>
                    </div>

                    <div className="desglose">
                        <p>
                            Inscripción: <b>$500</b>
                            <br />
                            Curso: <b>${costo}</b>
                        </p>
                    </div>

                    <a type="button" className='boton-whatsapp' 
                    href={linkMeses} target='_blank' rel="noreferrer">
                        Pidelo ya!
                    </a>

                </div>

                <div className="modalidad">
                    <div className="nombre-modalidad">
                        <h3>Pagos semanales</h3>
                        <h4><b>${pago_semanal * 20 + 500}</b></h4>
                    </div>
                    <div className="desglose">
                        <p>
                            Inscripción: <b>$500</b>
                            <br />
                            Pago semanal x 20 semanas: <b>${pago_semanal}</b>
                        </p>
                    </div>

                    <a type="button" className='boton-whatsapp'
                    href={linkSemanal} target='_blank' rel="noreferrer">
                        Pidelo ya!
                    </a>

                </div>
            </div>
            <h2>Iniciamos en {inicio} </h2>

        </section>
    )
}

export default Precios