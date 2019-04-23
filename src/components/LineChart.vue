<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    props: {
      chartData: {
        type: Array | Object,
        required: true
      }
    },
    data() {
      return {
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              type: 'time',
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    methods: {
      renderData() {
        this.renderChart({
          datasets: [
            {
              label: 'transactions',
              borderColor: '#249EBF',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              backgroundColor: 'transparent',
              data: this.chartData.transactions
            },
            {
              label: 'messages',
              borderColor: '#bf5170',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#bf5170',
              backgroundColor: 'transparent',
              data: this.chartData.messages
            }
          ]
        }, this.options)
      }
    },
    watch: {
      chartData() {
        this.renderData()
      }
    },
    mounted () {
      this.renderData()
    }
  }
</script>

<style scoped>

</style>
