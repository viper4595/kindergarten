import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';
import { favouriteFetch } from '../actions';

class FavouriteList extends Component {

    constructor(props) {
        super(props);
        this.state = { page: 'first', favouriteList: [] };
    }

    componentWillMount() {
        this.props.favouriteFetch();
        this.createDataSource(this.props);
    }


    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ favourites }) {
        const source = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = source.cloneWithRows(favourites);
    }

    renderRow(favourite) {
        return <ListItem kindergarten={favourite} itemType="favourite" />;
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
    const favourites = _.map(state.favourites, (val) => {
        return { ...val };
    });
    return { favourites };
    console.log(favourites)
};

export default connect(mapStateToProps, { favouriteFetch })(FavouriteList);
