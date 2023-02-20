import { useNavigate } from 'react-router-dom';
import styles from './ReservationConfirmation.module.css';

export default function ReservationConfirmation({ reservation, spot, setShowReservation }) {
    const { startDate, endDate, total } = reservation;
    const navigate = useNavigate();
    const start = new Date(startDate);
    const end = new Date(endDate);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1><span><i className="fa-solid fa-xmark"></i></span>Your reservation is confirmed</h1>
                <div>You're going to {spot.city}.</div>
                <div className={styles.spotImage}>
                    <img src={spot.SpotImages[0].url} alt={spot.title} />
                </div>
                <div className={styles.spotInfo}>
                    <h2>{spot.title}</h2>
                    <div>Hosted by {spot.Owner.firstName}</div>
                </div>
                <div className={styles.dates}>
                    <div>
                        <div className={styles.largeText}>{start.toLocaleString('en-GB', { weekday: 'long' })}</div>
                        <div className={styles.largeText}>{start.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                        <div>Check in Anytime after</div>
                        <div>3PM</div>
                    </div>
                    <div>
                        <div className={styles.largeText}>{end.toLocaleString('en-GB', { weekday: 'long' })}</div>
                        <div className={styles.largeText}>{end.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                        <div>Check out 11AM</div>
                    </div>
                </div>
                <div className={styles.address}>
                    <div className={styles.largeText}>Address</div>
                    <div>{spot.street}, {spot.city}, {spot.state}</div>
                    <div>{spot.country}</div>
                </div>
                <div className={styles.amount}>
                    <div className={styles.largeText}>Amount</div>
                    <div>${total}</div>
                </div>
                <div>
                    <button onClick={() => setShowReservation(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}
