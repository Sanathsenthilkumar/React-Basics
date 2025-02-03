export default function Quote(){
    const quotes = ["A rose by any other name would smell as sweet.", 
        "All that glitters is not gold.", 
        "All the world’s a stage, and all the men and women merely players.", 
        "Ask not what your country can do for you; ask what you can do for your country.", 
        "Ask, and it shall be given you; seek, and you shall find."];
    const index = Math.floor(Math.random() * quotes.length);
    const quote = quotes[index];
    return <h1>{quote}</h1>;
}