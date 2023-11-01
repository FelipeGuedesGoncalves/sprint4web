import './Planos.css'

export default function Planos(){

    return(
        <main>
            <h1 className="h1planos">Planos</h1>
            <section id="planos">
                <div className="plano plano1">
                    <h2 className="nomePlano">Pedal Essencial</h2>
                    <h3 className="preco">$2000 <span className="aoano">/a.a</span></h3>
                    <article className="artplanos">
                        <section className="recursos"><img className="checkbox" src="rightwhite.png" alt="presente" /><p className="cobertura basica">Cobertura básica contra roubo e furto.</p></section>
                        <section className="recursos"><img className="checkbox" src="wrongwhite.png" alt="ausente" /><p className="cobertura intermediario">Cobertura contra danos acidentais.</p></section>
                        <section className="recursos"><img className="checkbox" src="wrongwhite.png" alt="ausente" /><p className="cobertura Premium">Cobertura contra terceiros em caso de acidentes.</p></section>
                    </article>
                    <button className="adquirir">Adquirir</button>

                </div>
                <div className="plano plano2">
                    <h2 className="nomePlano">Pedal Leve</h2>
                    <h3 className="preco">$5000 <span className="aoano">/a.a</span></h3>
                    <article className="artplanos">
                        <section className="recursos"><img className="checkbox" src="rightwhite.png" alt="presente" /><p className="cobertura basica">Cobertura básica contra roubo e furto.</p></section>
                        <section className="recursos"><img className="checkbox" src="rightwhite.png" alt="presente" /><p className="cobertura intermediario">Cobertura contra danos acidentais.</p></section>
                        <section className="recursos"><img className="checkbox" src="wrongwhite.png" alt="ausente" /><p className="cobertura Premium">Cobertura contra terceiros em caso de acidentes.</p></section>
                    </article>
                    <button className="adquirir">Adquirir</button>

                </div>
                <div className="plano plano3">
                    <h2 className="nomePlano">Pedal Elite</h2>
                    <h3 className="preco">$10000 <span className="aoano">/a.a</span></h3>
                    <article className="artplanos">
                        <section className="recursos"><img className="checkbox" src="rightwhite.png" alt="presente" /><p className="cobertura basica">Cobertura básica contra roubo e furto.</p></section>
                        <section className="recursos"><img className="checkbox" src="rightwhite.png" alt="presente" /><p className="cobertura intermediario">Cobertura contra danos acidentais.</p></section>
                        <section className="recursos"><img className="checkbox" src="rightwhite.png" alt="presente" /><p className="cobertura Premium">Cobertura contra terceiros em caso de acidentes.</p></section>
                    </article>
                    <button className="adquirir">Adquirir</button>

                </div>
            </section>
        </main>
    )
}