import myImage from '../Static/assets/francoGuitar.JPG'

export function About(){
    const styles = {
        img: {
            height:'200px',
            width: '200px',
            borderRadius:'50%'   
        },
        span:{
            padding: '10px'
        },
        parentDiv:{
            display: 'flex',
            padding: '15px'
        }
    }
    return(
        <div style={styles.parentDiv}>
            <div>
                <img src={myImage} alt="Myself" style={styles.img} /> 
            </div>
            <div style={{margin: '5px'}}>
                <h2>
                    Franco Calvella - Autor
                </h2>
                <span className="about-span" style={styles.span}>
                My name is <b>Franco Calvella</b> I am 22 years old and I am from Buenos Aires, Argentina (Currently based in Madrid, Spain). I am a communication science student at UBA and passionate about technology. I have completed the <b>Python</b> course at <b>Coderhouse</b> in which I learned how to make web projects with <b>Django</b>. I was able to learn on my own <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>, deciding to delve into the last mentioned in UTN with <b>Angular</b>, <b>React</b> and <b>Node.js</b>. Later on I learnt <b>.NET</b> and <b>ASP.NET</b> with <b>C#</b> on my own, even so, I decided to enroll myself in the C# Course at Coderhouse to learn it in depth.
                <br />
                <br />
                I have created different projects of my own such as an e-market, a wiki about Star-Wars, a blog about Blockchain and a virtual magazine. I am trying to take my skills in these technologys to the next level by performing in real projects.               
                </span>
                </div>
        </div>
    )
}