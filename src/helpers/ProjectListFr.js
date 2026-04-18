import attiny from "../assets/Projects/attiny2.jpg";
import ececup from "../assets/Projects/ececup.jpg";
import city from "../assets/Projects/city.svg";
import finance from "../assets/Projects/finance.svg";
import stocks from "../assets/Projects/decrease.png"; 
import fonciere from "../assets/Projects/growth.png";

export const ProjectListFr= {
  dataProjects: [

    {
      name: "Analyse des Valeurs Foncières",
      image: fonciere,
      skills: "Python (Pandas, Matplotlib, folium, scikit-learn)",
      description: "J'ai développé une solution d'analyse des données foncières pour les investisseurs immobiliers. Le projet inclut le nettoyage, la transformation et la visualisation des données. Des visualisations interactives ont été créées pour explorer les tendances des prix et les zones d'investissement à fort potentiel. Le système est entièrement fonctionnel pour fournir des recommandations d'investissement."
    },
    
    {
  name: "Analyse de Marché Boursier",
  image: stocks,
  skills: "Python (Pandas, Spark, Matplotlib, Scikit-learn, NLTK, Tensorflow)",
  description: "Ce projet personnel est une application Python entièrement fonctionnelle permettant d’analyser plus de 100 actifs financiers, en se concentrant principalement sur les actions technologiques du Nasdaq. L’application calcule et agrège de nombreux indicateurs financiers, tels que les statistiques descriptives, les rendements quotidiens et les moyennes mobiles. Des techniques de prévision de séries temporelles ont été utilisées pour étudier l’évolution future des prix, tandis que des simulations de Monte-Carlo ont permis de modéliser l’évolution de portefeuilles. Un agent d’apprentissage par renforcement a été entraîné afin d’identifier des stratégies d’investissement optimales. En complément, une analyse des sentiments basée sur le NLP a été intégrée pour évaluer les actualités financières et le ressenti des investisseurs, enrichissant ainsi le processus de décision avec des données quantitatives et qualitatives."
  }


  ],

   
ResearchProjects: [
  {
    name: "Crypto: Inflation Hedge?",
    image: finance,
    skills: "Python, Data Analysis, Macroeconomic Modeling",
    description: "Ce projet de recherche explore la possibilité que l’adoption des cryptomonnaies puisse agir comme un moyen de couverture contre l’inflation. En utilisant un modèle macroéconomique fermé, nous avons intégré la coexistence de la monnaie fiduciaire et de la cryptomonnaie pour évaluer leurs effets respectifs sur l’inflation. En nous appuyant sur un cadre théorique de type IS-LM, nous avons analysé les impacts de l’adoption partielle de cryptomonnaies, en prenant en compte des variables économiques telles que l’inflation, le PIB, le chômage et les taux d’intérêt. Plusieurs modèles macroéconomiques ont été explorés pour comprendre l’impact de la cryptomonnaie sur les dynamiques économiques, en testant des hypothèses et en réalisant des simulations sur la base de différents scénarios d’adoption. Les résultats ont montré que l’introduction de la cryptomonnaie, sous certaines conditions d’adoption et de stabilité, pourrait jouer un rôle stabilisateur dans une économie, en limitant l’inflation sans freiner la croissance économique."
  },
],


  

  cProjects: [

    {
      name: "Sim City",
      image: city,
      skills: "Langage C, Théorie des graphes, Allegro",
      description: "Dans le projet SimCity, j'ai utilisé des algorithmes de théorie des graphes (DFS, Dijkstra, Ford-Fulkerson) pour optimiser la gestion de la ville. J'ai conçu des systèmes pour déterminer la proximité des bâtiments, gérer le trafic, et améliorer les infrastructures. L'intégration de la bibliothèque Allegro a permis de créer un environnement urbain interactif et visuellement attrayant."
    },
  
  ],

  arduinoProjects: [

    {
      name: "Robot Autonome",
      image: ececup,
      description: "En tant que chef d'une équipe de 4 personnes, j'ai dirigé le développement d'un robot autonome utilisant le kit Adeept PiCar-B avec Raspberry Pi. Le projet incluait des fonctionnalités avancées telles que la reconnaissance vocale, la détection d'objets via OpenCV, l'évitement d'obstacles et le suivi de ligne. Nous avons utilisé Python pour développer une architecture logicielle modulaire et avons mis en place une communication client-serveur pour un contrôle à distance sécurisé, en surmontant des défis techniques liés à l'intégration matérielle et logicielle."
    },
    
    {
      name: "Manette de Jeu",
      image: attiny,
      skills: "Arduino",
      description: "J'ai développé une mini-console de jeu avec un ATtiny85, un menu navigable, stockage EEPROM pour les scores et un buzzer pour les sons 8 bits. Le projet utilise Flash, SRAM et EEPROM pour gérer la mémoire et intègre une IMU via I2C pour les données 3D. La conception inclut un boîtier en CAO. Des améliorations futures incluraient des ajustements de gameplay et de conception."
    }
    

],
  

};



