import { FC } from 'react';
import { ILocation } from '../Home/types';
import LocationBox from '../LocationBox';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react'
import styles from './styles.module.scss';

interface IProps {
  locations: ILocation[];
  fetchMoreLocations: () => void;
}

const Locations: FC<IProps> = ({ locations, fetchMoreLocations }) => {
  return (
    <div className={styles.locations}>
      <InfiniteScroll
        dataLength={locations.length}
        next={fetchMoreLocations}
        // eslint-disable-next-line max-len
        hasMore={true} // hardcoded, will be changed after proper api integration
        loader={<h4>Loading...</h4>}
        scrollThreshold={1}
      >
        {locations.map((item) => (
          <LocationBox location={item} key={item.id} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Locations;
