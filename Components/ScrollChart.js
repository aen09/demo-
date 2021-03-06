import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';

export default class ScrollChart extends Component {
  constructor(props) {
    super(props);

    const chartConfig = {
      type: 'scrollline2d', // your chart type goes here
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        chart: {
          theme: 'fusion',
          caption: 'Sales Trends',
          subCaption: '(2016 to 2017)',
          xAxisName: 'Month',
          yAxisName: 'Revenue',
          numberPrefix: '$',
          lineThickness: '3',
          flatScrollBars: '1',
          scrollheight: '10',
          numVisiblePlot: '12',
          showHoverEffect: '1',
        },
        categories: [
          {
            category: [
              {
                label: 'Jan 2016',
              },
              {
                label: 'Feb 2016',
              },
              {
                label: 'Mar 2016',
              },
              {
                label: 'Apr 2016',
              },
              {
                label: 'May 2016',
              },
              {
                label: 'Jun 2016',
              },
              {
                label: 'Jul 2016',
              },
              {
                label: 'Aug 2016',
              },
              {
                label: 'Sep 2016',
              },
              {
                label: 'Oct 2016',
              },
              {
                label: 'Nov 2016',
              },
              {
                label: 'Dec 2016',
              },
              {
                label: 'Jan 2017',
              },
              {
                label: 'Feb 2017',
              },
              {
                label: 'Mar 2017',
              },
              {
                label: 'Apr 2017',
              },
              {
                label: 'May 2017',
              },
              {
                label: 'Jun 2017',
              },
              {
                label: 'Jul 2017',
              },
              {
                label: 'Aug 2017',
              },
              {
                label: 'Sep 2017',
              },
              {
                label: 'Oct 2017',
              },
              {
                label: 'Nov 2017',
              },
              {
                label: 'Dec 2017',
              },
            ],
          },
        ],
        dataset: [
          {
            data: [
              {
                value: '27400',
              },
              {
                value: '29800',
              },
              {
                value: '25800',
              },
              {
                value: '26800',
              },
              {
                value: '29600',
              },
              {
                value: '32600',
              },
              {
                value: '31800',
              },
              {
                value: '36700',
              },
              {
                value: '29700',
              },
              {
                value: '31900',
              },
              {
                value: '34800',
              },
              {
                value: '24800',
              },
              {
                value: '26300',
              },
              {
                value: '31800',
              },
              {
                value: '30900',
              },
              {
                value: '33000',
              },
              {
                value: '36200',
              },
              {
                value: '32100',
              },
              {
                value: '37500',
              },
              {
                value: '38500',
              },
              {
                value: '35400',
              },
              {
                value: '38200',
              },
              {
                value: '33300',
              },
              {
                value: '38300',
              },
            ],
          },
        ],
      },
    };
    this.state = {
      chartConfig,
    };
  }

  render() {
    //const modules = ['charts']; // module names goes here
    return (
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <ReactNativeFusionCharts
            chartConfig={this.state.chartConfig}
            //modules={modules}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
