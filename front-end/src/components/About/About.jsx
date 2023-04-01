import style from "./About.module.css";

const About = () =>{
    return(
        <div className={style.divAbout}>
                <div>
                    <h1>About the App:</h1>
                    <p> In this APP you will be able to looking for your favorite character from the Rick and Morty Series.</p>
                    <p> Doing click in your character name and you can access to additional information.</p>
                    <p> If you wish, you can select your favorite cards, this will be saved in the Favorites section.</p>
                    <p> You can also remove cards.</p>
                    <p> Hope you enjoy this intergalactic ride!!!</p>
                    <br/>
                    <h2>Creator:</h2>
                    <p> Nataly Revelo FT-36a (Henry Student).</p>
                    <br/>
                </div>
        </div>
    )
};

export default About;