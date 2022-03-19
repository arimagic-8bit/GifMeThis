import './styles.scss';
import BasicPage from '../../templates/BasicPage';

const Intro = () => (
  <div className="App">
    <BasicPage 
      withSearchbar 
      placeholder="Search for a gif"
    />
  </div>
)

export default Intro;
