import { Injectable } from '@angular/core';
import { PeriodsService } from './periods.service';
import { OrdersChart, OrdersChartData } from '../data/orders-chart';

@Injectable()
export class OrdersChartService extends OrdersChartData {

  private year = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
  ];

  private data = { };

  constructor(private period: PeriodsService) {
    super();
    this.data = {
      week: this.getDataForWeekPeriod(),
      month: this.getDataForMonthPeriod(),
      year: this.getDataForYearPeriod(),
    };
  }

  private getDataForWeekPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(18, this.period.getWeeks(),),
      linesData: [
        [
          1879614.8, 1905237.6, 4885348.8, 5335491.1, 7687673.6, 5317442.3, 10057305.9, 4146419.4, 1890584.4, 10587887.4, 7942453.0, 11061643.3, 11250548.9, 7255168.7, 2029231.9, 1909719.8, 6294960.1
        ],
        [
          9089260.8, 9452368.6, 5660662.4, 11027279.6, 5145437.3, 2498541.1, 10476340.1, 13907706.8, 6882908.6, 5286487.5, 6077014.0, 2259363.0, 2228940.1, 6268889.5, 6997275.2, 5802362.7, 4913618.9
        ],
        [
          4159048.6, 2956758.3, 1985023.0, 4854090.4, 5375587.4, 5522184.3, 7333803.9, 4662226.0, 1984715.6, 1915419.1, 4836125.3, 4350146.9, 6319769.4, 5955730.9, 4232222.9, 2412958.4, 1958294.0
        ],
      ],
     
    };
  }

  private getDataForMonthPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(18, this.period.getMonths()),
      linesData: [
        [
          52860.4, 45211.3, 37106.8, 168647.1, 30497.7, 53369.0, 52156.6, 31371.2, 147135.9, 27725.0, 55147.8, 27902.4, 55106.6, 136673.2, 36129.6, 94605.7, 144063.6
        ],
        [
          119334.4, 91641.5, 117099.7, 112775.0, 159831.8, 55271.0, 27951.5, 56288.6, 119610.9, 55260.9, 42982.9, 40138.5, 148127.4, 27867.8, 55605.3, 27782.0
        ],
        [
          33371.8, 49051.2, 50699.9, 113624.6, 54938.5, 27645.1, 75865.1, 196156.1, 101032.0, 114566.3, 115466.7, 154599.6, 51005.4, 51637.7, 39720.6, 128012.5
        ],
      ],
    };
  }

  private getDataForYearPeriod(): OrdersChart {
    return {
      chartLabel: this.getDataLabels(18, this.year),
      linesData: [
        [
          5802362.7, 4913618.9, 4159048.6, 2956758.3, 1985023.0, 4854090.4, 5375587.4, 5522184.3, 7333803.9, 4662226.0, 1984715.6, 1915419.1, 4836125.3, 4350146.9, 6319769.4, 5955730.9, 4232222.9, 2412958.4, 1958294.0, 5387403.1, 5175.7
        ],
        [
          9089260.8, 9452368.6, 5660662.4,  9089260.8, 9452368.6, 5660662.4, 11027279.6, 5145437.3, 2498541.1, 10476340.1, 13907706.8, 6882908.6, 5286487.5, 6077014.0, 2259363.0, 2228940.1, 6268889.5, 6997275.2,, 5286487.5, 6077014.0, 2259363.0, 2228940.1, 6268889.5, 6997275.2
        ],
        [
          4159048.6, 2956758.3, 1985023.0, 4854090.4, 5375587.4, 5522184.3, 7333803.9, 4662226.0, 1984715.6, 1915419.1, 4836125.3, 4350146.9, 6319769.4, 5955730.9, 4232222.9, 2412958.4, 1958294.0
        ],
      ],
    };
  }

  getDataLabels(nPoints: number, labelsArray: string[]): string[] {
    const labelsArrayLength = labelsArray.length;
    const step = Math.round(nPoints / labelsArrayLength);

    return Array.from(Array(nPoints)).map((item, index) => {
      const dataIndex = Math.round(index / step);

      return index % step === 0 ? labelsArray[dataIndex] : '';
    });
  }

  getOrdersChartData(period: string): OrdersChart {
    return this.data[period];
  }
}
