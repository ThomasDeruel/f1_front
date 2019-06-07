import { type } from "os";

class Api {
    
    /**
     * @return Array
     * Return default pilots (2018 years)
     */
     static async getDefaultPilots(){
        const response = await fetch('http://142.93.104.14/api/summary_seasons?year=2018');
        const data = await response.json();

        const pilots = data['hydra:member'].map((member,i)=>{
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
        })
        return pilots;
    }
}

export default Api;