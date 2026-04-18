import attiny from "../assets/Projects/attiny2.jpg";
import ececup from "../assets/Projects/ececup.jpg";
import city from "../assets/Projects/city.svg";
import finance from "../assets/Projects/finance.svg";
import stocks from "../assets/Projects/decrease.png"; 
import fonciere from "../assets/Projects/growth.png";




export const ProjectListEng = {
  dataProjects: [

    {
      name: "Real Estate Investment Analysis",
      image: fonciere,
      skills: "Python (Pandas, Matplotlib, folium, scikit-learn)",
      description: "I developed a real estate investment analysis solution by analyzing land data for investors. The project involved cleaning, transforming, and visualizing the data. Interactive visualizations were created to explore price trends and high-potential investment areas. The system is fully functional to provide investment recommendations."
    },
    
      {
      name: "Stock Market Analysis",
      image: stocks,
      skills: "Python (Pandas, Spark, Matplotlib, Scikit-learn, NLTK, Tensorflow)",
      description: "This personal project consists of a fully functional Python application designed to analyze over 100 financial assets, primarily focusing on tech stocks from the Nasdaq. The application performs advanced financial calculations and aggregates multiple indicators, including descriptive statistics, daily returns, and moving averages. Time series forecasting techniques were used to study future price trends, while Monte Carlo simulations helped model portfolio evolution. A reinforcement learning agent was trained to identify optimal investment strategies. Additionally, sentiment analysis was conducted using NLP to assess market news and investor sentiment, enriching the decision-making process with both quantitative and qualitative insights."
      }
    

  
  ],
 
 
ResearchProjects: [
  {
    name: "Crypto: Inflation Hedge?",
    image: finance,
    skills: "Python, Data Analysis, Macroeconomic Modeling",
    description: "This research project explores whether the adoption of cryptocurrencies can act as a hedge against inflation. Using a closed macroeconomic model, we integrated the coexistence of fiat currency and cryptocurrency to assess their respective effects on inflation. Relying on an IS-LM framework, we analyzed the impact of partial cryptocurrency adoption on economic variables such as inflation, GDP, unemployment, and interest rates. Several macroeconomic models were explored to understand the impact of cryptocurrencies on economic dynamics, testing hypotheses and conducting simulations based on different adoption scenarios. The results indicated that the introduction of cryptocurrency, under certain conditions of adoption and stability, could play a stabilizing role in the economy by limiting inflation without hindering economic growth."
  },
],



cProjects: [

  {
    name: "Sim City",
    image: city,
    skills: "C Language, Graph Theory, Allegro",
    description: "In the SimCity project, I used graph theory algorithms (DFS, Dijkstra, Ford-Fulkerson) to optimize city management. I designed systems to determine building proximity, manage traffic, and improve infrastructure. The integration of the Allegro library allowed for creating an interactive and visually appealing urban environment."
  },
  

],

arduinoProjects: [

  {
    name: "Autonomous Robot",
    image: ececup,
    description: "As the leader of a team of 4 people, I oversaw the development of an autonomous robot using the Adeept PiCar-B kit with Raspberry Pi. The project included advanced features such as voice recognition, object detection via OpenCV, obstacle avoidance, and line following. We used Python to develop a modular software architecture and implemented a client-server communication system for secure remote control, overcoming technical challenges related to hardware and software integration."
  },
  
  {
    name: "Game Controller",
    image: attiny,
    skills: "Arduino",
    description: "I developed a mini gaming console with an ATtiny85, featuring a navigable menu, EEPROM storage for scores, and a buzzer for 8-bit sounds. The project utilizes Flash, SRAM, and EEPROM for memory management and integrates an IMU via I2C for 3D data. The design includes a CAD-modeled enclosure. Future improvements could involve gameplay refinements and design adjustments."
  }
  

],

}
