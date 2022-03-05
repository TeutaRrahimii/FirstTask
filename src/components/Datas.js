import React from "react";
import EachData from "./EachData";
import { BsFillChatDotsFill, BsFillLightbulbFill, BsFillMegaphoneFill, BsAwardFill, BsFonts, BsGlobe } from "react-icons/bs";

 const Datas = (props) => {
    const datas = [
    { icon: <BsFillChatDotsFill />, 
        title: "The TLD", 
        description: "Does the domain extension math the language of the domain name?" },

    { icon: <BsFillChatDotsFill />, 
        title: "Domain Length", 
        description: "Is the domain short enough to remember?" },

    { icon: <BsGlobe />, 
        title: "Language", 
        description: "How complex is the actual domain name?" },    

    { icon: <BsAwardFill />, 
        title: "International recognition", 
        description: "Can the domain name be used on an international scale?" },

    { icon: <BsFillChatDotsFill />, 
        title: "Search engine", 
        description: "Does the domain follow search engine guidelines?" },

    { icon: <BsFillMegaphoneFill />, 
        title: "Advertising Potential", 
        description: "Could she domain be used for advertisting campaings?" },   

    { icon: <BsFillChatDotsFill />, 
        title: "Sales Opportunities", 
        description: "Can the domain name be used on an International scale?" },

    { icon: <BsFonts />, 
        title: "Typo susceptibilit",  
        description: "How high is the risk of mistyping the domain name?" },

     
    { icon: <BsFillLightbulbFill />, 
        title: "Bussines Potential",  
        description: "Can the domain be used as your company adress?" },   

];
  
  return(
   <section className="box">
       {datas.map(data => (
           <EachData icon={data.icon} title={data.title} description={data.description}/> 
       ))}
   </section>
 );
};
export default Datas;