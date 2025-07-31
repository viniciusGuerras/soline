import CardButton from "../components/CardButton";

function Main() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-200 text-gray-900 px-4 py-12">
            <div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <h1 className="text-3xl font-bold mb-2">Meus aprendizados</h1>
                    <p className="text-gray-500 mb-6">Coisas que fui entendendo, praticando e resolvi registrar por aqui.</p>

                    <div className="flex flex-col gap-3">
                        <CardButton
                            title="Marketing"
                            description="O que aprendi sobre como atrair atenção e vender ideias"
                            navigateUrl="/marketing"
                        />
                        <CardButton
                            title="Educação financeira"
                            description="Minhas anotações sobre como lidar melhor com dinheiro no dia a dia"
                            navigateUrl="/wip"
                        />
                        <CardButton
                            title="Negócios"
                            description="Reflexões e aprendizados sobre como começar e manter um negócio"
                            navigateUrl="/wip"
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Main;
