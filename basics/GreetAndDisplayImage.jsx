export default function GreetAndDisplayImage(props){
    return(
        <div>
            <h1>Hello, {props.name}!</h1>
            <h1>Have a great day</h1>
            <img src="./Images/img.jpg" alt="lighthouse" height="350px" width="250px"/>
        </div>
    )
}