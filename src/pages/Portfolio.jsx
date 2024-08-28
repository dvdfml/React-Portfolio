import rateRadar from '../assets/images/RateRadar.png';
import schiffskrieg from '../assets/images/Schiffskrieg.png';

const style = {
  width: "20rem"
}
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="containter-fluid">
        <div className='row justify-content-around'>
          <div className="card" style={style}>
            <img className="card-img-top" src={rateRadar} alt="Rate Radar logo" />
            <div class="card-body">
              <h5 class="card-title">Rate Radar</h5>
              <p class="card-text">JavaScript/API</p>
              <a href="https://seokhh10.github.io/Rate-Radar/" class="btn btn-primary">Website</a>
            </div>
          </div>
          <div className="card" style={style}>
            <img className="card-img-top" src={schiffskrieg} alt="Schiffskrieg logo" />
            <div class="card-body">
              <h5 class="card-title">Schiffskrieg</h5>
              <p class="card-text">Node.js/PostgresSQL</p>
              <a href="https://github.com/Rod-Freedom/Schiffskrieg" class="btn btn-primary">GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
