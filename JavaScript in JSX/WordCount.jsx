export default function WordCount(){
    const paragraph = "In one of the most pivotal moments, Raskolnikov, after committing the murder, finds himself in an increasingly feverish state. His mind is a whirlwind of anxiety and paranoia as he struggles with the weight of his actions. This mental turmoil is intensified by his encounters with other characters, such as the sharp and suspicious detective Porfiry Petrovich, and the compassionate and understanding Sonia. Through these interactions, Dostoevsky masterfully delves into themes of guilt, morality, and redemption, making Raskolnikov's internal conflict all the more palpable."
    const wordCount =  paragraph.trim().split(/\s+/).length;
    return (
        <>
            <p>{paragraph}</p>
            <h2>Total number of words in this paragraph: {wordCount}</h2>
        </>
    );
}
