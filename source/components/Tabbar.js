
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    tabIcons = []
  }



  render() {
    return (<View style={[styles.tabs, this.props.style,]}>
      {this.props.tabs.map((tab, i) => {
        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
          <Icon
            name={tab}
            size={30}
            color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => { tabIcons["i"] = icon }}
          />
        </TouchableOpacity>
      })}
    </View>)
  }

}

Tabbar.PropTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
})
