import ContentCard from "../components/ContentCard";

function Marketing() {
    return (
        <div className="text-black bg-gray-100 w-full min-h-screen px-4 py-12">
            <div className="max-w-4xl mx-auto flex flex-col gap-3">
                <h1 className="text-3xl font-bold mb-2">Marketing</h1>
                <p className="text-justify">
                    Por muito tempo tentei vender meus produtos sem a mínima noção de como o mercado funcionava.
                    Foi caindo e levantando que percebi que marketing não é só sobre vender, é sobre entender pessoas.
                    Cada erro virou aprendizado, cada tentativa me aproximou mais do meu público.
                    Hoje, compartilho o que aprendi para que outros também encontrem seu caminho e façam sua voz ser ouvida.
                </p>
                <div className="flex flex-col gap-1">
                    <ContentCard title="Marketing Natural e Pago" />
                    <ContentCard title="Funil de Vendas" />
                    <ContentCard title="Persona e Público-alvo" />
                    <ContentCard title="Proposta de Valor" />
                    <ContentCard title="Copywriting" />
                    <ContentCard title="Redes Sociais" />
                    <ContentCard title="SEO (Otimização para buscadores)" />
                    <ContentCard title="E-mail Marketing" />
                    <ContentCard title="Análise de Métricas" />
                    <ContentCard title="Marketing de Conteúdo" />
                    <ContentCard title="Prova Social e Gatilhos Mentais" />
                    <ContentCard title="Jornada do Cliente" />


                </div>

            </div>
        </div>
    );
}
export default Marketing;