
import './Skill.css';
import {Link} from 'react-router-dom';
const Skill = () => {
    const description =
    "Lorem, ipsum dolorelit. Liberoexplicabo esse Lorem, ipsum dolorelit. ";
    const projects =  [
        {name:'calc',title:'Calculator',description:"This Calc App Show My Skills In HTML,CSS,JavaScript,React",img:'/calc.jpg',path:'/calc'},
        {name:'todo',title:'To Do List',description:"This To Do List App Show My Skills In HTML,CSS,JavaScript,React",img:'/todolist.jpg',path:'/todo'}
    ]
    // const [arr, setarr] = useState(projects);
    return (
        <main className="skills flex">
            <section className="right-section  grid">
            {projects.map((item) => {
              return (
                <div key={item.name} className="cards main-card-1">
                  <img src={item.img} alt="lp1.jpg" />
                  <div className="text">
                    <h1>{item.title}</h1>
                    <style></style>
                    <p>{item.description}</p>
                  </div>
                  <div className="card-icons  flex">
                    <div className="icons  flex">
                      <a href="" className="icon-link1"></a>
                      <a href="" className="icon-github"></a>
                    </div>

                    <div className="more flex">
                    <Link to={item.path}><a href={item.path} className=" more">more</a></Link>
                    <span className="icon-arrow-right2"></span>
                  </div>
                  </div>
                </div>
              );
            }
          )
            
          }
            </section>
         
        </main>
    );
};

export default Skill;
