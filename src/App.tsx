import './App.css';

import github from './assets/github.png';
import instagram from './assets/instagram_logo.png';
import profileImage from './assets/profile_image.jpg';
import solved from './assets/solved_ac.png';

function App() {
  return (
    <div className='wrapper'>
      
      <img src={profileImage} className='profile'/>
      <div className='introduction'>
        <h2>컴퓨터공학부 24학번 허태윤</h2>
        <br/>
        <ul>
          <li>와플 스튜디오 22.5기 프론트엔드 루키 </li>
          <li>ENFP😆😆</li>
          <li>개발 관련 지식과 팁을 많이 얻어가고 싶어요!</li>
          <li>인스타그램 맞팔로우 환영!!</li>
        </ul>
        <br/>
        <div className='logo-wrapper'>
          <a href='https://github.com/working05' target="_blank" rel="noreferrer">
            <img src={github} className='logo'/>
          </a>
          <a href='https://solved.ac/profile/working05' target="_blank" rel="noreferrer">
            <img src={solved} className='logo'/>
          </a>
          <a href='https://www.instagram.com/heo_taeyoon/' target="_blank" rel="noreferrer">
            <img src={instagram} className='logo'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
