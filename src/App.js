
import './App.css';

function Personaldata() {

  return (
    <div className='AppInfo'>
      <div className='topinfo'>
        <h3>TAMA</h3>
       
        <p>Contact &emsp;&emsp;&emsp; About&emsp;&emsp;&emsp;Work</p>
      </div>
      <div className='containinfo'>
        <img src="myimage.jpg" alt="Description" />
        <h1>Hi!! Nice to meet you. I am   <em>Tama Shil</em></h1>
        
        <p>
          I am a student of <a href='https://juniv.edu/'>Jahangirnagar University</a> 3rd year 2nd semester.
          
        </p>
        <p>I am from Khulna and currently living in Dhaka. beside being a student i am doing some extra curiculam to boost my skills.Cureently i am learing web development. </p>
        <p style={{textAlign:'left'}}> My Interests:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>React</li>
                <li>JS</li>
              </ul>

        <p></p>
      </div>
    </div>

  )

}

function App() {

  return (
    <div className="App">
      <Personaldata />
    </div>
  );
}

export default App;
