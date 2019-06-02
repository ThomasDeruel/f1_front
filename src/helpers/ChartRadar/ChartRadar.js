import Chart from 'chart.js';

class ChartRadar{
    ctx;
    option;
    labels = [];
    dataSets;

    constructor(chart,labels, dataSets, ...arg){
        if(arg.length === 1) {
            this.setOption(arg[0]);
        }
        this.setCtx(chart);
        this.setLabels(labels);
        this.setDatasets(dataSets);
        return this.makeMeARadar();
    }

    setOption(option){
        this.option = option;
    }
    setLabels(labels){
        this.labels = labels;
    }

    setCtx(chart) {
        this.ctx = chart.current.getContext("2d");;
    }

    setDatasets(dataSets){
        this.datasets = dataSets;
    }

    makeMeARadar(){
        const {ctx,labels,datasets,option} = this;
        return new Chart(ctx, {
            type: 'radar',
            data: {
              labels,
              datasets,
              option
            }
        })
    }
}

export default ChartRadar;