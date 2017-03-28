import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';
import { kindergartenFetch, favouriteFetch } from '../actions';

class KindergartenList extends Component {

    constructor(props) {
        super(props);
        this.state = { page: 'first', clicked: 'false' };
    }

    componentWillMount() {
        this.props.kindergartenFetch();
        this.createDataSource(this.props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ kindergartens }) {
        const source = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = source.cloneWithRows(kindergartens);
    }

    renderRow(kindergarten) {
        return <ListItem kindergarten={kindergarten} itemType="kindergarten" />;
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    style={{ height: 200 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 900,
        paddingTop: 60,
        paddingBottom: 60,
        justifyContent: 'center',
    }
});

const mapStateToProps = (state) => {
    const kindergartens = _.map(state.kindergartens, (val) => {
        return { ...val };
    });
    return { kindergartens };
};

export default connect(mapStateToProps, { kindergartenFetch })(KindergartenList);
