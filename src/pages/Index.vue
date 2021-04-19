<template>
  <q-page class="row justify-around">
    <div class="col-md-2 col-xs-10 cloumn q-gutter-y-sm">
      <q-scroll-area
        style="height: 800px; "
        :bar-style="{
          right: '1px',
          borderRadius: '1px',
          width: '2px',
          opacity: 1
        }"
      >
        <div :key="index" v-for="(c, index) in conf">
          <q-item clickable v-ripple @click="clickItem(c.id)">
            <q-item-section>
              <q-item-label>{{ c.gaifan_name }}</q-item-label>
              <q-item-label caption>{{ c.date }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              人气{{ c.userCount }} 得分{{ c.avg.toFixed(5) }}
            </q-item-section>
          </q-item>
        </div>
      </q-scroll-area>
    </div>
    <div class="col-md-8 ">
      <q-card v-if="$q.platform.is.desktop" style="height: 600px" flat>
        <div id="vote_detail_div" class="full-height full-width"></div>
      </q-card>
    </div>

    <q-dialog v-model="showingChart" no-backdrop-dismiss>
      <q-card style="width: 90vw; height:400px">
        <q-card-section class="row items-center">
          <div
            id="vote_detail_div_mobile"
            style="width:400px;height:300px"
          ></div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="关闭" v-close-popup flat />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- 编辑开发者账号弹窗 end -->
  </q-page>
</template>

<script>
import gaifan_conf from "../assets/conf.json";
import * as echarts from "echarts";
export default {
  name: "PageIndex",
  data() {
    return {
      conf: null,
      voteDetailChart: null,
      voteDetailChartMobile: null,
      showingChart: false
    };
  },
  methods: {
    fetchData() {
      for (let i = 0; i < this.conf.length; i++) {
        if (this.conf[i].vote_url)
          this.$axios
            .get(this.conf[i].vote_url, {})
            .then(response => {
              let responseData = response.data.data;

              this.conf[i].userCount = responseData.userCount;
              this.conf[i].voteDetailList = [];
              this.conf[i].totalPoint = 0;
              for (let j = 0; j < responseData.voteDetailList.length; j++) {
                let tmp_j = responseData.voteDetailList[j];
                let vdl = {};
                vdl.sort = tmp_j.sort;
                vdl.content = tmp_j.content;
                vdl.optionVoteCount = tmp_j.optionVoteCount;
                this.conf[i].voteDetailList.push(vdl);
                this.conf[i].totalPoint =
                  this.conf[i].totalPoint +
                  this.getContentPoint(tmp_j.content) * tmp_j.optionVoteCount;
              }

              this.conf[i].avg =
                this.conf[i].totalPoint / this.conf[i].userCount;
              this.$store.commit("votedata/update_vote_data", {
                key: this.conf[i].id,
                value: this.conf[i]
              });
            })
            .catch(err => {
              console.error(err);
            });
      }
    },
    getContentPoint(content) {
      if (content.indexOf("十") > -1 || content.indexOf("10") > -1) {
        return 10;
      }
      if (content.indexOf("一") > -1 || content.indexOf("1") > -1) {
        return 1;
      }
      if (content.indexOf("二") > -1 || content.indexOf("2") > -1) {
        return 2;
      }
      if (content.indexOf("三") > -1 || content.indexOf("3") > -1) {
        return 3;
      }
      if (content.indexOf("四") > -1 || content.indexOf("4") > -1) {
        return 4;
      }
      if (content.indexOf("五") > -1 || content.indexOf("5") > -1) {
        return 5;
      }
      if (content.indexOf("六") > -1 || content.indexOf("6") > -1) {
        return 6;
      }
      if (content.indexOf("七") > -1 || content.indexOf("7") > -1) {
        return 7;
      }
      if (content.indexOf("八") > -1 || content.indexOf("8") > -1) {
        return 8;
      }
      if (content.indexOf("九") > -1 || content.indexOf("9") > -1) {
        return 9;
      }

      return 0;
    },
    clickItem(itemId) {
      if (this.$q.platform.is.mobile) {
        this.showingChart = true;
      }

      let voteData = this.$store.state.votedata.vote_data[itemId];
      if (voteData) {
        let vdlist = voteData.voteDetailList;
        let xAxisData = new Array(vdlist.length);
        let dataArray = new Array(vdlist.length);
        vdlist.forEach(voteDetailList => {
          xAxisData[voteDetailList.sort - 1] = voteDetailList.content;
          dataArray[voteDetailList.sort - 1] = voteDetailList.optionVoteCount;
        });
        let option = {
          title: {
            show: true,
            text: voteData.gaifan_name + " (" + voteData.cost + "元)",
            link: voteData.origin_url,
            subtext: "总投票人数:" + voteData.userCount + " (点击查看原帖)",
            sublink: voteData.origin_url
          },
          xAxis: {
            type: "category",
            data: xAxisData
          },
          yAxis: {
            type: "value",
            axisLabel:{
                rotate :0
            }
          },
          series: [
            {
              data: dataArray,
              type: "bar",
              label: {
                show: true,
                position: "top"
              },
              showBackground: true,
              backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)"
              }
            }
          ]
        };
        if (this.$q.platform.is.mobile) {
          option.yAxis.axisLabel.rotate = 60;
          let _this = this;
          setTimeout(() => {
            let vote_detail_div_mobile = document.getElementById(
              "vote_detail_div_mobile"
            );
            _this.voteDetailChartMobile = null;
            _this.voteDetailChartMobile = echarts.init(
              vote_detail_div_mobile,
              {},
              { renderer: "canvas" }
            );

            _this.voteDetailChartMobile.setOption(option);
          }, 100);
        } else {
          let vote_detail_div = document.getElementById("vote_detail_div");
          if (this.voteDetailChart == null) {
            this.voteDetailChart = echarts.init(
              vote_detail_div,
              {},
              { renderer: "canvas" }
            );
          }
          this.voteDetailChart.setOption(option);
        }
      }
    }
  },
  mounted() {
    this.conf = gaifan_conf;
    this.fetchData();
  }
};
</script>
