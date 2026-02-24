# SafeTuriSP

SafeTuriSP é um aplicativo Vue que exibe um mapa interativo de pontos turísticos e áreas de risco na cidade de São Paulo usando a API do ArcGIS.

Acesse agora: https://safeturisp.vercel.app/

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

* Node.js (versão 16 ou superior)
* npm ou yarn
* Vue CLI (opcional, se você estiver criando o projeto com Vue CLI)

## Instalação

1. Clone o repositório:

```
git clone https://seu-repositorio.git
cd nome-do-projeto
```

2. Instale as dependências:

```
npm install
# ou
yarn install
```

## Estrutura de arquivos

* `src/components/Map.vue` — componente principal do mapa
* `src/App.vue` — componente raiz do Vue
* `src/assets/pontos.json` — dados dos pontos turísticos (em inglês)
* `src/assets/areas_risco.json` — dados das áreas de risco (em inglês)

### Estrutura JSON dos pontos turísticos (`pontos.json`)

```json
[
  {"name": "MASP", "coords": [-46.646, -23.561], "description": "São Paulo Museum of Art, featuring European and Brazilian art."},
  {"name": "Ibirapuera Park", "coords": [-46.655, -23.587], "description": "Urban park with green areas, lakes, museums and outdoor leisure."},
  {"name": "Pinacoteca", "coords": [-46.634, -23.532], "description": "Art museum with historical Brazilian collections and temporary exhibitions."},
  {"name": "Sé Cathedral", "coords": [-46.633, -23.5505], "description": "Main cathedral of São Paulo, example of neo-gothic architecture."},
  {"name": "Republic Square", "coords": [-46.635, -23.548], "description": "Central square known for artisan fairs and cultural events."},
  {"name": "Football Museum", "coords": [-46.655, -23.545], "description": "Interactive museum at Pacaembu Stadium, celebrating Brazilian football history."},
  {"name": "Municipal Market", "coords": [-46.632, -23.541], "description": "Famous market for fresh produce, exotic fruits, and the traditional mortadella sandwich."},
  {"name": "Paulista Avenue", "coords": [-46.656, -23.561], "description": "Main avenue of the city, full of museums, cultural centers, and skyscrapers."},
  {"name": "Modern Art Museum (MAM)", "coords": [-46.654, -23.586], "description": "São Paulo Modern Art Museum with works by Brazilian and international artists."},
  {"name": "Liberdade", "coords": [-46.633, -23.557], "description": "Neighborhood with strong Japanese influence, oriental shops and cultural fairs."}
]
```

### Estrutura JSON das áreas de risco (`areas_risco.json`)

```json
{
  "areas_risco_sp": [
    {"regiao": "Downtown (Sé & República)", "tipo_risco": "Theft of cell phones and personal items", "poligono_simplificado": [[-46.6372, -23.5385], [-46.6260, -23.5480], [-46.6330, -23.5560], [-46.6450, -23.5430], [-46.6372, -23.5385]]},
    {"regiao": "South Zone (Capão Redondo / Campo Limpo)", "tipo_risco": "Robbery of vehicles and pedestrians", "poligono_simplificado": [[-46.7580, -23.6450], [-46.7450, -23.6600], [-46.7850, -23.6850], [-46.8000, -23.6750], [-46.7580, -23.6450]]},
    {"regiao": "West Zone (Pinheiros / Itaim Bibi)", "tipo_risco": "Theft of high-value cell phones and bank snatchings", "poligono_simplificado": [[-46.6850, -23.5550], [-46.6600, -23.5800], [-46.6750, -23.5950], [-46.7100, -23.5700], [-46.6850, -23.5550]]},
    {"regiao": "East Zone (São Mateus / Itaquera)", "tipo_risco": "General robberies and scattered criminal spots", "poligono_simplificado": [[-46.4700, -23.5250], [-46.4300, -23.5850], [-46.4850, -23.6150], [-46.5100, -23.5500], [-46.4700, -23.5250]]}
  ]
}
```

## Rodando o projeto

Para iniciar o servidor de desenvolvimento:

```
npm run serve
# ou
yarn serve
```

O aplicativo estará disponível em `http://localhost:8080`.

## Funcionalidades

* Mapa interativo com pontos turísticos.
* Áreas de risco destacadas com polígonos vermelhos.
* Busca de pontos e regiões.
* Widgets: legenda, lista de camadas e busca.
* Layout responsivo.

## Build para produção

```
npm run build
# ou
yarn build
```

Arquivos finais em `dist/` prontos para deploy.