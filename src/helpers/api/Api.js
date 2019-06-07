import { type } from "os";

class Api {

    /**
     * @return {Array} pilots
     * Return default pilots (2018 years)
     */
     static async getDefaultPilots(){
        const response = await fetch('http://142.93.104.14/api/summary_seasons?year=2018');
        const data = await response.json();

        const pilots = data['hydra:member'].map((member,i)=>{
            return Api.dataMember(member,i);
        })
        return pilots;
    }

    /**
     * @param {Number} year 
     * @return {Array} pilots
     * return my new pilots when I change the year
     */
    static async setPilots(year){
        const response = await fetch(`http://142.93.104.14/api/summary_seasons?year=${year}`);
        const data = await response.json();

        const pilots = data['hydra:member'].map((member,i)=>{
            return Api.dataMember(member,i);
        })
        return pilots;
    }

    /**
     * @param {object} member 
     * @param {index} i
     * @return {object}
     * return the custom object of my api
     * usable on map()
     */
    static dataMember(member,i){
        return {
            id:i,
            constructor: member.constructor.name,
            fastestLapSpeed: member.fastestLapSpeed,
            forename: member.driver.forename,
            surname: member.driver.forename,
            imgUrl: member.driver.imgUrl,
            mediumGrid: member.mediumGrid,
            nationality: member.driver.nationality,
            number: member.driver.number,
            position:member.position,
            score: member.score,
            wins: member.wins            
        }
    }
}

export default Api;