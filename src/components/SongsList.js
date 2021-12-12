import React from 'react';
import {List, Avatar,} from 'antd';

const SongsList = () => {
    const data = [
        {
            title: <p>Blood <a href="/">/</a>/ Water</p>,
            img: "https://i.scdn.co/image/ab67616d00001e0297d11a89e5fd70347099f7c9",
            singer:"grandson",
            source: 'https://open.spotify.com/track/0AUyNF6iFxMNQsNx2nhtrw'
        },{
            title: <p><a href="/">get</a> lucky</p>,
            img: "https://i.scdn.co/image/ab67616d00001e021d97ca7376f835055f828139",            
            singer:"duft punk ft pharrell williams",
            source:'https://open.spotify.com/track/69kOkLUCkxIZYexIgSG8rq?si=f6359ee0c0814597'
        },{
            title: <p><a href="/">The</a> nights</p>,
            img: 'https://i.scdn.co/image/ab67616d00001e020ae4f4d42e4a09f3a29f64ad',
            singer:"Avicii",
            source:'https://open.spotify.com/track/0ct6r3EGTcMLPtrXHDvVjc?si=17125ca727094a45'
        },{
            title: <p>No <a href=" ">Flag</a></p>,
            img: 'https://i.scdn.co/image/ab67616d00001e02e38152f82a1814685713f67d',
            singer:'London on Da track, nicki minaj, 21 savage',
            source:'https://open.spotify.com/track/1tyjWMMINb9S0YBynTvJ7s?si=d43f06c391184c5f'
        }
    ];

    return (  
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
         
            <List.Item>
                <List.Item.Meta
                avatar={<a href={item.source} target="_blank" rel="noopener noreferrer"><Avatar shape="square" src={item.img} /></a>}
                title={item.title}
                description={item.singer}
                />
            </List.Item>
            )}
        />)
}
 
export default SongsList;