import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { incrementNumber } from '../actions';

class ContainerTest extends Component {
  render() {
    const { incrementNumber, num } = this.props;

    return (
      <View>
        <TouchableHighlight onPress={() => incrementNumber(num)}>
          <Text>
            Increment Number
          </Text>
        </TouchableHighlight>
        <Text>
          {num}
        </Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return { num: state.num.num }
}

export default connect(mapStateToProps, { incrementNumber })(ContainerTest);
