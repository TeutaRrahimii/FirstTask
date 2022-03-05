import React from "react";
import Card from "./Card";

const DATA = [
    {
        id: "12.2.4..3",
        background: "New",
        image: "",
        name: 'Kevin Joe',
        description: " File system changed from doken to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements share permisions re-deign and opimized",
        button: "Subscribe",
    },
    {
        id: "12.2.4..3",
        background: "Fix",
        image: "",
        name: 'Kevin Joe',
        description: " File system changed from doken to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements share permisions re-deign and opimized",
        button: "Subscribe",
    },
    {
        id: "12.2.4..3",
        background: "important",
        image: "",
        name: 'Kevin Joe',
        description: " File system changed from doken to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements share permisions re-deign and opimized",
        button: "Subscribe",
    },{
        id: "12.2.4..3",
        background: "New",
        image: "",
        name: 'Kevin Joe',
        description: " File system changed from doken to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements share permisions re-deign and opimized",
        button: "Subscribe",
    },{
        id: "12.2.4..3",
        background: "Fix",
        image: "",
        name: 'Kevin Joe',
        description: " File system changed from doken to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements share permisions re-deign and opimized",
        button: "Subscribe",
    },{
        id: "12.2.4..3",
        background: "Important",
        image: "",
        name: 'Kevin Joe',
        description: " File system changed from doken to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements share permisions re-deign and opimized",
        button: "Subscribe",
    },
    {
        id: "12.2.4..3",
        background: "New",
        image: "",
        name: 'Kevin Joe',
        description: " File system changed from doken to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements share permisions re-deign and opimized",
        button: "Subscribe",
    },{
        id: "12.2.4..3",
        background: "Fix",
        image: "",
        name: 'Kevin Joe',
        description: " File system changed from doken to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements share permisions re-deign and opimized",
        button: "Subscribe",
    },{
        id: "12.2.4..3",
        background: "Important",
        image: "",
        name: 'Kevin Joe',
        description: " File system changed from doken to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements share permisions re-deign and opimized",
        button: "Subscribe",
    },
];


function AllCardsPage() {
    return(
        <section className='cardBox'>
            {DATA.map((card) => (
                <Card id={card.id} background={card.background} 
                image={card.image} name={card.name} 
                description={card.description} button={card.button}/>
               
               ))}
        </section>
    )
}
 export default AllCardsPage;