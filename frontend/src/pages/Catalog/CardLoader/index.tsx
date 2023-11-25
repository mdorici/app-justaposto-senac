import ContentLoader from 'react-content-loader';

const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={320}
      height={460}
      viewBox="0 0 320 460"
      backgroundColor="#ecebeb"
      foregroundColor="#d6d2d2"
    >
      {/* Exemplo: Adicionando retângulos adicionais para simular conteúdo */}
      <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />

      {/* Adicione mais elementos SVG conforme necessário para simular conteúdo adicional */}
      <rect x="0" y="310" rx="2" ry="2" width="200" height="10" />
      <rect x="0" y="330" rx="2" ry="2" width="250" height="10" />
    </ContentLoader>
  </div>
);

export default CardLoader;
