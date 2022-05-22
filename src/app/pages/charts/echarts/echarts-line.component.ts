import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['ETG1', 'ETG2', 'ETG3'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'log',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: [
          {
            name: 'ETG1',
            type: 'line',
            data: [52860.4, 45211.3, 37106.8, 168647.1, 30497.7, 53369.0, 52156.6, 31371.2, 147135.9, 27725.0, 55147.8, 27902.4, 55106.6, 136673.2, 36129.6, 94605.7, 144063.6, 119334.4, 91641.5, 117099.7, 112775.0, 159831.8, 55271.0, 27951.5],
          },
          {
            name: 'ETG2',
            type: 'line',
            data: [44401.5, 35787.7, 167881.1, 48798.6, 209414.4, 316232.9, 130813.7, 276272.6, 78762.4, 804748.1, 401370.7, 140422.6, 852497.6, 364485.3, 101290.9, 224923.9, 115704.0, 93816.0, 173384.1, 55031.4, 30157.6, 54000.3, 146888.7, 30725.7],
          },
          {
            name: 'ETG3',
            type: 'line',
            data: [74517.8, 123382.0, 202120.1, 127912.6, 100954.9, 164525.8, 48045.9, 46188.3, 51751.9, 126174.7, 51876.7, 38292.8, 41074.5, 51979.0, 114645.8, 51808.3, 36540.5, 130093.1, 51018.4, 26535.7, 51414.4, 122660.4, 40288.7, 51114.3],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
