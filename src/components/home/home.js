import React, {Component} from 'react';
import './home.css';

class Home extends Component {

  render() {
    return (
    <div className="ag-homewrapper" >
      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <p className="text">
            Sehr schön oder? 
        </p>
        <p className="contentText">
            Diese Seite hier, ist nicht nur eine Seite, nein es ist eine Progressive
            Web App. Nun was bedeutet das? Eine Progressive Web App ist im Grunde
            erst einmal eine normale Website, die sich verhält wie eine App.
            Look und Feel sind gleich, nur die Adresszeile oben stört oder? 
        </p>
        <p className="contentText">
            Nutzen Sie Android mit dem Chrome Browser zum Beispiel, dann können Sie
            diese Seite ihrem Homescreen hinzufügen.
            Öffnen Sie dann das Icon auf Ihrem Bildschirm, verhält sich diese Seite,
            wie eine normale App.
            Sie wird offline gespeichert, ist schnell geöffnet und kann so viel, 
            wenn man dies natürlich möchte.
        </p>
        <p className="contentText">
            In diesem Beispiel habe ich links einen kleinen Blog eingetragen, 
            der immer die neuesten Beiträge aus dem Netz holt, rechts sehen sie einfach
            Bilder von meinem Instagram Account. Es soll Ihnen einfach die Vorstellung davon 
            geben, wie eine Progressive Web App nutzbar ist.
        </p>
        
        
      </div>

      
      </div>
    );
  }

  componentDidMount(){
    console.log('WAS INIT')
  }
}

export default Home;