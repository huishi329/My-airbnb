import styles from './EditSpotPage.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpotDetail } from '../../store/spot';
import EditSpotForm from '../EditSpotForm/EditSpotForm';
import EditSpotMenu from './EditSpotMenu/EditSpotMenu';
import { Route, Routes } from 'react-router-dom';
import DragAndDropImage from '../DragAndDropImage/DragAndDropImage';

export default function EditSpotPage({ }) {
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots.singleSpot);
    const params = useParams();
    const spotId = params.spotId;

    useEffect(() => {
        dispatch(getSpotDetail(spotId));
    }, [dispatch, spotId]);

    if (!spot) return null;

    return (
        <div className={styles.wrapper}>
            <h1>{spot.title}</h1>
            <div className={styles.container}>
                <EditSpotMenu spot={spot} />
                <Routes>
                    <Route path='/basics' element={<EditSpotForm spot={spot} />} />
                    <Route path='/photos' element={<DragAndDropImage />}></Route>
                </Routes>
            </div>
        </div>
    );
}
