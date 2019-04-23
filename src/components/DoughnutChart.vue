<script>
  import { Doughnut } from 'vue-chartjs'
  import randomColor from 'randomcolor';

  export default {
    extends: Doughnut,
    props:['chartData', 'chartLabels'],
    data() {
      return {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            animateRotate: true
          }
        }
      }
    },
    methods: {
      renderData() {
        this.renderChart({
          labels: this.chartLabels,
          datasets: [{
            data: this.chartData,
            backgroundColor: this.chartData.map((datapoint) => randomColor())
          }]
        }, this.options)
      }
    },
    watch: {
      chartData() {
        this.renderData()
      },
    },
    mounted () {
      this.renderData()
    }
  };
</script>
