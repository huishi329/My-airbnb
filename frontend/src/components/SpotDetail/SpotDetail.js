import EditSpot from '../EditSpot/EditSpot';
import styles from './SpotDetail.module.css';
import SpotImages from './SpotImages/SpotImages';

export default function SpotDetail({ spot, reviewRef }) {
    return (
        <div className={styles.spotDetail}>
            {spot &&
                <>
                    <h1>{spot.name}</h1>
                    <div className={styles.spotSummary}>
                        <span style={{ textDecoration: 'none' }}>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            {spot.avgStarRating ?
                                <span style={{ fontWeight: 600 }}>{`${Number(spot.avgStarRating).toFixed(1)}`}</span> :
                                <span style={{ fontWeight: 400 }}>New</span>
                            }
                        </span>
                        ·
                        {spot.numReviews ?
                            <span
                                onClick={() => {
                                    reviewRef.current.scrollIntoView();
                                }}
                                style={{ cursor: 'pointer' }}
                            >{`${spot.numReviews} reviews`}</span> : ' '}

                        <i className="fa-regular fa-heart"></i>
                        Superhost ·
                        <span>
                            {`${spot.city}, ${spot.state}, ${spot.country}`}
                        </span>
                        {(spot.SpotImages).length > 0 && <SpotImages images={spot.SpotImages} />}

                        <div className={styles.spotMain}>
                            <div className={styles.spotDescription}>
                                <h2>{`${spot.name} hosted by ${spot.Owner.firstName}`}</h2>
                                <p>{spot.description}</p>
                            </div>
                            <EditSpot spot={spot} reviewRef={reviewRef} />
                        </div>
                    </div>
                </>
            }
        </div >
    )

}
