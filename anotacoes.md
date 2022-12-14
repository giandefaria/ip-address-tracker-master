Link estrutura https://www.youtube.com/watch?v=X2RKRKdqqwM
Crio dentro de SRC uma pasta de 'pages', para cada página
Crio uma pasta de 'components', que são os botoes ou todos os componentes que utilizarei mais de uma vez
Crio uma pasta 'assets', onde adicionarei os itens estáticos estruturais da página. Fazem parte da estrutura visual da página, como uma logo. 
Em services ficarão a API
Criação com TS https://www.youtube.com/watch?v=AW_rSUpDBRo  e  https://www.youtube.com/watch?v=zFAAZycE_To


*Para instalar a api do mapa, existe a documentaçao padrão, e também a necessidade de instalar react leaflet. 
https://react-leaflet.js.org/docs/start-installation/
https://leafletjs.com/examples/quick-start/
Link do youtube realizando na prática https://www.youtube.com/watch?v=CIz8aZiAE7M
Resumidamente, tive que executar os comandos npm constantes na página react leaflet. Após isso, tive que importar os módulos de 'react-leaflet', conforme pode ser visto no topo do arquivo main.tsx. Conforme mostrado no site, só é indicado a importação do MapContainer, TileLayer, e Usemap. Mas no código que o site recomenda adicionar, consta alguns módulos que não estão citados na documentação. Por isso, tive que adicionar a importação do modulo Marker e Popup, pois o código chama eles durante a execução. 