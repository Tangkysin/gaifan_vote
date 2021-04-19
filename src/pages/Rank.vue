<template>
  <q-page class="row q-gutter-md q-pa-xl">
    <div class="col-md-2 col-xs-10" v-if="totalPointRank != null">
      <span class="text-h6">评分总榜</span>
      <q-list bordered separator dense>
        <template v-for="(value, index) in totalPointRank">
          <q-item v-ripple :key="index">
            <q-item-section>
              <q-item-label>{{ value.gaifan_name }}</q-item-label>
            </q-item-section>
            <q-item-section side>{{ value.avg.toFixed(5) }}分 </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>

    <div class="col-md-2 col-xs-10" v-if="heatRank != null">
      <span class="text-h6">人气总榜</span>
      <q-list bordered separator dense>
        <template v-for="(value, index) in heatRank">
          <q-item v-ripple :key="index">
            <q-item-section>
              <q-item-label>{{ value.gaifan_name }}</q-item-label>
            </q-item-section>
            <q-item-section side>{{ value.userCount }} </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>

    <div class="col-md-2 col-xs-10" v-if="costPerformanceRank != null">
      <span class="text-h6"
        >性价比榜<q-tooltip
          anchor="top middle"
          self="bottom middle"
          :offset="[10, 10]"
        >
          来自 KopRL也想吃盖饭:mcg = 评分^2 / 价格^0.35 *3
        </q-tooltip></span
      >
      <q-list bordered separator dense>
        <template v-for="(value, index) in costPerformanceRank">
          <q-item v-ripple :key="index">
            <q-item-section>
              <q-item-label>{{ value.gaifan_name }}</q-item-label>
            </q-item-section>
            <q-item-section side>{{ value.mcg.toFixed(2) }} </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>

    <div class="col-md-4 col-xs-12">
      <div class="row">
        <span class="text-h6">总共花费{{ totalCost }}元</span>
      </div>
      <div class="row">
        <q-card style="height: 400px" class="full-width" flat>
          <div id="price_dist_div" class="full-height full-width"></div>
        </q-card>
      </div>
      <div class="row">
        <q-card style="height: 400px" class="full-width" flat>
          <div id="price_point_dist_div" class="full-height full-width"></div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "PageIndex",
  data() {
    return {
      totalPointRank: null,
      heatRank: null,
      costPerformanceRank: null,
      totalCost: 0,
      priceDistmap: {},
      priceDistChart: null,
      pricePointDist: [],
      pricePointDistChart: null
    };
  },
  methods: {
    renderRank(vote_data_array) {
      this.totalPointRank = JSON.parse(JSON.stringify(vote_data_array));
      this.totalPointRank.sort((a, b) => {
        return b.avg - a.avg;
      });

      this.heatRank = JSON.parse(JSON.stringify(vote_data_array));
      this.heatRank.sort((a, b) => {
        return b.userCount - a.userCount;
      });

      this.costPerformanceRank = JSON.parse(JSON.stringify(vote_data_array));
      this.costPerformanceRank.sort((a, b) => {
        return b.mcg - a.mcg;
      });
    },
    renderPriceDist() {
      let price_dist_div = document.getElementById("price_dist_div");
      if (this.priceDistChart == null) {
        this.priceDistChart = echarts.init(
          price_dist_div,
          {},
          { renderer: "canvas" }
        );
      }
      let seriesData = [];
      let max = 0;
      for (let key in this.priceDistmap) {
        max = Math.max(max, this.priceDistmap[key]);
        seriesData.push({ value: this.priceDistmap[key], name: key + "元" });
      }
      let option = {
        title: {
          text: "价格分布",
          left: "center",
          top: 20
        },

        tooltip: {
          trigger: "item"
        },

        series: [
          {
            name: "价格分布",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: seriesData.sort(function(a, b) {
              return a.value - b.value;
            }),
            label: {
              fontSize: 14
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      };
      this.priceDistChart.setOption(option);
    },
    renderPricePointDist() {
      let price_point_dist_div = document.getElementById(
        "price_point_dist_div"
      );
      if (this.pricePointDistChart == null) {
        this.pricePointDistChart = echarts.init(
          price_point_dist_div,
          {},
          { renderer: "canvas" }
        );
      }

      let option = {

        title: {
          text: "价格评分分布",
          left: "center",
          top: 20
        },

        xAxis: {
          scale: true,
          name: "价格(元)"
        },
        yAxis: {
          scale: true,
          name: "评分"          
        },
        tooltip: {
          trigger: "item",
          formatter:'{c0}'
        },
        series: [
          {
            type: "scatter",
            data: this.pricePointDist
          }
        ]
      };
      this.pricePointDistChart.setOption(option);
    }
  },
  mounted() {
    let vote_data = this.$store.state.votedata.vote_data;
    let vote_data_array = []; //

    for (let key in vote_data) {
      // 来自虎扑会计 KopRL也想吃盖饭
      // mcg = 评分^2 / 价格^0.35 *3
      vote_data[key].mcg =
        (Math.pow(vote_data[key].avg, 2) /
          Math.pow(vote_data[key].cost, 0.35)) *
        3;
      vote_data_array.push(vote_data[key]);
      this.totalCost = this.totalCost + vote_data[key].cost;
      if (this.priceDistmap[vote_data[key].cost]) {
        this.priceDistmap[vote_data[key].cost] =
          this.priceDistmap[vote_data[key].cost] + 1;
      } else {
        this.priceDistmap[vote_data[key].cost] = 1;
      }

      let point = vote_data[key].avg.toFixed(5);
      this.pricePointDist.push([vote_data[key].cost, point, vote_data[key].gaifan_name]);
    }

    this.renderRank(vote_data_array);
    this.renderPriceDist();
    this.renderPricePointDist();
  }
};
</script>
