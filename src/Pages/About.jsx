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
                    Me llamo <b>Franco Calvella</b>. Tengo 22 años y soy de Temperley, Buenos Aires. Soy estudiante de comunicación en UBA y un apasionado por la tecnología. He completado el curso de <b>Python</b> en <b>Coderhouse</b> en el que aprendí a hacer proyectos web con <b>Django</b>. Pude aprender por mi cuenta <b>HTML</b>, <b>CSS</b> y <b>JavaScript</b>, decidiendo profundizar este último en <b>UTN</b> con <b>Angular</b>, <b>React</b> y <b>Node.js</b>. Actualmente también me encuentro aprendiendo  <b>Analsis de Datos</b> en <b>Coderhouse</b> además de <b>C#</b> y <b>.NET</b> por mi cuenta. Deseo seguir formándome en estos lenguajes de programación y descubrir hasta donde puedo llegar. 
                </span>
                <br />
                <br />
                <br />
                <span className="about-span" style={styles.span}>
                My name is <b>Franco Calvella</b>. I am 22 years old and I am from Temperley, Buenos Aires. I am a communication student at UBA and passionate about technology. I have completed the <b>Python</b> course at <b>Coderhouse</b> in which I learned how to make web projects with <b>Django</b>. I was able to learn on my own <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>, deciding to delve into the last mentioned in <b>UTN</b> with <b>Angular</b>, <b>React</b> and <b>Node.js</b>. I am currently learning <b>Data Analysis</b> at <b>Coderhouse</b> as well as <b>C#</b> and <b>.NET</b> on my own. I want to continue training in these programming languages and discover how far I can go.</span>
                </div>
        </div>
    )
}