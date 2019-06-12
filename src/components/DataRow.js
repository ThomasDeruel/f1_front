import React from "react";
import ShowData from './ShowData';
import constructors from '../helpers/constant/constructor.json';
import '../styles/css/datapilot.css';

const DataRow = ({ data, mustBeLeft, type }) => {

    return (
        <section className={`dataPilotContainer ${mustBeLeft ? 'isLeft' : ''}`}>
            <div className="dataPilotContainer-header-flex">
                <div className="dataPilotContainer-header-item">
                    {type === 'pilot' ? (
                        <h3>{`${data.forename} ${data.surname}`}</h3>
                    ) : (
                            <h3>{data.name}</h3>
                        )}

                    {type === 'pilot' && (
                        <img src={require(`../assets/img/${data.constructor}.png`)} alt="ecurie logo" />
                    )}
                </div>
            </div>
            <div className="dataPilotContainer-data-flex">
                <div className="dataPilotContainer-data">
                    {type === 'pilot' && (
                        <p className="dataPilotContainer-ecurieTitle">
                            Ecurie <span>{data.constructor}</span>
                        </p>
                    )}
                    <div className="dataListContainer">
                        {type === 'constructor' && (
                            <ShowData
                                icon="helmet"
                                isAnArray={true}
                                data={{ name: "Pilotes", value: data.drivers }} />
                        )}
                        <ShowData icon="podium" data={{ name: "Classement", value: data.position }} />
                        <ShowData icon="star" data={{ name: "Victoires", value: data.wins }} />
                        <ShowData icon="trophy" data={{ name: "Points", value: data.score }} />
                        <ShowData icon="speed" data={{ name: "Vitesse", value: data.fastestLapSpeed+' km' }} />
                    </div>
                </div>
            </div>
            <div style={mustBeLeft ? { left: '1%' } : { left: '47%' }} className="dataPilotContainer-background">
                {type === 'pilot' ? (
                    <img src={data.img} alt="background" />
                ) :
                    constructors.map(constructor => {
                        if (constructor.name === data.name) {
                            return (
                                <img className="black-and-white" src={constructor.url} alt="background" />
                            )
                        }
                    })}
            </div>
        </section>
    )
}

export default DataRow;
