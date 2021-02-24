// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="main wrapper">
      <div class="main pane">
        <div class="left pane">
          <div class="build gear pane">
            <h1>Display Item Build Here</h1>
          </div>
          <div class="build consumables pane">
            <h1>Display List of Consumables on Path Here</h1>
          </div>
          <div class="build stats pane">
            <h1>Display Stats for Build Here</h1>
          </div>
        </div>
        <div class="center pane">
          <div class="shop pane">
            <h1>Display Searchable List of All Items Here</h1>
          </div>
          <div class="plan pane">
            <h1>Display Path Options Here</h1>
          </div>
        </div>
        <div class="right pane">
          <div class="map pane">
            <h1>Display Map & Zone Options Here</h1>
          </div>
          <div class="item-add pane">
            <h1>Display List of Additional Items on Path Here</h1>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
