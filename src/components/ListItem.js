import _ from 'lodash';
import firebase from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    Image,
    LayoutAnimation,
    TouchableOpacity
} from 'react-native';
import { CardSection } from './common';
import { selectKindergarten, addToFavourite, favouriteDelete, favouriteFetch } from '../actions';

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: undefined
        };
    }

    componentWillMount() {
        this.props.favouriteFetch();
    }

    componentDidMount() {
        const { image } = this.props.item;
        this.getImageUrl(image);
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    getImageUrl(image) {
        let imgRef = '';

        if (image !== null) {
            for (let i = 0; i < Object.keys(image).length; i++) {
                imgRef += Object.values(image[i]);
            }
        }

        firebase.storage().ref().child(`img/${imgRef}`).getDownloadURL()
            .then((url) => this.setState({ url }));
    }

    getFavouriteUid() {
        const { id } = this.props.item;
        const list = this.props.favourites;

        for (let i = 0; i < list.length; i++) {
            if (id === list[i].id) {
                return list[i].uid;
            }
        }
    }

    isExist() {
        const { id } = this.props.item;
        return this.props.favouriteIndex.some(val => val === id);
    }

    favouriteHandler() {
        const { uid } = this.props.item;
        if (this.props.itemType === 'kindergarten') {
            if (!this.isExist()) {
                this.props.addToFavourite(this.props.item);
            } else {
                this.props.favouriteDelete({ uid: this.getFavouriteUid() });
            }
        } else {
            this.props.favouriteDelete({ uid });
        }
    }

    renderDetails(address, phone, last_updated) {
        const { containerStyle, firstContentStyle, contentStyle, imageStyle, circleStyle } = styles;

        const path = (this.props.itemType === 'favourite' || this.isExist())
            ? require('assets/icons/icStarChoose@3x.png')
            : require('assets/icons/icStarNotChoose@3x.png');

        if (this.props.expanded) {
            return (
                <View style={containerStyle}>
                    <Image
                        source={{ uri: this.state.url }}
                        style={imageStyle.headerStyle}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('assets/icons/icAddress@3x.png')}
                            style={imageStyle.symbolStyle}
                            resizeMode={'contain'}
                        />

                        <Text style={firstContentStyle}>
                            Address: { address }
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={circleStyle}
                        onPress={this.favouriteHandler.bind(this)}
                    >
                        <Image
                            source={path}
                            style={imageStyle.starStyle}
                        />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image
                            source={require('assets/icons/icPhone@3x.png')}
                            style={imageStyle.symbolStyle}
                            resizeMode={'contain'}
                        />

                        <Text style={contentStyle}>
                            Phone: { phone }
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('assets/icons/icUpdate@3x.png')}
                            style={imageStyle.symbolStyle}
                            resizeMode={'contain'}
                        />

                        <Text style={contentStyle}>
                            Last Updated: { last_updated }
                        </Text>
                    </View>
                </View>
            );
        }
    }

    render() {
        const { id, title, address, phone, last_updated } = this.props.item;
        const { url } = this.state;
        return (
            <TouchableOpacity onPress={() => this.props.selectKindergarten(id)} >
                <View>
                    <CardSection>
                        <Image
                            source={require('assets/icons/icLogo@3x.png')}
                            style={{
                                width: 20,
                                height: 23,
                                marginTop: 16,
                                marginLeft: 22
                            }}
                        />
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {url ? this.renderDetails(address, phone, last_updated) : null}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    containerStyle: {
        paddingBottom: 10,
        flexDirection: 'column',
        backgroundColor: '#f9f9f9'
    },
    titleStyle: {
        height: 50,
        fontSize: 16,
        fontWeight: '500',
        padding: 19,
        paddingLeft: 7,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    firstContentStyle: {
        fontSize: 15,
        padding: 4,
        paddingTop: 21,
        marginLeft: 12,
        marginRight: 50
    },
    contentStyle: {
        fontSize: 15,
        padding: 4,
        paddingTop: 10,
        marginLeft: 12,
        marginRight: 50
    },
    imageStyle: {
        logoStyle: {
            width: 20,
            height: 23,
            marginTop: 16,
            marginLeft: 22
        },
        headerStyle: {
            flex: 1,
            width: null,
            height: 213
        },
        starStyle: {
            width: 24,
            height: 24
        },
        symbolStyle: {
            height: 18,
            width: 12,
            marginTop: 6,
            marginLeft: 21,
        }
    },
    circleStyle: {
        width: 42,
        height: 42,
        borderRadius: 42 / 2,
        marginTop: 188,
        marginLeft: 320,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
};

const mapStateToProps = (state, props) => {
    const expanded = state.selectedKindergartenId === props.item.id;

    const favouriteIndex = _.map(state.favourites, (fav) => {
        return fav.id;
    });

    const favourites = _.map(state.favourites, (val, uid) => {
        return { ...val, uid };
    });

    return { expanded, favourites, favouriteIndex };
};

export default connect(mapStateToProps, {
    selectKindergarten,
    addToFavourite,
    favouriteFetch,
    favouriteDelete })(ListItem);
