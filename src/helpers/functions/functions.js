export const convertToHours = (timeStamp) => {
    const currentDate = new Date(timeStamp*1000);
    const seconds = ('0'+currentDate.getSeconds()).substr(-2);
    const minutes = ('0'+currentDate.getMinutes()).substr(-2);
    const hours = ('0'+currentDate.getHours()).substr(-2);
    return `${hours}:${minutes}:${seconds}`;
}
