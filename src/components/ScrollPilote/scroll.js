import React, { useState } from "react";



import "./scroll.css";

let g;
fetch('http://142.93.104.14/api/summary_seasons?year=2018')
    .then((result) => {

        return result.json();
    }).then((jsonResult) => {
        var tab = jsonResult['hydra:member'];
        let a = new Array;
        for (let i = 0; i < tab.length; i++) {

            let tt = tab[i].constructor.name;

            let p = tab[i].driver;
            let h = Object.assign(p, { constructor: tt });



        }


        g = a;

    })
const Scroll = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    let a = 2014;
    fetch('http://142.93.104.14/api/summary_season_constructors?year=2012&order%5Bscore%5D=desc')
        .then((result) => {

            return result.json();
        }).then((jsonResult) => {
            var tab = jsonResult['hydra:member'];

            for (let i = 0; i < tab.length; i++) {

                let childArray = tab[i].drivers;

                let p;
                for (let j = 0; j < childArray.length; j++) {
                    let cons = tab[i].constructor;

                    p = childArray[j];
                    let tt = cons.name;


                }

            }

        })



    const images = props.galery


    const changeIndex = i => {
        let next = currentIndex + i;
        if (next < 0 || next >= images.length) {
            return;
        }

        setCurrentIndex(next);
    };

    var tableauOrig = [{ val1: 1, val2: 10 }, { val1: 2, val2: 10 }, { val1: 3, val2: 10 }];

    var tableauFormaté = tableauOrig.map(obj => {
        var rObj = {};
        rObj = obj;

        return rObj;
    });

    return (
        <div className="fixe">
            <div
                className="scroll">
                {images.map((url, i) =>
                    <div className="scrolldiv"
                    >
                        <div>

                            <figure class="snip"
                                onClick={() => {
                                    setCurrentIndex(i.image);
                                    props.setFirstPilot(url)
                                    console.log(i + 1, url);//c'est ici que tu recuper la data que t'as besoin
                                }}>
                                {
                                    images.map((galeryEcurieurl, i) => {


                                    })
                                }

                                <img
                                    className="im"

                                    src={url.imgUrl}

                                />

                                <h1 className="name aboutPilote">{url.forename || url.name} {url.surname}</h1>

                                <div>
                                    <a><i className="ion-ios-star-outline left-icon"><p>{i + 1}</p></i></a>
                                </div>
                            </figure>
                        </div>

                    </div>
                )
                }
            </div>

        </div >

    )
}

export default Scroll;